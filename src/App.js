import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import React from "react";
import kavin from "./kavin";
import Kavin from "./kavin";
import Binary from "./Binary";

function App() {

    const zoomElement = document.getElementById("container")
    // const fadeElement = document.querySelector('.fade')
    const afterZoomElement = document.querySelector('.afterzoom')
    const imgElement = document.getElementById('mainbox')
    const WIDTH = document.documentElement.clientWidth
    const HEIGHT = 5000
    const IMAGE_WIDTH = 630
    const IMAGE_HEIGHT = 500
    const ZOOM_SPEED = 500 // Lower is faster
    const ZOOM_BREAKPOINT = WIDTH / IMAGE_WIDTH // When it should stop zooming in
    const IMAGE_HEIGHT_MAX = IMAGE_HEIGHT * ZOOM_BREAKPOINT
    const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED // Absolute position, when the Element reached maximum size


    const [offset, setOffset] = React.useState(0);
    const setScroll = () => {
        let scroll = window.scrollY
        let temp = scroll / ZOOM_SPEED
        let zoom = temp > 1 ? temp : 1

        setOffset(window.scrollY);
        if (zoom < ZOOM_BREAKPOINT-1) {
            document.getElementById('main-outline').style.pointerEvents = "all"
            document.getElementById('main').style.pointerEvents = "all"
            document.getElementById('mainbox').style.display = 'block'
            document.getElementsByClassName('App-header')[0].style.fontSize = `${window.scrollY/1.3 + 85}px`;
            document.getElementById('main').style.opacity = `${-window.scrollY/1000 + 1}`
            document.getElementById('main-outline').style.opacity = `${-window.scrollY/1000 + 1}`
            document.getElementById('mainbox').style.position = 'fixed'
            document.getElementById('main-outline').style.display = 'block'
            document.getElementById('main').style.display = 'block'
        } else {
            // document.getElementById('mainbox').style.position = 'absolute'
            document.getElementById('main-outline').style.pointerEvents = "none"
            document.getElementById('main').style.pointerEvents = "none"
            // zoomElement.style.top = `${ABSOLUTE}px`
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", setScroll);
        return () => {
            window.removeEventListener("scroll", setScroll);
        };
    }, []);





    function scrolling(e) {
        console.log(window.scrollY);
        document.getElementsByClassName('App-header')[0].style.fontSize = `${window.scrollY + 85}`;
    }

  return (

    <div className="App" onScroll={scrolling}>
        <Binary></Binary>
      <header id = "container" className="App-header" >

          {/*<div id={"test"}>*/}
          {/*    <Binary></Binary>*/}
          {/*</div>*/}
          <div id={"mainbox"} >


            <Kavin/>

            <p  id="main-outline">
              DHANAPAL
            </p>

          </div>



      </header>
        <div>
            <p style={{height: "1500px"}} className={"afterzoom"} id={"subtext"}>
                hello
            </p>
        </div>
        <div>
            <p style={{height: "1500px"}} className={"afterzoom"} id={"subtext"}>
                hello
            </p>
        </div>
    </div>
  );
}

export default App;
