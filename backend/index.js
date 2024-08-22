// import required files
import express from "express";
import bodyParser from "body-parser";
import { getDelegation } from './controllers/Delegation.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { ethers } from "hardhat";

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

app.use(cors());

// routes
app.get('/api/w3up-delegation/:did', async (req, res) => {
    try {
      const archiveData = await getDelegation(req.params.did)
      
      // Set the appropriate headers
      res.set('Content-Type', 'application/octet-stream')
      res.set('Content-Length', archiveData.length.toString())
      
      // Send the Uint8Array as a Buffer
      res.send(Buffer.from(archiveData))
    } catch (error) {
      console.error('Error:', error)
      res.status(500).send('Error creating delegation')
    }
  })

// verify login signature
app.get("/api/verify-login", async (req, res) => {
    try {
        const { message, address, signature } = req.query;
        const recoveredAddress = ethers.utils.verifyMessage(message, signature);
        if (recoveredAddress === address) {
            return res.json({
                success: true,
                message: "Signature verified successfully"
            });
        } else {
            return res.json({
                success: false,
                message: "Signature verification failed"
            });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.json({
            success: false,
            message: "Internal server error"
        });
    }
});

// default route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running..."
    });
})

// activate server 
app.listen(PORT, () => {
    console.log(`App is running at port number ${PORT}`)
})