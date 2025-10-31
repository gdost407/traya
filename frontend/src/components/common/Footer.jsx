import React from "react";
import { Link, useLocation  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBoxOpen, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <footer>
      {/* for mobile view */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-bottom shadow-lg p-0 d-sm-none">
        <div className="container-fluid">
          <div className="row w-100 justify-content-around text-center m-0">
            <div className="col p-2">
              <Link to="/" className={`text-decoration-none d-flex flex-column align-items-center ${ currentPath === "/" ? "text-purple" : "text-muted" }`}>
                <FontAwesomeIcon icon={faHouse} />
                <small>Home</small>
              </Link>
            </div>
            <div className="col p-2">
              <Link to="/login" className={`text-decoration-none d-flex flex-column align-items-center ${ currentPath === "/login" ? "text-purple" : "text-muted" }`}>
                <FontAwesomeIcon icon={faBoxOpen} />
                <small>My Kit</small>
              </Link>
            </div>
            <div className="col p-2">
              <Link to="/video" className={`text-decoration-none d-flex flex-column align-items-center ${ currentPath === "/video" ? "text-purple" : "text-muted" }`}>
                <FontAwesomeIcon icon={faYoutube} />
                <small>Video</small>
              </Link>
            </div>
            <div className="col p-2">
              <Link to="/profile" className={`text-decoration-none d-flex flex-column align-items-center ${ currentPath === "/profile" ? "text-purple" : "text-muted" }`}>
                <FontAwesomeIcon icon={faCircleUser} />
                <small>You</small>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* for desktop view */}
      <div className="container-fluid bg-light pt-3 d-none d-sm-block">
        <div className="container">
          <div className="row"> 
            <div className="col-4 col-md-2 mb-3"> 
              <h5>About</h5> 
              <ul className="nav flex-column"> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">FAQs</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">My Plan</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Online Examination</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Customer Stories</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Reviews</Link></li> 
              </ul> 
            </div> 
            <div className="col-4 col-md-2 mb-3"> 
              <h5>Company</h5> 
              <ul className="nav flex-column"> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Science</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Our Story</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Blog</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">All Products</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">About</Link></li> 
                </ul> 
            </div> 
            <div className="col-4 col-md-2 mb-3"> 
              <h5>Legal</h5> 
              <ul className="nav flex-column"> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Privacy Policy</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Terms of Service</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Return Policy</Link></li> 
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-dark">Payment Policy</Link></li> 
              </ul> 
            </div> 
            <div className="col-md-5 offset-md-1 mb-3">
              <img src="/1761393804595.png" alt="" srcSet="" style={{width: "50px"}} className="mb-2"/>
              <h5>THE LAST HEADACHE</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Dolorum, natus. Nobis, veritatis.</p>
            </div> 
          </div> 
          <div className="d-flex flex-column flex-sm-row justify-content-between py-2 border-top"> 
            <p>© 2025 Company, Inc. All rights reserved.</p> 
            <ul className="list-unstyled d-flex"> 
              <li className="ms-3">
                <Link className="text-dark" to="/" aria-label="Instagram"><FontAwesomeIcon icon={faFacebook} /></Link>
              </li> 
              <li className="ms-3">
                <Link className="text-dark" to="/" aria-label="Facebook"><FontAwesomeIcon icon={faInstagram} /></Link>
              </li> 
            </ul> 
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
