import React from "react"

const Footer = () => {
  return (
    <div>
      <footer class="p-3 text-center text-black ">
        <p>Copyright 2022 © Islamitude</p>
        <div className="row">
          <div className="col-md ">
            <a href="/about" className="mx-3">
              About
            </a>
            <a href="/developers" className="mx-3">
              Developers
            </a>
            <a href="https://www.buymeacoffee.com/islamitude" className="mx-3">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
