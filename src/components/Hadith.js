import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Hadith = () => {
  return (
    <div>
      <Navbar />
      <section className="text-center p-5">
        <div className="container-xl">
          <h1>Hadiths</h1>
          <div className="row my-5">
            <div className="col-md">
              <h3>Online Hadith</h3>
              <a
                href="https://sunnah.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Read All Hadith
                </button>
              </a>
              <a
                href="https://40hadithnawawi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  40 Hadith Nawawi
                </button>
              </a>
              <a
                href="https://ahadith.co.uk/110ahadithqudsi.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  110 Hadith Qudsi
                </button>
              </a>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md">
              <h3>Hadith PDF</h3>
              <a
                href="https://d1.islamhouse.com/data/en/ih_books/single/en_Sahih_Al-Bukhari.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Sahih Bukhari</button>
              </a>
              <a
                href="https://d1.islamhouse.com/data/en/ih_books/single/en_Sahih_Muslim.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Sahih Muslim</button>
              </a>
              <a
                href="https://archive.org/details/sunan-an-nasa-i-volume-1-6/sunan-an-nasa-i-volume-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Sunan an-Nasa'i
                </button>
              </a>
              <a
                href="https://ia902204.us.archive.org/10/items/AllInOne-Hadiths-EngArabicDarusalam_201407/All%20in%20One-Sunan%20Abu%20Dawud-Eng.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Sunan Abi Dawud
                </button>
              </a>

              <a
                href="https://www.kalamullah.com/Books/Hadith/Jami%20at-Tirmidhi%20Vol.%206%20-%203291-3956.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Jami` at-Tirmidhi
                </button>
              </a>
              <a
                href="https://www.kalamullah.com/Books/Hadith/Jami%20at-Tirmidhi%20Vol.%206%20-%203291-3956.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Sunan Ibn Majah
                </button>
              </a>
              <a
                href="https://darpdfs.org/wp-content/uploads/2022/02/Al-Adab-Al-Mufrad-Imam-al-Bukhari.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Al-Adab Al-Mufrad
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Hadith
