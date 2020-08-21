const express = require("express");
const router = express.Router();
const db = require("../models");

//// rotas de envio
router.get('/add',(req, res) =>{
    res.render('add');
})
///detalhe da vaga => view/1, view/2
router.get('/view/:id',(req, res)=> db.todoE.findOne({
    where: {id: req.params.id} 
}).then(todoE =>{
    
    res.render('view',{
        todoE
    });
}).catch(err => console.log(err)));



// get all todos
//router.get("/all", (req, res) => {
   // db.todoE.findAll().then(todoE => res.send(todoE));
//});

/// post new todos
//router.post("/add", (req, res) => {
   // db.todoE.create({
    //    title: req.body.title,
      //  salario: req.body.salario,
        //company: req.body.company,
        //email: req.body.email,
        //horario: req.body.horario,
        //requisitos: req.body.requisitos,
        //beneficio: req.body.beneficio,
        //localizacao: req.body.localizacao
    //}).then(submitedtodoE => res.send(submitedtodoE));
//});

router.post('/add', (req, res)=>{

    let {title, salario, company, email, horario, requisitos, beneficio, localizacao} = req.body;

    db.todoE.create({
        title,
        salario,
        company,
        email,
        horario,
        requisitos,
        beneficio,
        localizacao
    })
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err));
})


module.exports = router;