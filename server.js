const express = require('express'); 

//SETTING PORT On 5000
const PORT = process.env.PORT || 5000;
//SETTING APP SERVER
const app = express();

//Use Static Folder for Api
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server Started on port : ${PORT}`);
    
})