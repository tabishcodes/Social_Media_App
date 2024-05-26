import { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";


export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading,
        loadActivity, loadingInitial } = activityStore;

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity])

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    });


    function handleSubmit() {
        if (!activity.id) {
            activity.id == uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content="Loading activity..." />

    return (
        <Segment
            clearing>
            <Form
                onSubmit={handleSubmit}
                autoComplete='off'>
                <FormInput
                    placeholder='Title'
                    value={activity.title}
                    name='title'
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder='Description'
                    value={activity.description}
                    name='description'
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder='Category'
                    value={activity.category}
                    name='category'
                    onChange={handleInputChange}
                />
                <FormInput
                    type="date"
                    placeholder='Date'
                    value={activity.date}
                    name='date'
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder='City'
                    value={activity.city}
                    name='city'
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder='Venue'
                    value={activity.venue}
                    name='venue'
                    onChange={handleInputChange}
                />

                <Button
                    floated="right"
                    positive
                    type="submit"
                    content="Submit"
                    loading={loading}
                />
                <Button
                    floated="left"
                    type="submit"
                    content="Cancel"
                    as={Link} to='/activities'
                />
            </Form>
        </Segment>
    )
}
)