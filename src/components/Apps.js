import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Apps = () => {
  return (
    <div>
      <Navbar />
      <section className="text-center p-5">
        <div className="container-xl">
          <h1>Apps</h1>
          <div className="row my-5">
            <div className="card m-2">
              <div className="card-body">
                <h4 className="card-title">Everyday Muslim</h4>
                <p className="card-text">
                  Free Privacy-focused Islamic Prayer times app for Muslims
                </p>
                <a
                  href="https://everydaymuslim.net/"
                  className="btn btn-success"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body ">
                <h4 className="card-title">Pillars</h4>
                <p className="card-text">
                  A free Muslim prayer app with a Qibla. Muslim-built, no ads
                  and privacy-focused.
                </p>
                <a
                  href="https://www.thepillarsapp.com/"
                  className="btn btn-success"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body ">
                <h4 className="card-title">Dhikr & Dua</h4>
                <p className="card-text">
                  Authentic Remembrances and Supplications Prescribed by the
                  Messenger of Allah ﷺ
                </p>
                <a
                  href="https://lifewithallah.com/app/"
                  className="btn btn-success"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body ">
                <h4 className="card-title">Quran App</h4>
                <p className="card-text">
                  A beautiful and ad-free mushaf avaialble for both iOS and
                  Android platform.
                </p>
                <a href="https://quran.com/en/apps" className="btn btn-success">
                  Download
                </a>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body ">
                <h4 className="card-title">More Will Be Added...</h4>
                <p className="card-text">
                  give your suggestions on islamitude@gmail.com or @islamitude
                  on instagram and twitter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Apps
