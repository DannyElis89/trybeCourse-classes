const express = require('express');
const {isAfter, parseISO} = require('date-fns');
const router = express.Router();
const charactersService = require('../services/charactersService');
const middlewares = require('../middlewares');

router.get('/', async (req, res) => {
    try{
        const [rows] = await charactersService.getAll();
        res.status(200).json(rows);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Erro interno'});
    }
})

router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const [rows] = await charactersService.getAll(id);
        res.status(200).json(rows);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Erro interno'});
    }
})

router.post('/', middlewares.charactersValidation,  async (req, res) => {
    try{
        req.body.creators.map(creator => {
            const compareDate = isAfter(
                parseISO(creator.birth_date),
                Date.now()
            );
            if(compareDate) throw { status: 400, message: 'Você não pode ter nascido antes de hoje!'};

        })

        const result = await charactersService.add(req.body);

        res.status(201).json(result);
    } catch(err){
        console.log(err);
        res.status(err.status).json({ message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try{
        const {name, cartoon, year} = req.body;
        const {id} = req.params;

        const result = await charactersService.update(id, name, cartoon, year);

        res.status(201).json(result);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Erro interno'});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;

        await charactersService.remove(id);

        res.end();
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Erro interno'});
    }
});

module.exports = router;
