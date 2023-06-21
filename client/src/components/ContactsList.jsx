import React , {useEffect}from 'react';
import {useSelector ,useDispatch } from 'react-redux';
import {getcontacts} from '../JS/actions/contactActions';
import ContactCard from './ContactCard';




const ContactsList = () => {

const contacts = useSelector (state => state.contactReducer.contacts);
const loadContacts = useSelector (state => state.contactReducer.loadContacts);

const dispatch =useDispatch();
useEffect (()=> {
  dispatch(getcontacts());
},[])

  return (
    <div style ={{ display:"flex" , flexwrap:"wrap", justifyContent :"center" , alignContent:"center", padding:"10%"}}> {loadContacts ? (<h1> loading ...</h1>): contacts.length ===0 ? (<h2> there is no data</h2>) : 
    contacts.map ((el)=> <ContactCard key ={el._id} contact={el}/>)}
    </div>
  )
}

export default ContactsList