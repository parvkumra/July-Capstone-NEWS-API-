import express from 'express';
import User from './models/user'; 
import generateToken from './utils/generateToken'; 

const router = express.Router();


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
   
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });


    if (user.password !== password) return res.status(400).json({ message: 'Invalid credentials' });

   
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/signin', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    
    const newUser = new User({ name, email, password });

    
    await newUser.save();

    
    const token = generateToken(newUser);
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;