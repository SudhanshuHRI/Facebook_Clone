import testRoutes from "./routes/test.js";
const express = require('express');
const app = express();


app.use("/test",testRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to facebook clone Backend');
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});