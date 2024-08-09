// import required files
import express from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import { getDelegation } from './controllers/Delegation.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// Middleware for parsing JSON and URL-encoded data in request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()), app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: function(origin, callback){
      return callback(null, true);
    },
    credentials: true
}));
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)

// routes
app.get('/api/w3up-delegation/:did', async (req, res) => {
    try {
      const did = req.params.did;
      const delegation = await getDelegation(did);
      res.send(delegation);
    } catch (error) {
      res.status(500).send('Error creating delegation');
    }
  });

// default route
app.get("/",(req,res)=>{
    return res.json({
        success:true, 
        message:"Server is up and running..."
    });
})

// activate server 
app.listen(PORT,()=>{
    console.log(`App is running at port number ${PORT}`)
})