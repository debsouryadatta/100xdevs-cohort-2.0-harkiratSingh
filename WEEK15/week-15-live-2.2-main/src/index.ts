import express, { Express, Request, Response } from 'express';
import { User } from './db';

const app: Express = express();
const port: number = 3000;

app.use(express.json());

// Endpoint to create a user
app.post('/user', async (req: Request, res: Response) => {
  const { name, age, email } = req.body;
  const newUser = new User({ name, age, email });

  try {
    const savedUser = await newUser.save();
    res.status(201).send({ message: 'User created', user: savedUser });
  } catch (err) {
    res.status(500).send({ message: 'Error creating user', error: err });
  }
});

// Endpoint to fetch all users
app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: 'Error fetching users', error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
