const React = require('react')
const Def = require('../default')

function show ({place}) {

    return (
        <Def>
          <main>
            <div className='row' id='main-section'>
              <div className='col-sm-6'>
                <img src={place.pic} alt={place.name} />
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
                  <p>Located in {place.city}, {place.state} and serving {place.cuisines}</p>
                </div>

                <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>     

                <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">Delete</button>
                </form> 
     
               
              </div>
            </div>
            <hr></hr>
            <div className='row' id='comment-section'>
              <h2>Comments</h2>
              <p>No comments yet</p>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
