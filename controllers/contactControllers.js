const Contact = require ("../model/contact");

//adding new contact
exports.postcontact = async (req,res) => {
    try {
        const{name,email,phone }=req.body ;
        
        if (!name || !email ){
            return res.status(400).send ({msg: "please enter all fields"})
     
       }
       const user = await Contact.findOne ({email:email})
       if (user) {
    return res.status (400).send ({msg:"Email already Exist"})}
    
    const newContact= new Contact ({...req.body})
    const contact = await newContact.save()
        return res.status(201).send({msg:"Adding contact with success.",response :contact})
    } catch (error) {
    console.log(error)
    res.status(500).send({msg:"we can not add contact"})
    }
   }

///find contact  from model contact
   exports.getcontacts = async (req ,res) => {
    try {
    const contacts =await Contact.find ({})
    return res.status(200).send ({msg :" getting contacts wih success ", response : contacts})
   }
 
    catch (error) {
    
    console.log(error)
    res.status (500).send ({msg:"soory we can not get contacts"})
   }
   }

   ///find contact by ID from model contact
   exports.getcontactByID = async (req ,res) => {
    try {
        const {id} =req.params
    const contact =await Contact.findOne ({_id:id})
    console.log("check contact" ,contact)
    if (!contact) {
        return res.status (400).send ({msg:"Contact Not ofund"})
    }
    return res.status(200).send ({msg :" getting contacts by id  wih success ", response : contact})
   }
 
    catch (error) {
    
    console.log(error)
    res.status (500).send ({msg:"soory we can not get contacts by id "})
   }
   }

   //delete contact by ID from model contact
   exports.deletecontactByID = async (req ,res) => {
    try {
        const {id} =req.params
    await Contact.deleteOne ({_id:id})

   
    return res.status(200).send ({msg :" deleted contacts by id  wih success "})
   }
 
    catch (error) {
    
    console.log(error)
    res.status (500).send ({msg:"soory we can not  delete contacts by id "})
   }
   }
//update contact 
   exports.updatecontact =async (req,res) =>{
    try {
        await Contact.updateOne ({_id:req.params.id} ,{$set:{...req.body}})
        res.status (200).send ({msg:"updated contact with success"})
        
    } catch (error) {
        console.log(error)
        res.status (500).send ({msg:"can nhot update"})
        
    }
   }