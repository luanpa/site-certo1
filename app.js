//const express = require ('express');
//const app = express();
//const morgan = require('morgan');
//const bodyParser = require('body-parser');

//// caminho pras rotas
//const cadastrar = require('./routes/jobs');



//monitora a execuçao
//app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: false }));// apenas dados simples
//app.use(bodyParser.json()); // json entrada no body


//app.use((req, res)=> {
   // res.header('Acess-Control-Allow-Origin', "*");
   // res.header('Acess-Control-Allow-Header, Contente-type, Accept, Authorization'  
   // );
//
   // if(req, method === "OPTIONS"){
       // res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      //  return res.status.status(200).send({});
  //  }
  //  next();
//})


/// rotas
//app.use('/jobs', cadastrar);


//quando n encontra a rota, entra aqui
//app.use((req, res, next)=>{
  //  const erro = new Erro('Não encontrado');
   // erro.status(404);
   // next(erro);
//});

//app.use((error, req, res, next)=>{
  //  res.status(error.status || 500);
  //  return res.send({
     //   erro: {
    //        mensagem: error.mensagem
      //  }
   // });
//});

//module.exports = app;
