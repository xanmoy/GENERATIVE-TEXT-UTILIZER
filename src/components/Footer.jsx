import React from 'react'

export default function Footer() {
  const mystyle = {
    color: "white",
    // backgroundColor: "black",
    // padding: "10px",
    // fontFamily: "Arial",
    // width: "100vh"
    
  };
  return (
    <div className="container" style={mystyle}>
    <div className="container mt-5 martop" >
  <footer className="mt-6 w-100 py-3 my-4">

    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Home</a></li>
      <li className="nav-item"><a href="https://github.com/xanmoy/GENERATIVE-TEXT-UTILIZER" className="nav-link px-2 text-white">Features</a></li>
      <li className="nav-item"><a href="https://github.com/xanmoy/GENERATIVE-TEXT-UTILIZER" className="nav-link px-2 text-white">GitHub</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-white">FAQs</a></li>
      <li className="nav-item"><a href="https://github.com/xanmoy/GENERATIVE-TEXT-UTILIZER#readme" className="nav-link px-2 text-white">About</a></li>
    </ul>
    <p className="text-center text-white">Free Research Preview. © 2023 GTU-2.0</p>
  </footer>
</div>
</div>
  )
}
