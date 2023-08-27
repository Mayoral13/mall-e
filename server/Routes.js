const express = require('express');
const router = express.Router();
const User = require('./User'); // Import the User model


router.post('/signup', async (req, res) => {
  try {
    const { email, password  } = req.body;
    const user = await User.findOne({email});
    if(user){
        res.status(500).json({message:'User Exists'});
    }else{

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
}
}catch (error) {
    res.status(500).json({ error: 'Signup failed' });
  }
});


router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user in the database
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Email does not exist' });
      }
  
      // Check if the password is correct
      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'Login failed' });
    }
  });
  



module.exports = router;
