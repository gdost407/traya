import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faAnglesRight, faBrain, fa1, fa2, fa3, faQuestion, faHouse, faBoxOpen, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faDrupal, faYoutube } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid pb-0 overflow-hidden">
        <div className="row bg-success">
          <div className="col-12 pt-3">
            <div className="container">
              <div className="row align-items-end">
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
            </div>
          </div>
        </div>
        <div className="container card rounded-2 p-3 border-1" style={{marginTop:"-40px"}}>
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

      <div className="container">
        <h6 className="py-3">1 Month Customised Kit - (6 products)</h6>
        <div className="d-flex overflow-x-auto pb-2">
          <div className="col-md-3 col-sm-4 col-6 px-1">
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
          <div className="col-md-3 col-sm-4 col-6 px-1">
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
          <div className="col-md-3 col-sm-4 col-6 px-1">
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
          <div className="col-md-3 col-sm-4 col-6 px-1">
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
          <div className="col-md-3 col-sm-4 col-6 px-1">
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
        <h6 className="fw-bold">Your Hair Growth Journey</h6>
        <div className="card p-3">

          <div className="d-flex flex-column flex-sm-row align-items-start">

            <div className="d-flex col">
              <div className="d-flex flex-column align-items-center me-3">
                <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{width: "30px", height: "30px"}}>
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="flex-grow-1 d-sm-none border-start border-3 border-success" style={{height: "50px"}}></div>
              </div>
              <div>
                <h6 className="text-success mb-1">Month 1-3</h6>
                <p className="text-dark mb-4">Controlling dandruff as it acceleration hair fall.</p>
              </div>
            </div>

            <div className="d-flex col">
              <div className="d-flex flex-column align-items-center me-3">
                <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{width: "30px", height: "30px"}}>
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="flex-grow-1 d-sm-none border-start border-3 border-success" style={{height: "50px"}}></div>
              </div>
              <div>
                <h6 className="text-success mb-1">Month 4-6</h6>
                <p className="text-dark mb-4">Visible reduction in hair growth along with thicker, fuller hair.</p>
              </div>
            </div>

            <div className="d-flex col">
              <div className="d-flex flex-column align-items-center me-3">
                <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{width: "30px", height: "30px"}}>
                  <FontAwesomeIcon icon={faBrain} />
                </div>
              </div>
              <div>
                <h6 className="text-success mb-1">Month 7-8</h6>
                <p className="text-dark">Onset of new baby hair growth along with thicker, fuller hair.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="container py-4">
        <h6 className="fw-bold">Traya Plan Includes</h6>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              <div className="col-md-3 col-6 p-1">
                <img src="https://traya.health/cdn/shop/files/2_min_desktop.webp?v=1728543479" alt="" srcSet="" className="w-100 object-fit-cover rounded-1" style={{height: "100px"}}/>
              </div>
              <div className="col-md-3 col-6 p-1">
                <img src="https://traya.health/cdn/shop/files/2_min_desktop.webp?v=1728543479" alt="" srcSet="" className="w-100 object-fit-cover rounded-1" style={{height: "100px"}}/>
              </div>
              <div className="col-md-3 col-6 p-1">
                <img src="https://traya.health/cdn/shop/files/2_min_desktop.webp?v=1728543479" alt="" srcSet="" className="w-100 object-fit-cover rounded-1" style={{height: "100px"}}/>
              </div>
              <div className="col-md-3 col-6 p-1">
                <img src="https://traya.health/cdn/shop/files/2_min_desktop.webp?v=1728543479" alt="" srcSet="" className="w-100 object-fit-cover rounded-1" style={{height: "100px"}}/>
              </div>
              <div className="col-12 p-1">
                <img src="https://traya.health/cdn/shop/files/2_min_desktop.webp?v=1728543479" alt="" srcSet="" className="w-100 object-fit-cover rounded-1" style={{height: "30px"}}/>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="container py-4">
        <h6 className="fw-bold mb-4">What Happen After You Place An Order?</h6>

        {/* PC view (3 cards inline) */}
        <div className="d-none d-lg-block">
          <div className="row g-3">
            <div className="col-lg-4">
              <div className="card p-3">
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={fa1} className="text-warning" style={{ fontSize: "60px" }} />
                  </div>
                  <div className="col pt-3">
                    <h4>Connect with a hair Coach</h4>
                  </div>
                  <div className="col-12 px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card p-3">
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={fa2} className="text-warning" style={{ fontSize: "60px" }} />
                  </div>
                  <div className="col pt-3">
                    <h4>Review Your Hair Profile</h4>
                  </div>
                  <div className="col-12 px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card p-3">
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={fa3} className="text-warning" style={{ fontSize: "60px" }} />
                  </div>
                  <div className="col pt-3">
                    <h4>Start Your Journey</h4>
                  </div>
                  <div className="col-12 px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view (carousel) */}
        <div id="carouselExampleAutoplaying" className="carousel slide d-lg-none" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card p-3">
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={fa1} className="text-warning" style={{ fontSize: "60px" }} />
                  </div>
                  <div className="col pt-3">
                    <h4>Connect with a hair Coach</h4>
                  </div>
                  <div className="col-12 px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card p-3">
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={fa2} className="text-warning" style={{ fontSize: "60px" }} />
                  </div>
                  <div className="col pt-3">
                    <h4>Review Your Hair Profile</h4>
                  </div>
                  <div className="col-12 px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card p-3">
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={fa3} className="text-warning" style={{ fontSize: "60px" }} />
                  </div>
                  <div className="col pt-3">
                    <h4>Start Your Journey</h4>
                  </div>
                  <div className="col-12 px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container py-4">
        <h6 className="fw-bold">Need Help?</h6>
        <div className="d-flex overflow-x-auto pb-2">
          <div className="col-md-2 col-sm-3 col-7 px-1">
            <div className="card p-2 h-100 bg-warning">
              <p className="m-0">
                <FontAwesomeIcon icon={faQuestion} /> General Queries
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-7 px-1">
            <div className="card p-2 h-100 bg-warning">
              <p className="m-0">
                <FontAwesomeIcon icon={faQuestion} /> Hair test
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-7 px-1">
            <div className="card p-2 h-100 bg-warning">
              <p className="m-0">
                <FontAwesomeIcon icon={faQuestion} /> Hair Coach
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-7 px-1">
            <div className="card p-2 h-100 bg-warning">
              <p className="m-0">
                <FontAwesomeIcon icon={faQuestion} /> Diet Plan
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-7 px-1">
            <div className="card p-2 h-100 bg-warning">
              <p className="m-0">
                <FontAwesomeIcon icon={faQuestion} /> Payments & Refunds
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="card bg-success rounded-3 p-2">
          <div className="row align-items-center">
            <div className="col text-white ps-3">
              <p className="mb-1">
                Not completely sure?
              </p>
              <p className="fs-10px">
                if you've left something or want to update a response on the hair test, simply re-take it.
              </p>
              <button type="button" className="btn btn-sm btn-warning">
                Take The Hair Test Again
              </button>
            </div>
            <div className="col-5">
              <img src="https://testingwing.in/wp-content/uploads/2021/09/9245938-1-1-1000x570.png" alt="" srcSet="" className="w-100 h-100 object-fit-cover"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <h6 className="fw-bold">Meet Our Team Of Doctors</h6>
        
        <div className="d-flex overflow-x-auto pb-2">
          <div className="col-md-3 col-sm-4 col-7 px-2">
            <div className="card p-1 h-100">
              <div className="row align-items-center">
                <div className="col-4">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" alt="Doctor" className="w-100 object-fit-cover rounded-3" style={{aspectRatio: "1/1"}}/>
                </div>
                <div className="col-8">
                  <p className="m-0 fw-medium">Dr. Rajesh Kumar</p>
                  <p className="small m-0">Dermatologist</p>
                  <hr className="text-success my-1" />
                  <p className="small m-0 fw-medium">Experience : 15 Years</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-7 px-2">
            <div className="card p-1 h-100">
              <div className="row align-items-center">
                <div className="col-4">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" alt="Doctor" className="w-100 object-fit-cover rounded-3" style={{aspectRatio: "1/1"}}/>
                </div>
                <div className="col-8">
                  <p className="m-0 fw-medium">Dr. Rajesh Kumar</p>
                  <p className="small m-0">Dermatologist</p>
                  <hr className="text-success my-1" />
                  <p className="small m-0 fw-medium">Experience : 15 Years</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-7 px-2">
            <div className="card p-1 h-100">
              <div className="row align-items-center">
                <div className="col-4">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" alt="Doctor" className="w-100 object-fit-cover rounded-3" style={{aspectRatio: "1/1"}}/>
                </div>
                <div className="col-8">
                  <p className="m-0 fw-medium">Dr. Rajesh Kumar</p>
                  <p className="small m-0">Dermatologist</p>
                  <hr className="text-success my-1" />
                  <p className="small m-0 fw-medium">Experience : 15 Years</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-7 px-2">
            <div className="card p-1 h-100">
              <div className="row align-items-center">
                <div className="col-4">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" alt="Doctor" className="w-100 object-fit-cover rounded-3" style={{aspectRatio: "1/1"}}/>
                </div>
                <div className="col-8">
                  <p className="m-0 fw-medium">Dr. Rajesh Kumar</p>
                  <p className="small m-0">Dermatologist</p>
                  <hr className="text-success my-1" />
                  <p className="small m-0 fw-medium">Experience : 15 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomePage;
