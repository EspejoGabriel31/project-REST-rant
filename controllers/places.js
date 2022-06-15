const router = require('express').Router()
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
})

//CREATE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError'){
      let message = 'Validation Error: '
      for ( var field in err.errors){
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      //TODO: Generate error messages (s)
      res.render('places/new', { message })
    }
    else {
      res.render('error404')
    }
  })
})

//NEW
router.get('/new',(req, res) => {
    res.render('places/new')
})

//SHOW
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
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

//POST COMMENT
router.post('/:id/comment', (req, res) => {
  if(req.body.rant){
    req.body.rant = true
  }
  else{
    req.body.rant = false
  }
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment =>{
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err =>{
      res.render('error404')
    })
  })
})

//DELETE COMMENT
router.delete('/:id/comment/:commentId', (req, res) => {
  res.send('GET /places/:id/comment/:commentId stub')
})

module.exports = router