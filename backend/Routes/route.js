const router = require('express').Router();
const DataModel = require('../Models/model');


router.post('/register', async (req, res)=>{
  try{
    const newItem = new DataModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
    })
    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
  }catch(err){
    res.json(err);
  }
})


router.post('/login', (req, res)=>{
  try{
    DataModel.findOne({email:req.body.email })
    .then((docs)=>{
        console.log("Result :",docs);
        if(docs && docs.email === req.body.email && docs.password === req.body.password){
          res.send(docs);
        }else{
          res.send({});
        }
    })
    .catch((err)=>{
        console.log(err);
    });
  }catch(err){
    res.json(err);
  }
})




module.exports = router;
