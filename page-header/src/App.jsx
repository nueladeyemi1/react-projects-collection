import { useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from 'react-icons/fi'
// import {AiOutlineSearch} from  'react-icons/ai'
import {BsGear} from 'react-icons/bs'
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import './App.css'

function App() {

  return (
    <>
      <section className="container">
        <div className="main__container">
          <article className="content">
            <div className="links">
              <div>
                <a href="" className="link active">
                  My Parameters
                </a>
                <div className='underline'></div>
              </div>
              <a href="" className="link">
                Public
              </a>
              <a href="" className="link">
                Configurations
              </a>
            </div>
            <div className="mid__content">
              <p>My Parameters</p>
              <div className="btns">
                <button className="btn">
                  <FiEdit2 /> edit
                </button>
                <button className="btn">
                  <RiDeleteBinLine /> Delete
                </button>
                <button className="btn its__active">Create Parameter</button>
              </div>
            </div>
            <section className="search__info">
              <input placeholder="&#x1F50E; Search" className="" />
              <div>
                <button className="arrow">
                  <MdArrowBackIosNew />
                </button>
                <span>1</span>
                <button className="arrow">
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
              {<BsGear style={{ width: "32px", height: "32px" }} />}
            </section>
            <section className="search__items">
              <button className="searched">Name: Contains: auth0 </button>
              <button className="search__clear">Clear filters</button>
            </section>
          </article>
          <div className="lower__container"></div>
        </div>
      </section>
    </>
  );
}

export default App
