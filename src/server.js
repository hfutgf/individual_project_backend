const express = require('express');
const app = express()
const cors = require('cors')
const modules = require('./modules')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

 app.use(modules)

const server = app.listen(process.env.PORT || 5000, () => {
   const port = server.address().port;
   console.log(`Express is working on port ${port}`);
});
