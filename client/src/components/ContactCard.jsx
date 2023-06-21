import React from 'react'
import {Card , Button} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getonecontact , deletecontact} from '../JS/actions/contactActions';

const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  const getcontacts =()=> {
    dispatch (getonecontact(contact._id));
  }
  const handleDelete =()=>{
    dispatch (deletecontact (contact._id))
  }
  return (
    <Card style={{ width: '18rem' , margin :"1rem"}}>
    <Card.Img variant="top" src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Contacts-icon.png" />
    <Card.Body>
      <Card.Title>Name :{contact.name}</Card.Title>
      <Card.Text>
        Email: {contact.email}
        </Card.Text>
        <Card.Text>
       Phone : {contact.phone}
      </Card.Text>
      <Button variant="primary" onClick={getcontacts} style ={{margin:"1rem"}}>Edit</Button>
      <Button variant="danger" onclick ={handleDelete}>delete</Button>
    </Card.Body>
  </Card>
  )
}

export default ContactCard