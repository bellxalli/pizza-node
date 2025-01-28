//import express
import express from "express";

//instantiate an express application
const app = express();

//serve static files from the 'public' directory
app.use(express.static('public'));

//define a port number for our server to listen 
const PORT = 3000;

//define a "default" route for out home page
app.get('/', (req, res) => 
{
    //send out home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//define thankyou route
app.get('/thankyou', (req, res) =>
{
    //send thankyou page
    res.sendFile(`${import.meta.dirname}/views/thankyou.html`);
})

//tell the server to listen on our specified port
app.listen(PORT, () => 
{
    console.log(`Server is running at http://localhost:${PORT}`);
});