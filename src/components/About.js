import React from "react"
import Footer from "./Footer"
import Boy from "./images/boy.svg"
import Navbar from "./Navbar"

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about p-5 text-left">
        <div className="container ">
          <div className="row">
            <div className="col-md d-flex align-items-center justify-content-center flex-column">
              <h1>About Us</h1>
              <p className="lead">
                Islamitude is a website that connects people to the Holy Quran
                and Hadith. The Holy Quran and Hadith are Islam's most important
                books, and we are sadly not close to them in today's world.
                people do not learn about Islam because they do not know where
                to begin or where to find to learn about Islam, so we created
                this small website that gathers all Islamic resources in place,
                allowing people to learn about Islam easily and quickly.
              </p>
            </div>
            <div className="col-md d-flex align-items-center justify-content-center">
              <img src={Boy} alt="boy holding phone" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
