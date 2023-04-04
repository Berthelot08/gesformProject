const express = require('express');
const apprenantRouter = express.Router();

apprenantRouter.get('/', (req, res)=> {
    //res.send('Liste des apprenants')
    res.render('apprenant/index');
})

apprenantRouter.get('/new', (req, res)=> {
    //res.send('Liste des apprenants')
    res.render('apprenant/new');
})

apprenantRouter.post('/', (req, res)=> {
    res.send('Ajouter des apprenants')
})
module.exports = apprenantRouter;
