import {GET_CONTACTs_SUCCESS , GET_CONTACTs_LOAD ,GET_CONTACTs_FAIL ,GET_ONE_CONTACT} from "../constant/actionTypes"

const initialState ={
    loadContacts :false,
    contacts :[] ,
    user :{},
    errors :null
} 
export const contactReducer =(state=initialState ,{type ,playload}) =>{
    switch (type) {
        case GET_CONTACTs_LOAD:
            return {...state , loadContacts :true}

            case GET_CONTACTs_SUCCESS:
                return {...state , loadContacts:false , contacts: playload}

            case GET_CONTACTs_FAIL :
                return {...state , loadContacts:false , errors: playload}
            case GET_ONE_CONTACT :
                return {...state , user:playload }
    
        default:
           return state 
    }
    
}