import React from 'react';
import Link from "next/link";

function Logo() {
  
  return (
    <div className="logo_img">
      <Link href="/">
        <a>
        <img src="/img/logo.png" alt="" />
        </a>
      </Link>
    </div>
  )
}

export default Logo