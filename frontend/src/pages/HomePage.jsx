import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faAnglesRight, faBrain, fa1, fa2, fa3, faQuestion, faHouse, faBoxOpen, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faDrupal, faYoutube } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const [selectedGender, setSelectedGender] = useState('male');

  return (
    <>
      <Header />

      {/* Hero Section */}
      <style>{`
        .hero-image {
          width: 100%;
          height: 450px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 600;
        }
        .badge-section {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin: 40px 0;
          flex-wrap: wrap;
        }
        .badge-item {
          text-align: center;
        }
        .badge-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          color: white;
          font-size: 24px;
          font-weight: 700;
        }
        .badge-text {
          font-size: 14px;
          color: #666;
          font-weight: 600;
        }
      `}</style>
      <section className="bg-purple-light py-5 position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1>Get Your Hair Back with Science-Backed Solutions</h1>
              <p>93% saw visible results with our customized hair growth plans combining Ayurveda, modern science & nutrition</p>
              <Link to="/login" className="btn btn-purple rounded-pill btn-lg me-3">Take Free Hair Test</Link>
              <Link to="/assignment" className="btn btn-outline-purple rounded-pill btn-lg">Learn More</Link>
              
              <div className="badge-section mt-5">
                <div className="badge-item">
                  <div className="badge-icon bg-purple">✓</div>
                  <div className="badge-text">AYUSH Certified</div>
                </div>
                <div className="badge-item">
                  <div className="badge-icon bg-purple">★</div>
                  <div className="badge-text">Award Winning</div>
                </div>
                <div className="badge-item">
                  <div className="badge-icon bg-purple">💯</div>
                  <div className="badge-text">Money Back Guarantee</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img alt="" class="w-100 h-100 object-fit-cover" srcset="" src="https://testingwing.in/wp-content/uploads/2021/09/9245938-1-1-1000x570.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="d-flex overflow-x-auto pb-2">
          <div className="col-md-3 col-sm-4 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-1 fs-10px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="https://traya.health/cdn/shop/files/intro_9c482754-9edc-49d1-b2a0-31628d1a9b1a.webp?v=1758484918&width=533" alt="Product" style={{width: "100%", minHeight: "180px", objectFit: "cover", aspectRatio: "1"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-10px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-1 fs-10px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_fa3e6c14-b12f-4092-a7fc-c7107a267682.webp?v=1747808561&width=533" alt="Product" style={{width: "100%", minHeight: "180px", objectFit: "cover", aspectRatio: "1"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-10px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-1 fs-10px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_c3510976-4f2b-410a-8a3b-30ac079db6a1.webp?v=1736228295&width=533" alt="Product" style={{width: "100%", minHeight: "180px", objectFit: "cover", aspectRatio: "1"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">HAIR RAS</p>
                <p className="small text-center ">
                  <del className="fs-10px">₹520</del> &nbsp;
                  <span className="10w-medium">₹488</span>
                </p>
              </div>
              <p className="m-0 fs-10px text-center px-3">
                Better hair quality & delayed greying with herbs like shatavari and bhringraj
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-1 fs-10px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_974b046a-80d3-47fe-b2d7-45c21617f988.webp?v=1728627170&width=533" alt="Product" style={{width: "100%", minHeight: "180px", objectFit: "cover", aspectRatio: "1"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-10px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-6 px-1">
            <div className="card p-1 h-100">
              <p className="m-1 fs-10px">
                <span className="bg-secondary rounded-1 px-2 text-white"><FontAwesomeIcon icon={faDrupal} /> Dermatology</span>
                <span className="bg-warning rounded-1 px-2 float-end">Must Have</span>
              </p>
              <p className="m-0 text-center">
                <img src="//traya.health/cdn/shop/files/intro_b0d23409-384d-4c38-9d36-e634322b9811.webp?v=1728625862&width=533" alt="Product" style={{width: "100%", minHeight: "180px", objectFit: "cover", aspectRatio: "1"}} />
              </p>
              <div style={{height: "4rem"}}>
                <p className="small text-center m-0 fw-medium">ANTI-DANDRUFF SHAMPOO</p>
                <p className="small text-center "><del className="fs-10px">₹300</del> <span className="fw-medium">₹281</span></p>
              </div>
              <p className="m-0 fs-10px text-center px-3">
                made with anti-fungal ingredients to get rid of dandruff of all types
              </p>
              <hr className="m-2" />
              <div className="d-flex px-2 overflow-hidden">
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Amla</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Bhringraj</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Shatavari</p>
                </div>
                <div className="col p-0 text-center">
                  <img src="https://img.pikbest.com/png-images/20241225/a-green-aloe-vera-plant-with-spiky-leaves-on-a-white-transparent-png-background_11301626.png!sw800" className="border rounded-circle" alt="" style={{width: "25px", objectFit: "cover", aspectRatio: "1", padding:"2px"}}/> <br />
                  <p className="m-0 fs-8px">Ashawgandha</p>
                </div>
              </div>
              <hr className="m-2" />
              <p className="text-center m-0 fs-10px">More Details <FontAwesomeIcon icon={faAnglesRight} /></p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <style>{`
        .stat-card {
          transition: all 0.3s;
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        }
      `}</style>
      <section className="pb-5 px-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-card text-white bg-purple text-center p-3 rounded-4">
                <div className="fw-bold fs-1">8L+</div>
                <div className="fw-bold fs-6">Happy Customers</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-card text-white bg-purple text-center p-3 rounded-4">
                <div className="fw-bold fs-1">93%</div>
                <div className="fw-bold fs-6">Saw Results</div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-card text-white bg-purple text-center p-3 rounded-4">
                <div className="fw-bold fs-1">70+</div>
                <div className="fw-bold fs-6">Hair Experts</div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-card text-white bg-purple text-center p-3 rounded-4">
                <div className="fw-bold fs-1">100%</div>
                <div className="fw-bold fs-6">Natural Formula</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <style>{`
        .feature-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: white;
          font-size: 36px;
          font-weight: 700;
        }
      `}</style>
      <section className="py-5 px-3 bg-purple-light">
        <div className="container">
          <h1 className="text-center fw-bold">Why Choose Traya?</h1>
          <p className="text-center">
            Our holistic approach combines the best of traditional wisdom with modern science for lasting hair growth
          </p>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card rounded-4 text-center h-100">
                <div className="feature-icon bg-purple">🔬</div>
                <h3 className="fw-medium mb-3">Free Hair Test™</h3>
                <p className="text-muted small">
                  Powered by proprietary algorithm to accurately diagnose your hair type, stage, and root causes of hair loss
                </p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card rounded-4 text-center h-100">
                <div className="feature-icon bg-purple">🌿</div>
                <h3 className="fw-medium mb-3">Customized Treatment</h3>
                <p className="text-muted small">
                  Personalized hair growth plans based on your unique hair profile and internal root causes
                </p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card rounded-4 text-center h-100">
                <div className="feature-icon bg-purple">👨‍⚕️</div>
                <h3 className="fw-medium mb-3">Expert Guidance</h3>
                <p className="text-muted small">
                  Trusted by 70+ hair experts across India. Get continuous support throughout your journey
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <div className="card rounded-4 text-center h-100">
                <div className="feature-icon bg-purple">✨</div>
                <h3 className="fw-medium mb-3">Long-Lasting Results</h3>
                <p className="text-muted small">
                  Works on internal root causes for visible and sustainable hair growth that lasts
                </p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card rounded-4 text-center h-100">
                <div className="feature-icon bg-purple">🏆</div>
                <h3 className="fw-medium mb-3">Award Winning</h3>
                <p className="text-muted small">
                  Most Effective Haircare Product of the Year 2022 by India's Healthcare Excellence
                </p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card rounded-4 text-center h-100">
                <div className="feature-icon bg-purple">💰</div>
                <h3 className="fw-medium mb-3">Money Back Guarantee</h3>
                <p className="text-muted small">
                  100% money-back guarantee if you don't see results with our complete customized plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-5 px-3 bg-purple">
        <div className="container">
          <div className="text-center">
            <div className="d-inline-block rounded-pill px-4 py-2 mb-3 fw-medium bg-purple-light text-white">OUR UNIQUE APPROACH</div>
            <h2 className="section-title">
              Traya's Holistic 3 Science Formula
            </h2>
            <p className="" style={{color: 'rgba(255,255,255,0.9)'}}>
              A synergistic blend designed to tackle hair loss from multiple root causes
            </p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-5">
              <div className="bg-white text-purple px-4 py-2 rounded-pill fs-6 fw-medium">🌿 Ayurveda</div>
              <div className="bg-white text-purple px-4 py-2 rounded-pill fs-6 fw-medium">🔬 Modern Science</div>
              <div className="bg-white text-purple px-4 py-2 rounded-pill fs-6 fw-medium">🥗 Food Science</div>
            </div>
            
            <p className="mt-5 small" style={{fontSize: '18px', maxWidth: '800px', margin: '40px auto 0', lineHeight: '1.8'}}>
              Lab-tested ingredients and adaptogenic herbs clear internal blockages and boost hair regeneration naturally. 
              When combined with our healing dietary plan, it delivers exceptional long-term hair growth results.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <style>{`
        .testimonial-card {
          border-left: 4px solid;
        }
      `}</style>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-semibold">Real Results from Real People</h2>
          <p className="small">
            See what our customers are saying about their hair transformation journey
          </p>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card rounded-4 testimonial-card border-purple h-100">
                <div className="text-danger">★★★★★</div>
                <p className="fst-italic">
                  "I was skeptical at first, but after 5 months on Traya's plan, I can see visible regrowth. 
                  The customized approach really works! The expert guidance made all the difference."
                </p>
                <div className="text-purple fs-5 fw-bold">- Rajesh K., Mumbai</div>
              </div>
            </div>
            
            <div className="col-md-6 mb-3">
              <div className="card rounded-4 testimonial-card border-purple h-100">
                <div className="text-danger">★★★★★</div>
                <p className="fst-italic">
                  "Finally found a solution that addresses the root cause. My hair fall has reduced by 80% 
                  in just 3 months. Thank you Traya for giving me back my confidence!"
                </p>
                <div className="text-purple fs-5 fw-bold">- Priya S., Bangalore</div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card rounded-4 testimonial-card border-purple h-100">
                <div className="text-danger">★★★★★</div>
                <p className="fst-italic">
                  "The holistic approach is what sets Traya apart. It's not just about applying products, 
                  but understanding what's happening inside your body. Highly recommend!"
                </p>
                <div className="text-purple fs-5 fw-bold">- Amit D., Delhi</div>
              </div>
            </div>
            
            <div className="col-md-6 mb-3">
              <div className="card rounded-4 testimonial-card border-purple h-100">
                <div className="text-danger">★★★★★</div>
                <p className="fst-italic">
                  "Women Santulan has been a game-changer for me. My hair is thicker, healthier, and I've 
                  noticed significant regrowth. The best investment I've made for myself!"
                </p>
                <div className="text-purple fs-5 fw-bold">- Sneha M., Pune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="d-none container-fluid pb-0 overflow-hidden">
        <div className="row bg-purple">
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
              <FontAwesomeIcon icon={faAppleWhole} className="text-purple"/><br />
              <p className="small m-0">DANDRUFF</p>
            </div>
            <div className="col-4 text-center">
              <FontAwesomeIcon icon={faAppleWhole} className="text-purple"/><br />
              <p className="small m-0">METABOLISM</p>
            </div>
            <div className="col-4 text-center">
              <FontAwesomeIcon icon={faAppleWhole} className="text-purple"/><br />
              <p className="small m-0">NUTRITION</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none container py-4">
        <h6 className="fw-bold">Your Hair Growth Journey</h6>
        <div className="card p-3">

          <div className="d-flex flex-column flex-sm-row align-items-start">

            <div className="d-flex col">
              <div className="d-flex flex-column align-items-center me-3">
                <div className="rounded-circle bg-purple text-white d-flex align-items-center justify-content-center" style={{width: "30px", height: "30px"}}>
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="flex-grow-1 d-sm-none border-start border-3 border-purple" style={{height: "50px"}}></div>
              </div>
              <div>
                <h6 className="text-purple mb-1">Month 1-3</h6>
                <p className="text-dark mb-4">Controlling dandruff as it acceleration hair fall.</p>
              </div>
            </div>

            <div className="d-flex col">
              <div className="d-flex flex-column align-items-center me-3">
                <div className="rounded-circle bg-purple text-white d-flex align-items-center justify-content-center" style={{width: "30px", height: "30px"}}>
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="flex-grow-1 d-sm-none border-start border-3 border-purple" style={{height: "50px"}}></div>
              </div>
              <div>
                <h6 className="text-purple mb-1">Month 4-6</h6>
                <p className="text-dark mb-4">Visible reduction in hair growth along with thicker, fuller hair.</p>
              </div>
            </div>

            <div className="d-flex col">
              <div className="d-flex flex-column align-items-center me-3">
                <div className="rounded-circle bg-purple text-white d-flex align-items-center justify-content-center" style={{width: "30px", height: "30px"}}>
                  <FontAwesomeIcon icon={faBrain} />
                </div>
              </div>
              <div>
                <h6 className="text-purple mb-1">Month 7-8</h6>
                <p className="text-dark">Onset of new baby hair growth along with thicker, fuller hair.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="d-none container py-4">
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
                    <FontAwesomeIcon icon={fa1} className="text-purple" style={{ fontSize: "60px" }} />
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
                    <FontAwesomeIcon icon={fa2} className="text-purple" style={{ fontSize: "60px" }} />
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
                    <FontAwesomeIcon icon={fa3} className="text-purple" style={{ fontSize: "60px" }} />
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
                    <FontAwesomeIcon icon={fa1} className="text-purple" style={{ fontSize: "60px" }} />
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
                    <FontAwesomeIcon icon={fa2} className="text-purple" style={{ fontSize: "60px" }} />
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
                    <FontAwesomeIcon icon={fa3} className="text-purple" style={{ fontSize: "60px" }} />
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
        <div className="d-flex flex-nowrap overflow-auto pb-2">
          {[
            "General Queries",
            "Hair Test",
            "Hair Coach",
            "Diet Plan",
            "Payments & Refunds",
          ].map((item, index) => (
            <div className="col px-1" key={index} style={{ minWidth: "200px" }}>
              <div className="card p-2 h-100 bg-purple text-white text-center">
                <p className="m-0 text-nowrap">
                  <FontAwesomeIcon icon={faQuestion} /> {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-none container py-4">
        <div className="card bg-purple rounded-3 p-2">
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
                  <hr className="text-purple my-1" />
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
                  <hr className="text-purple my-1" />
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
                  <hr className="text-purple my-1" />
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
                  <hr className="text-purple my-1" />
                  <p className="small m-0 fw-medium">Experience : 15 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <Footer />
    </>
  );
};

export default HomePage;
