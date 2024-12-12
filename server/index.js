import dotenv from "dotenv";
import express from "express";
import testRoutes from "./routes/test.js"
import authRoutes from "./routes/auth.js"



// project configrations:-
const app = express();
dotenv.config();
const port = process.env.PORT;



// route to check project is working:-
app.get('/', (req, res) => { res.send('Welcome to facebook clone Backend!!') });

// project routes:-
app.use("/test", testRoutes);
app.use("/auth", authRoutes)


// Project is live on port:-
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${port}/`);
});