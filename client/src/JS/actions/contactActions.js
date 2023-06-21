import {GET_CONTACTs_SUCCESS , GET_CONTACTs_LOAD ,GET_CONTACTs_FAIL , GET_ONE_CONTACT} from "../constant/actionTypes"
import axios from "axios" 

export const getcontacts =() => async (dispatch) =>{
    dispatch ({type :GET_CONTACTs_LOAD})
    try {
        let result =await axios.get("/api/contact")
        console.log(result.data.response)
        dispatch ({type :GET_CONTACTs_SUCCESS , playload :result.data.response});
        
    } catch (error) {
        console.log(error)
        dispatch ({type :GET_CONTACTs_FAIL , playload :error})

        
    }
}
export const getonecontact =(id) => async (dispatch) =>{
   
    try {
        let result =await axios.get(`api/contact/${id}`)
        console.log(result.data.response)
        dispatch ({type : GET_ONE_CONTACT, playload :result.data.response});
        
    } catch (error) {
        console.log(error)
        

        
    }}
    export   const deletecontact =(id) => async (dispatch) =>{
   
        try {
           await axios.get(`api/contact/${id}`)
          dispatch (getcontacts())
            
        } catch (error) {
            console.log(error)
            
    
            
        }}

        export   const postcontact =(FormData) => async (dispatch) =>{
   
            try {
               await axios.get("api/contact/newcontact",FormData)
              dispatch (getcontacts())
                
            } catch (error) {
                console.log(error)
                
        
                
            }}