import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faDrupal } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className="container-fluid p-0">

      <div className="container-fluid pb-0 overflow-hidden">
        <div className="row align-items-end bg-success">
          <div className="col-5 mb-4 text-white">
            <p className="small fw-bold mb-2">Doubts? Talk to a Hair Coach for Free</p>
            <p className="small mb-2">Our slots fill up quickly</p>
            <button className="btn btn-sm btn-light w-100 mb-2">Book A Call</button>
            <button className="btn btn-sm btn-outline-light w-100">Chat With Us</button>
            <br /><br />
          </div>
          <div className="col-7 text-end">
            <img src="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-front-view-of-a-smiling-business-woman-png-image_12509704.png" className="img-fluid"  alt="Hair Coach" />
          </div>
        </div>
        <div className="card rounded-2 p-3 border-1" style={{marginTop:"-40px"}}>
          <p className="small fw-bold mb-0">Hi Yogesh</p>
          <p className="small mb-0">Here's what your hair analysisreport says:</p>
          <p className="small fw-bold mb-4">Your Root &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="">-------------</span></p>
          <div className="row">
            <div className="col-4 text-center">
              <FontAwesomeIcon icon={faAppleWhole} className="text-success"/><br />
              <p className="small m-0">DANDRUFF</p>
            </div>
            <div className="col-4 text-center">
              <FontAwesomeIcon icon={faAppleWhole} className="text-success"/><br />
              <p className="small m-0">METABOLISM</p>
            </div>
            <div className="col-4 text-center">
              <FontAwesomeIcon icon={faAppleWhole} className="text-success"/><br />
              <p className="small m-0">NUTRITION</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-4">
        <h6>1 Month Customised Kit - (6 products)</h6>
      </div>

      <div className="container">
        <div className="d-flex overflow-x-auto">
          <div className="col-md-2 col-sm-3 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-0 fs-8px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="https://traya.health/cdn/shop/files/intro_9c482754-9edc-49d1-b2a0-31628d1a9b1a.webp?v=1758484918&width=533" alt="Product" style={{width: "100%", height: "180px", objectFit: "cover"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-8px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-0 fs-8px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_fa3e6c14-b12f-4092-a7fc-c7107a267682.webp?v=1747808561&width=533" alt="Product" style={{width: "100%", height: "180px", objectFit: "cover"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-8px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-0 fs-8px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_c3510976-4f2b-410a-8a3b-30ac079db6a1.webp?v=1736228295&width=533" alt="Product" style={{width: "100%", height: "180px", objectFit: "cover"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">HAIR RAS</p>
                <p className="small text-center ">
                  <del className="fs-10px">₹520</del> &nbsp;
                  <span className="fw-medium">₹488</span>
                </p>
              </div>
              <p className="m-0 fs-8px text-center px-3">
                Better hair quality & delayed greying with herbs like shatavari and bhringraj
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-0 fs-8px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_974b046a-80d3-47fe-b2d7-45c21617f988.webp?v=1728627170&width=533" alt="Product" style={{width: "100%", height: "180px", objectFit: "cover"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-8px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-0 fs-8px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_b0d23409-384d-4c38-9d36-e634322b9811.webp?v=1728625862&width=533" alt="Product" style={{width: "100%", height: "180px", objectFit: "cover"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-8px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "20px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-5px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
          <div className="p-3 primary-green bg-opacity-10 rounded-3xl d-flex align-items-center">
              <div className="me-3">
                  <h5 className="fw-bold mb-1 text-primary-green">Book a FREE Consultation!</h5>
                  <p className="small mb-2 text-primary-green">Get your personalized plan in just 1 click.</p>
                  <button className="btn btn-green rounded-3xl fw-bold btn-sm">Chat Now <i className="fas fa-arrow-right ms-1"></i></button>
              </div>
              <img src="https://placehold.co/100x120/d1fae5/059669?text=Expert" className="img-fluid rounded-3xl ms-auto" alt="Consultation Expert"/>
          </div>
      </div>

      <div className="container py-3">
          <h2 className="h5 fw-bold mb-3">What You Can Expect</h2>
          <div className="card shadow-sm border-0 rounded-3xl p-3 mb-3">
              <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-stethoscope text-primary-green fs-4 me-3 mt-1"></i>
                  <div>
                      <h6 className="fw-bold mb-1">Medical Grade Solutions</h6>
                      <p className="small text-muted mb-0">Our treatments are FDA-approved and backed by clinical research.</p>
                  </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                  <i className="fas fa-calendar-check text-primary-green fs-4 me-3 mt-1"></i>
                  <div>
                      <h6 className="fw-bold mb-1">Personalized Treatment Plans</h6>
                      <p className="small text-muted mb-0">Every plan is tailored to your unique hair type and needs.</p>
                  </div>
              </div>
              <div className="d-flex align-items-start">
                  <i className="fas fa-truck-fast text-primary-green fs-4 me-3 mt-1"></i>
                  <div>
                      <h6 className="fw-bold mb-1">Delivered to Your Doorstep</h6>
                      <p className="small text-muted mb-0">Discreet and fast delivery across the country.</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="container py-4">
          <h2 className="h5 fw-bold mb-3">How Your Plan Works</h2>
          <div className="row row-cols-1 row-cols-md-3 g-3">
              <div className="col">
                  <div className="card border-0 rounded-3xl p-3 text-center shadow-sm">
                      <span className="badge bg-light text-secondary rounded-pill mx-auto mb-2">STEP 1</span>
                      <img src="https://placehold.co/100x70/ffffff/555555?text=Consult" className="img-fluid mx-auto mb-2 rounded-3" alt="Step 1"/>
                      <p className="small fw-semibold mb-0">Free Online Consultation</p>
                  </div>
              </div>
              <div className="col">
                  <div className="card border-0 rounded-3xl p-3 text-center shadow-sm">
                      <span className="badge bg-light text-secondary rounded-pill mx-auto mb-2">STEP 2</span>
                      <img src="https://placehold.co/100x70/ffffff/555555?text=Diagnosis" className="img-fluid mx-auto mb-2 rounded-3" alt="Step 2"/>
                      <p className="small fw-semibold mb-0">Doctor's Diagnosis & Plan</p>
                  </div>
              </div>
              <div className="col">
                  <div className="card border-0 rounded-3xl p-3 text-center shadow-sm">
                      <span className="badge bg-light text-secondary rounded-pill mx-auto mb-2">STEP 3</span>
                      <img src="https://placehold.co/100x70/ffffff/555555?text=Delivery" className="img-fluid mx-auto mb-2 rounded-3" alt="Step 3"/>
                      <p className="small fw-semibold mb-0">Product Delivery & Results</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="container py-4">
          <h2 className="h5 fw-bold mb-3">Connect with a Hair Coach</h2>
          <div className="d-flex overflow-auto pb-2">
              <div className="card border-0 rounded-3xl shadow-sm p-3 text-center">
                  <img src="https://placehold.co/80x80/e0e0e0/059669?text=Dr+A" className="rounded-circle mx-auto mb-2" alt="Dr. Sharma"/>
                  <h6 className="fw-bold mb-0">Dr. Alok Sharma</h6>
                  <p className="small text-muted mb-1">M.D. Dermatologist</p>
                  <p className="small text-muted mb-0">7 Years Exp.</p>
              </div>
              <div className="card border-0 rounded-3xl shadow-sm p-3 text-center">
                  <img src="https://placehold.co/80x80/e0e0e0/059669?text=Dr+J" className="rounded-circle mx-auto mb-2" alt="Dr. Jain"/>
                  <h6 className="fw-bold mb-0">Dr. Jaya Jain</h6>
                  <p className="small text-muted mb-1">Clinical Trichologist</p>
                  <p className="small text-muted mb-0">5 Years Exp.</p>
              </div>
              <div className="card border-0 rounded-3xl shadow-sm p-3 text-center">
                  <img src="https://placehold.co/80x80/e0e0e0/059669?text=Dr+K" className="rounded-circle mx-auto mb-2" alt="Dr. Kapoor"/>
                  <h6 className="fw-bold mb-0">Dr. Kapil Kapoor</h6>
                  <p className="small text-muted mb-1">M.D. Dermatologist</p>
                  <p className="small text-muted mb-0">10 Years Exp.</p>
              </div>
          </div>
      </div>
      
      <div className="container py-4">
          <h2 className="h5 fw-bold mb-3">User Stories</h2>
          <div className="d-flex overflow-auto pb-2">
              <div className="card border-0 bg-dark text-white rounded-3xl" >
                  <img src="https://placehold.co/180x250/333333/ffffff?text=Video+1" className="card-img rounded-3xl opacity-50" alt="Testimonial Video"/>
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-2">
                      <i className="fas fa-play-circle text-white fs-3 mx-auto mb-2"></i>
                      <p className="card-text small text-center mb-0">Aarav K. | 6 Months</p>
                  </div>
              </div>
              <div className="card border-0 bg-dark text-white rounded-3xl" >
                  <img src="https://placehold.co/180x250/333333/ffffff?text=Video+2" className="card-img rounded-3xl opacity-50" alt="Testimonial Video"/>
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-2">
                      <i className="fas fa-play-circle text-white fs-3 mx-auto mb-2"></i>
                      <p className="card-text small text-center mb-0">Priya S. | 9 Months</p>
                  </div>
              </div>
              <div className="card border-0 bg-dark text-white rounded-3xl" >
                  <img src="https://placehold.co/180x250/333333/ffffff?text=Video+3" className="card-img rounded-3xl opacity-50" alt="Testimonial Video"/>
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-2">
                      <i className="fas fa-play-circle text-white fs-3 mx-auto mb-2"></i>
                      <p className="card-text small text-center mb-0">Vikas L. | 4 Months</p>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="container py-4">
          <div className="card border-0 p-3 primary-green bg-opacity-10 rounded-3xl d-flex flex-row align-items-center justify-content-between">
              <div>
                  <h5 className="fw-bold text-primary-green mb-1">Your Personalized Plan</h5>
                  <h4 className="fw-bold text-primary-green mb-1">4.6 <span className="small fw-normal">Excellent Rating</span></h4>
                  <div className="d-flex">
                      <i className="fas fa-star rating-star"></i>
                      <i className="fas fa-star rating-star"></i>
                      <i className="fas fa-star rating-star"></i>
                      <i className="fas fa-star rating-star"></i>
                      <i className="fas fa-star-half-alt rating-star"></i>
                  </div>
              </div>
              <button className="btn btn-green rounded-4xl fw-bold text-nowrap py-2 px-4">Buy Now <i className="fas fa-arrow-right ms-1"></i></button>
          </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-bottom shadow-lg p-0">
          <div className="container-fluid">
              <div className="row w-100 justify-content-around text-center m-0">
                  <div className="col p-2">
                      <Link to="/" className="text-decoration-none text-primary-green d-flex flex-column align-items-center">
                          <i className="fas fa-home fs-5"></i>
                          <small>Home</small>
                      </Link>
                  </div>
                  <div className="col p-2">
                      <Link to="/" className="text-decoration-none text-muted d-flex flex-column align-items-center">
                          <i className="fas fa-gift fs-5"></i>
                          <small>Rewards</small>
                      </Link>
                  </div>
                  <div className="col p-2">
                      <Link to="/" className="text-decoration-none text-muted d-flex flex-column align-items-center">
                          <i className="fas fa-shopping-bag fs-5"></i>
                          <small>Shop</small>
                      </Link>
                  </div>
                  <div className="col p-2">
                      <Link to="/" className="text-decoration-none text-muted d-flex flex-column align-items-center">
                          <i className="fas fa-user-circle fs-5"></i>
                          <small>Profile</small>
                      </Link>
                  </div>
              </div>
          </div>
      </nav>
    </div>
  );
};

export default HomePage;
