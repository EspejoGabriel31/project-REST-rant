const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="/images/404image.jpg" alt="sunset beach" />
                    <div>
                    Photo by <a href="https://unsplash.com/@_javardh_001">Javardh </a>on <a href="https://unsplash.com/photos/l0Yt7XMw-yk">Unsplash</a>
                    </div>
                </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
