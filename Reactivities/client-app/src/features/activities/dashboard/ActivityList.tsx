import { Header } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react/jsx-runtime";


export default observer(function ActivityList() {

    /*const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    } */

    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color="teal">
                        {group}
                    </Header>
                            {activities.map(activity => (

                                <ActivityListItem key={activity.id} activity={activity} />
                                /*<Item key={activity.id}>
                                    <Item.Content>
                                        <Item.Header as='a'>{activity.title}</Item.Header>
                                        <Item.Meta>{activity.date}</Item.Meta>
                                        <Item.Description>
                                            <div>{activity.description}</div>
                                            <div>{activity.city}, {activity.venue}</div>
                                        </Item.Description>
                                        <Item.Extra>
                                            <Button
                                                as={Link} to={`/activities/${activity.id}`}
                                                floated="right"
                                                content="View"
                                                color="blue"
                                            />
                                            <Button
                                                onClick={(e) => handleActivityDelete(e, activity.id)}
                                                floated="right"
                                                content="Delete"
                                                color="red"
                                                loading={loading && target === activity.id}
                                                name={activity.id}
                                            />
                                            <Label basic content={activity.category} />
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>*/
                            ))}             
                </Fragment>
            ))}
        </>
    )
})