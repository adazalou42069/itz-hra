const express = require(`express`);
const app = express();
app.listen(5000);

const maze = require('./src/')

app.use(express.static(`../public`));

app.get(`/maze`, (req, res) => {
    

    
});