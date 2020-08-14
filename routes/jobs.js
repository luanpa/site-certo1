//const express = require ('express');
//const router = express.Router();
//const mysql = require('../mysql').pool;

/// retorna todos
//router.get('/', (req, res, next)=>{
 //   res.status(302).send({
  //      mensagem: 'usando o get dentro da rota jobs'
   // });
//});


//mysql.getConnection((error, conn)=>{
  //  conn.query(
    //    'INSERT INTO jobs (title, salario, company, email, horario, requisitos, beneficio, localizacao) VALUES (?,?)',
    //    [req.body.title, req.body.salario, req.body.company, req.body.email, req.body.horario, req.body.requisitos, req.body.beneficio, req.body.localizacao],
     //   (error, cadastro, field) => {
       //     conn.release(); 
//
        //    if (error) {
       //        return res.status(500).send({
        //            error: error,
         //           response: null
          //      });
          //  }

           // res.status(201).send({
           //     mensagem: 'cadastro concluido',
           //     cadastroCriado: cadastro.insertid
           //// });
   //    // }   
 //   )
//});

//// post
//router.post('/', (req, res, next) =>{
    //const cadastro = {
     //   title: req.body.title,
      //  salario: req.body.salario,
      //  company: req.body.company,
      //  email: req.body.email,
      //  horario: req.body.horario,
      //  requisitos: req.body.requisitos,
       // beneficio: req.body.beneficio,
       // localizacao: req.body.localizacao
    //};
    //res.status(302).send({
     //   mensagem: 'usando o post dentro da rota jobs',
     //   cadastroCriado: cadastro
   // });
//});

//module.exports = router;
