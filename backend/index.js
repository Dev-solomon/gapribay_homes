import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv';
import express from 'express';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(cors({
  origin: ['https://www.gapribay.com', `${process.env.PORT}`], // Replace with your client URL
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));

if (1 === 1) {
    app.use(express.static('../frontend/dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('../frontend', 'dist', 'index.html'));
    });
  }
  const PORT = process.env.PORT || 3000 ;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)