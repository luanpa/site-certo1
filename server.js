const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

///body
const bodyParser = require("body-parser");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// body parser
app.use(bodyParser.urlencoded({extended: false}));


const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes);


db.sequelize.sync().then(()=>{
    app.listen(PORT, () =>{
        console.log(`listen on: http://localhost:${PORT}`);
    });
}); 

app.get('/',(req, res) => {

    db.todoE.findAll({order: [
        ['createdAt','DESC']
    ]})
    .then(todoE => {
       res.render ('index',{
            todoE
        });
    });

});
