import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Quran = () => {
  return (
    <div>
      <Navbar />
      <section className="p-5 text-black text-center ">
        <div className="container-xl d-flex align-items-center justify-content-between flex-column">
          <h1>Quran</h1>
          <div className="row my-5">
            <div className="col-md">
              <h3>Online Quran</h3>
              <a
                className=""
                href="https://quran.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Read Quran </button>
              </a>
              <a
                href="https://quranicaudio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Quran Audio</button>
              </a>
              <a
                href="https://www.quran411.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Transliteration
                </button>
              </a>

              <a
                href="https://www.quran411.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Tafsir Ibn Kathir
                </button>
              </a>
            </div>
          </div>
          {/* PDFs*/}

          <div className="row my-5">
            <div className="col-md">
              <h3>PDFs</h3>
              <a
                href="https://www.kidsqurantutoring.com/downloads/Holy-Quran.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Arabic Quran</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1LlPZGRXl3PP548kNchTgDbZQ0AV1zeYR/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Quran in English
                </button>
              </a>
              <a
                href="https://archive.org/details/holyquran_wordbyword_urdutranslation_pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Quran in Urdu</button>
              </a>
              <a
                href="https://qurango.com/download/french.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Quran in French
                </button>
              </a>
              <a
                href="https://darpdfs.org/the-noble-quran-word-for-word-color/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Word-to-Word</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1CxGNYELY4q9baLP8vb6MRtuFLn39DelS/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">Clear Quran</button>
              </a>
              <a
                href="https://darpdfs.org/tafsir-ibn-kathir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Tafsir Ibn Kathir
                </button>
              </a>
              <a
                href="https://darpdfs.org/tafseer-as-sadi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-secondary m-2">
                  Tafseer As-Sa’di
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

export default Quran
