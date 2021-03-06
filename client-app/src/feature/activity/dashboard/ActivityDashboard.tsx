import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityList } from './ActivityList'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
    activities: IActivity[];
    selectActivity: (id:string)=>void;
    selectedActivity: IActivity | null;
    editMode: Boolean;
    setEditMode: (editMode : boolean) => void;
    setSelectedActivity: (activity: IActivity|null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
}
export const ActivityDashboard: React.FC<IProps> = ({activities,selectActivity,selectedActivity,editMode, setEditMode, setSelectedActivity, createActivity,editActivity,
deleteActivity}) => {
    return (
        <Grid>
         <Grid.Column width={10}>
         <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
         </Grid.Column>  
         <Grid.Column width={6}>
         {selectedActivity && !editMode && <ActivityDetails Activity={selectedActivity} setEditMode={setEditMode} setSelectedActivity={setSelectedActivity} />}
         {editMode && <ActivityForm  key={selectedActivity && selectedActivity.id || 0} setEditMode={setEditMode} Activity={selectedActivity!} createActivity={createActivity} editActivity={editActivity} />}
         </Grid.Column>
         {/* <List >
  {props.activities.map(activity => (
    <List.Item key={activity.id}>{activity.title}</List.Item>
    ))}
  </List> */}
             
        </Grid>
    )
}
