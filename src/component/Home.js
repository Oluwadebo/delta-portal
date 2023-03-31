import React from 'react'
import { Link } from 'react-router-dom';
import download from "./asset/download-.png"

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="row bg-light">
            <img src={download} className="logo" alt="" />
            <div className="col-12 stack">
              <center>
                <span><b><i>STAFF PORTAL</i></b></span>
              </center>
            </div>
          </div>
        </div>
        <div className="menu">
          <h4 className='sf-menu'>Home</h4>
        </div>
      </div>
    </>
  )
}

export default Home