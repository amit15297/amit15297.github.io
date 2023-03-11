import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">

<a className="navbar-brand logo11" href="/" style={{color:'black'}}>
     {props.navbarTitle}
</a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
        <a className="nav-link active" href="#home-page" id="navItem1">
            {props.navbarItem1}
            <span className="sr-only">(current)</span>
        </a>
        <a className="nav-link" href="#wcu-section" id="navItem2">{props.navbarItem2}</a>
        <a className="nav-link" href="#services-section" id="navitem3">{props.navbarItem3}</a>
        <a className="nav-link" href="https://wa.me/918740800162" target="_blank" id="navItem4">{props.navbarItem4}</a>
        <a className="nav-link" href="#follow-us-section" id="navItem5">{props.navbarItem5}</a>
    </div>

</div>

</nav>
    </div>
  )
}
