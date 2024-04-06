import express from 'express';
const app = express();
import {URL} from '@repo/common/url';

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from debu!', url: URL});
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
