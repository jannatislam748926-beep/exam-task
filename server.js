import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './Config/db.config.js';
import taskRoutes from './Routes/task.route.js';



const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});