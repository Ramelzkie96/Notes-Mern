import express from 'express'
import cors from 'cors'
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import rateLimiter from './middleware/rateLimiter.js';
import path from "path"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()




// middleware
if(process.env.NODE_ENV !== "production") {
  app.use(cors({
  origin: function (origin, callback) {
    if (!origin || origin === 'http://localhost:5173') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
}


app.use(express.json());
app.use(rateLimiter)



app.use("/api/notes", notesRoutes);



if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"../frontend/dist")));

  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});
}

connectDB().then(()=> {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});