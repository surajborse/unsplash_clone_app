import React from 'react'

const Nav = () => {
    return (
       <>
       
       <div className="container-fluid">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"><img src="data:image/png;base64,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" alt="" /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>

          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex m-auto">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" className="search"  />
              <button className="btn   " type="submit" className="search-btn" >Search</button>
            </form>

            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#home">Brand</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#home">Export</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#home">Bloge</a>
              </li>




            </ul>
            <button className="btn btn-outline-primary mx-3" type="submit">Login</button>
            <button className="btn btn-primary" type="submit" >Join Free</button>

          </div>


        </nav>
      </div>
</>

    )
}

export default Nav;
