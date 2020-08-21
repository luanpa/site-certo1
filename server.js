const express = require("express");
//novo
const exphbs = require('express-handlebars');
const path = require('path');
const Sequelize = require('sequelize');
const OP = Sequelize.Op;
////
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

//static folder novo
app.use(express.static(path.join(__dirname, 'public')));



//hadle brs novo
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


///body
const bodyParser = require("body-parser");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// body parser
app.use(bodyParser.urlencoded({extended: false}));


const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);


db.sequelize.sync().then(()=>{
    app.listen(PORT, () =>{
        console.log(`listen on: http://localhost:${PORT}`);
    });
});  

app.get('/',(req, res) => {
    
    let search = req.query.job;
    let query = '%'+search+'%'; //php => php macanismo de busca

    if(!search) {
         db.todoE.findAll({order: [
        ['createdAt','DESC']
    ]})
    .then(todoE => {
       res.render ('index',{
            todoE
        });
    })
    .catch(err => console.log(err));
    } else {
        db.todoE.findAll({
            where: {title: {[OP.like]: query}},
            order: [
            ['createdAt','DESC']
        ]})
        .then(todoE => {
           res.render ('index',{
                todoE, search
            });
        })
        .catch(err => console.log(err));
    }

   

});
 