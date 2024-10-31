const express = require('express');

const app = express();
const port = 3000;

//GET

app.get('/greetings',(request, response) => {
   return response.send({"msg":"Hello Samalie"})
});
app.listen(port,()=>{
    console.log('Example app listening at http://localhost:${port}');

})
