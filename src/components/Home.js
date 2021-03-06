import React from "react"
import Logo from "./images/logo.svg"
import quranLogo from "./images/quran.svg"
import hadithLogo from "./images/hadith.png"
import booksLogo from "./images/books.png"
import appsLogo from "./images/apps.png"
import pillarsLogo from "./images/5pillars.png"
import charityLogo from "./images/charity.png"
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
      <section className="text-black text-center">
        <div className="container-xl">
          <div className="row d-flex align-items-center justify-content-center">
            <img
              src={Logo}
              alt="islamitude-logo"
              class="img-fluid  islamitude--logo"
            />
            <p className="lead">All-in-one Islamic Resource App</p>

            <div className="row">
              <div className="col-md">
                <a href="/quran">
                  <button className="btn btn-primary  m-3">
                    <img
                      src={quranLogo}
                      alt="quran"
                      class="img-fluid px-1 icons"
                    />
                    Quran
                  </button>
                </a>
                <a href="/hadith">
                  <button className="btn btn-primary  m-3">
                    <img
                      src={hadithLogo}
                      alt="hadith"
                      class="img-fluid px-1 icons"
                    />
                    Hadith
                  </button>
                </a>
                <a href="/books">
                  <button className="btn btn-primary  m-3">
                    <img
                      src={booksLogo}
                      alt="books"
                      class="img-fluid px-1 icons"
                    />
                    Books
                  </button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <a href="/apps">
                  <button className="btn btn-primary m-3">
                    <img
                      src={appsLogo}
                      alt="apps"
                      class="img-fluid px-1 icons"
                    />
                    Apps
                  </button>
                </a>
                <a href="/fivepillars">
                  <button className="btn btn-primary m-3 icons">
                    <img
                      src={pillarsLogo}
                      alt="pillars"
                      class="img-fluid px-1"
                    />
                    5 Pillars
                  </button>
                </a>
                <a href="/faqs">
                  <button className="btn btn-primary  m-3 icons">
                    <img
                      src={charityLogo}
                      alt="charity"
                      class="img-fluid px-1"
                    />
                    Charities
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
