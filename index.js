const express = require ('express')
// const cors = require('cors')
const app = express()
const port = 3001;


app.use(express.json());
app.use("/api/users", require("./routes/api/users"));


// app.get('/', (req, res) => {
//   res.send('Hello World, from express');
// });


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))