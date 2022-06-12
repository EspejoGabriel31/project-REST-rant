const router = require('express').Router()
// const places_array = require('../models/places.js')
const db = require('../models')

//INDEX
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
  // res.send('GET /places stub')
  // res.render('places/index', { places })
})

//CREATE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err & err.name == 'ValidationError'){
      let message = 'Validation Error: '
      //TODO: Generate error messages (s)
      console.log(message)
      res.render('place/new', { message })
    }
    else {
      res.render('error404')
    }
  })
  // res.send('POST /places stub')
  // if (!req.body.pic) {
  //   // Default image if one is not provided
  //   req.body.pic = 'http://placekitten.com/400/400'
  // }
  // if (!req.body.city) {
  //   req.body.city = 'Anytown'
  // }
  // if (!req.body.state) {
  //   req.body.state = 'USA'
  // }
  // places.push(req.body)
  // res.redirect('/places')
})

//NEW
router.get('/new',(req, res) => {
    res.render('places/new')
})

//SHOW
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
  // res.send('GET /places/:id stub')
  // let id = Number(req.params.id)
  // if(isNaN(id)){
  //   res.render('error404')
  // }
  // else if(!places_array[id]){
  //   res.render('error404')
  // }
  // else{
  //   res.render('places/show', { place: places_array[id], id})
  // }
})

//UPDATE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
  // places_array[req.params.id] = req.body
  // res.redirect(`/places/${req.params.id}`)
})

//DELETE
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
  // let id = Number(req.params.id)
  // if(isNaN(id)){
  //   res.render('error404')
  // }
  // else if(!places_array[id]){
  //   res.render('error404')
  // }
  // else{
  //   places.splice(id,1)
  //   res.redirect('/places')
  //   res.send('STUB DELETE place/:id')
  // }
})

//EDIT
router.get('/:id/edit', (req,res) =>{
  res.send('GET edit form stub')
    // res.render('places/edit', {
    //     place: places_array[req.params.id],
    //     index: req.params.id
    // })
})

module.exports = router