const router = require('express').Router()
const places = require('../models/places.js')



router.get('/new',(req, res) => {
    res.render('places/new')
})

router.get('/:id/edit', (req,res) =>{
    res.render('places/edit', {
        place: places[req.params.id],
        index: req.params.id
    })
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.delete('/places/:id', (req, res) => {

  console.log("DELETE")
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else{
    places.splice(id,1)
    res.redirect('/places')
    res.send('STUB DELETE place/:id')
  }
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else{
    res.render('places/show', { place: places[id]})

  }
})

module.exports = router