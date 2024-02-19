//---------- import packages ----------
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'


//---------- import files  ----------
import router from './src/Routes/mealsRoute.js'; 

const PORT = 3000;
const MONGOO_DB_URL = 'mongodb+srv://mrprasanthmuthu:WgpIHcYsqfH9pLdg@cluster0.80mglt7.mongodb.net/MernWeb?retryWrites=true&w=majority';
const app = express();

app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose.connect(MONGOO_DB_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));


app.get('/', async (req, res) => {
    res.send({
        version: '0.0.1'
    });
});

app.use("/api" , router);
  

app.listen(PORT, () => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
  });
