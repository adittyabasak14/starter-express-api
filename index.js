<<<<<<< Updated upstream
const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
=======
const app = require('express')();

const PORT = 4000;
app.listen(
    PORT,
    () => console.log(`Server is running on ${[PORT]}`)
);

app.get('/fruits', (req, res) => {
    res.send("mango and banana")
});
>>>>>>> Stashed changes
