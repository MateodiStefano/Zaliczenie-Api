const express = require('express')
const router = express.Router()
const Pracownik = require('../models/pracownik')


router.get('/', async(req,res) => {
    try{
            const pracownicy = await Pracownik.find()
            res.json(pracownicy)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
            const pracownik = await Pracownik.findById(req.params.id)
            res.json(pracownik)
    }catch(err){
        res.send('Error' + err)
    }
})


router.post('/', async(req,res) => {
    const pracownik = new Pracownik({
        imie: req.body.imie,
        nazwisko: req.body.nazwisko,
        technologia: req.body.technologia,
        obecnosc: req.body.obecnosc
    })

    try{
        const a1 = await pracownik.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
    
})

router.patch('/:id', async(req,res) => {

    try{
        const pracownik = await Pracownik.findById(req.params.id)
        pracownik.obecnosc = req.body.obecnosc
        const a1 = await pracownik.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router