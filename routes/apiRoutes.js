const express = require("express");
const router = express.Router();
const db = require("../models");



// get all todos
router.get("/all", (req, res) => {
    db.todoE.findAll().then(todoE => res.send(todoE));
});

/// post new todos
router.post("/add", (req, res) => {
    db.todoE.create({
        title: req.body.title,
        salario: req.body.salario,
        company: req.body.company,
        email: req.body.email,
        horario: req.body.horario,
        requisitos: req.body.requisitos,
        beneficio: req.body.beneficio,
        localizacao: req.body.localizacao
    }).then(submitedtodoE => res.send(submitedtodoE));
});


module.exports = router;