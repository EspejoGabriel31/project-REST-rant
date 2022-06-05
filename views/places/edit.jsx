const React = require('react')
const Def = require('../default')


function edit_form({place, index}){
    console.log(place + " " + index)
    return (
        <Def>
            <main>
                <h1>Edit Place Information</h1>
                <form method="POST" action={`/places/${index}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' 
                            id="name" 
                            name="name" 
                            defaultValue = {place.name}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' 
                            type="url" 
                            id="pic"
                            name="pic"
                            defaultValue={place.pic}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className='form-control' 
                            id="city" 
                            name="city"
                            defaultValue={place.city}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className='form-control' 
                            id="state" 
                            name="state"
                            defaultValue={place.state}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Cuisines</label>
                        <input className='form-control' 
                            id="cuisines" 
                            name="cuisines" 
                            defaultValue={place.cuisines}
                            required
                        />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Edit Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form