const mongoose = require('mongoose');

const express = require('express');
const app = express();
app.use(express.json())



const port = 3000;
async function connectDb() {
  try {
    await mongoose.connect("mongodb+srv://TalhaSohail:talha12345s@cluster0.xjwahqi.mongodb.net/", {
      useNewUrlParser: true
    });
    console.log("Database connected successfully!")
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDb()


const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
})


const User = mongoose.model('user', UserSchema);

app.post('/create', async (req, res) => {
  const { username, email, phone } = req.body;           
  const user = new User({
    username,
    email,
    phone
  })


  await user.save()
  res.status(200).json(user)


})

app.get('/getUser', async (req, res) => {

  const user = await User.find()    
  res.status(200).json(user)

})

app.put('/update/:id', async (req, res) => {
  // const { username, email, phone } = req.body; 
  const options = { new: true };
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, options);       
    res.status(200).json(user)
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }

})




app.delete('/delete/:id', async (req, res) => {
  const options = { new: true };
  try {
    const user = await User.findByIdAndDelete(req.params.id, options);       
    res.status(200).json(user)
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }

})


app.listen(port, () => {
  console.log(`Example of  mongoose db on port : ${port}`);
})


