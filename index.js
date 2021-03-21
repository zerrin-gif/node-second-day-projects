const express = require ('express')

const app = express()
const port = 3001;
app.get('/', (req, res) => {
  res.send('Hello World, from express');
});


app.get("/about", (req, res) => { res.json("I am a code learner");});
app.get("/hobbies", (req, res) => { 
  res.json("My hobbies are cooking, cleaning, coding");
});

app.get("/friends", (req, res) => { res.json(["Lachin","Mahri","Maysa","Gulsenem","Done"]);});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))