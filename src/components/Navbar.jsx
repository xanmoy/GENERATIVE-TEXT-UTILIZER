import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">{props.tittle}</a>

    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">{props.aboutText}</a>
    //         </li>
    //       </ul>
    //       {/* <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form> */}
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-9 text-uppercase" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">{props.title}</a>
        <button className="navbar-toggler text-uppercase font-weight-bold text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">Repository</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">{props.aboutText}</a></li>
            {/* <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/"></a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  tittle: 'Set tillte Here',
  aboutText: 'About'
}