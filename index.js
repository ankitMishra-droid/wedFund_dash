const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const cors = require('cors');
const connectToMongo = require('./config/db');
const bodyParser = require('body-parser');
const Contact = require('./model/Contact')


dotenv.config()
connectToMongo();

const app = express();
app.use(bodyParser.json())
app.use(cors());
const port = 4000;

app.get('/dashboard', async (req,res) =>{
  try{
  const docs = await Contact.find({});
  res.json(docs)
  }catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error");
  }

})

app.delete(`/dashboard/:id`, async(req,res) =>{
  const deleteData = await Contact.findByIdAndDelete(req.params.id)
  res.json(deleteData);
})

app.use(express.static(path.join(__dirname,'./admin/build')));

app.post('*', function(_,res){
    res.sendFile(
        path.join(__dirname,"./admin/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    );
});

const server = app.listen(port, function(req,res){
    console.log(`The server running at http://localhost:${port}`)
})