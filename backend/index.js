import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();
const corsOptions = {
  origin: ['https://www.gapribay.com', 'https://www.gapribay.com'],
  credentials: true  // Allow cookies and HTTP authentication to be included
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000 ;


app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)

if (1 === 1) {
    app.use(express.static('../frontend/dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('../frontend', 'dist', 'index.html'));
    });
  }
  app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})


