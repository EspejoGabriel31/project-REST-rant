const React = require('react')
const Def = require('../default')

function show ({place}) {

    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
      
    )
    if(place.comments.length){
        comments = place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! >:(' : 'Rave! :D'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <strong>- {c.author}</strong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
    }
    return (
        <Def>
          <main>
            <div className='row' id='main-section'>
              <div className='col-sm-6'>
                <img src={place.pic} alt={place.name} />
                <h3>
                    Located in {place.city}, {place.state}
                </h3>
              </div>
              <div className='col-sm-6'>
                <h1>
                  { place.name }
                </h1>
                <div>
                  <h2>Rating</h2>
                  <p>Not Rated</p>
                </div>
                <div>
                  <h2>Description</h2>
                  <h3>
                    {place.showEstablished()}
                  </h3>
                  <h4>Serving {place.cuisines}</h4>
                </div>

                <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>     

                <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">Delete</button>
                </form> 
     
               
              </div>
            </div>
            <hr></hr>
            <div className='row' id='comment-section'>
              <h1>Comments</h1>
              {comments}
            </div>
            <br/>

              <form method="POST" action={`/places/${place.id}/comment`} id='commentForm'>

                <div className='form-row'>
                  <textarea className='form-control' name='content' placeholder='Enter comment here...'></textarea>
                </div>
                <br/>
                <div className='form-row'>
                  <div className='form-group col-8'>
                    <label htmlFor='author'>Author</label>
                    <input className='form-control' 
                      type='text'
                      id='author' 
                      name='author'
                    />
                  </div>
                  <div className='form-group col-2'>
                      <label class="control-label" htmlFor='rant'>Rant?</label>
                      <input className='form-inline' 
                          type='checkbox'
                          id='rant' 
                          name='rant'
                      />
                  </div>
                  <div className='form-group col-2'>
                    <label class="control-label" htmlFor='stars'>Stars</label>
                        <input className='form-inline' 
                            type='number'
                            id='stars' 
                            name='stars'
                            min='1'
                            max='5'
                            step='0.5'
                        />
                  </div>
                </div>
                
                
                <input className="btn btn-primary" type="submit" value="Add Comment" />
                {/* <div className='form-group'>
                  <label htmlFor=''></label>
                  <input className='form-control' 
                    id='' 
                    name=''
                  />
                </div> */}
              </form>
              

          </main>
        </Def>
    )
}

module.exports = show
