import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Books = () => {
  return (
    <div>
      <Navbar />
      <section className="text-center p-5">
        <div className="container">
          <h1>Books</h1>
          <div className="row my-5">
            <div className="col-md">
              <h3>Books PDFs Websites</h3>
              <a
                href="https://darpdfs.org/english/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Dar PDFs English
                </button>
              </a>
              <a
                href="https://darpdfs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Dar PDFs Arabic
                </button>
              </a>
              <a
                href="https://www.kalamullah.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Kalamullah</button>
              </a>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md">
              <h3>Telegram Groups</h3>
              <a
                href="https://t.me/islamitude"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Islamitude</button>
              </a>
              <a
                href="https://t.me/DarPDFs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">DarPDFs</button>
              </a>
              <a
                href="https://t.me/TheEnglishDiwan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">English Diwan</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Books
