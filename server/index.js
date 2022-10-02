import express from "express"; //import  library for backend

import mongoose from "mongoose";

import cors from "cors";
import Memories from './models/Memories.js';



const port=3001;

const app=express()

//middleware that will allow us to take information from frontend in JSON format
//created JSON object
app.use(express.json())


//froented to access files
//cross origin request (browser use JS which cannot fetch image from local storage for securtiy, so it tells frontend to access data server through backend)
app.use(cors());



//connection to db in compass
// mongoose.connect("mongodb://localhost:27017/memories", {
//    usedNewUrlParser:true, 
//    useUnifiedTopology: true,
// } ) 





//  app.get('/', (req, res) => {
//      res.send('Express here')
    
//  })

app.get('/api/addData', (req, res) => {
    Memories.find()
      .then(Memories => res.json(Memories))
      .catch(err => res.status(404).json({ nomemoriesdatafound: 'No memories found' }));
  });



// app.get('/api/getData', (req, res) => {
//     res.send(database.collection('memoresdatas') = () => {
//         try{
           
//             res.json({success:true}) //sending response to frontend that success is true 
//             //response in postman after send
//         }
//         catch(err)
//         {
//             console.log(err);
//             res.json({success:false}) //tell user that it is not created 
//         }
//     })
    
// })



//route at which when someone reaches this point something is inserted in the database
//-> api/addData is route
//api that is configured

app.post ('/api/addData', async(req, res) =>
{
    //console.log(req);
    const memories= new Memories({title: req.body.title,  location:req.body.location,  description: req.body.description
    })//values from memoryschema
    try{
        await memories.save();  //save info in collection
        res.json({success:true}) //sending response to frontend that success is true 
        //response in postman after send
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false}) //tell user that it is not created 
    }
});

mongoose.connect("mongodb+srv://pinkle:pinkle.123@cluster0.9t2no.mongodb.net/test",{

useNewUrlParser: true, 
useUnifiedTopology: true,  //avoids errorrs

});

const db = mongoose.connection;


db.once("open",function (){ //open connection


    //to check if server running successfully on this port
console.log("Connected to MongoDB");

app.listen(port,() => console.log(`Memories app listening on port ${port}!`));

});




//to check if server running successfully on this port
// app.listen(3001, ()=> {
//   console.log('Server running succesfully');  
// })
