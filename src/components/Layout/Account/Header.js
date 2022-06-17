import Link from "next/link";
import React from 'react';


function Header({children}) {
  return (
   <>
    <header className="header">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="map_icon d-md-none" href="#"><img src="/img/map_icon.svg" alt="" /></a>
	  	<a className="navbar-brand" href="index.html"><img src="/img/logo.png" alt="" /></a>
	  	<a className="filter_iocn d-md-none" href="#"><img src="/img/filter_iocn.svg" alt="" /></a>
	  	<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			<form className="form-inline search_box">
				<input className="form-control roboto_font" type="search" placeholder="Search here..." aria-label="Search" />
			</form>
			<ul className="navbar-nav nav_menu">
      <li className="nav-item active">
              <Link href={"/account"}>
              <a
                  className="nav-link d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <img src="/img/home.svg" alt="" />
                </a>
              </Link>
              </li>
              <li className="nav-item">
                <Link href={"#"}>
                <a className="nav-link" href="#">
                  <img src="/img/bucket.svg" alt="" />
                </a>
                </Link>
              </li>
				<li className="nav-item"><a className="nav-link" href="#"><img src="/img/discover.svg" alt="" /></a></li>
				<li className="nav-item"><a className="nav-link" href="#"><img src="/img/chat.svg" alt="" /></a></li>
				<li className="nav-item"><a className="nav-link" href="#"><img src="/img/notification.svg" alt="" /></a></li>
				<li className="nav-item"><a className="nav-link" href="#"><span className="user_img"><img src="/img/user_img.jpg" alt=""/></span></a></li>
			</ul>
	  </div>
	</nav>
</header>
      {children}
   </>
  )
}





export default Header