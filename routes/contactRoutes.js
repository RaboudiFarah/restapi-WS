const express = require ("express");
const router = express.Router();
const conntrollers = require ("../controllers/contactControllers")

router.post("/newcontact", conntrollers.postcontact)
router.get ("/",conntrollers.getcontacts)
router.get ("/:id",conntrollers.getcontactByID)
router.delete ("/:id",conntrollers.deletecontactByID)
router.put ("/:id",conntrollers.updatecontact)





module.exports = router