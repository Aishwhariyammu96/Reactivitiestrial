import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    Activity: IActivity;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity|null) => void;
}

export const ActivityDetails: React.FC<IProps> = ({Activity, setEditMode, setSelectedActivity}) => {
    return (
        <Card fluid>
    <Image src={`/assets/categoryImages/${Activity.category}.png`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{Activity.title}</Card.Header>
      <Card.Meta>
        <span >{Activity.date}</span>
      </Card.Meta>
      <Card.Description>
        {Activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths={2}>
        <Button onClick={() => setEditMode(true)} basic color='blue' content='edit' />
        <Button onClick={() => setSelectedActivity(null)} basic color='grey' content='cancel' />

      </Button.Group>
    </Card.Content>
  </Card>
    )
}
