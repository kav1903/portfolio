import React, {useState} from "react";


function Kavin() {

    const [k_is_active, k_set_active] = useState("default-stroke");
    const [a_is_active, a_set_active] = useState("default-stroke");
    const [v_is_active, v_set_active] = useState("default-stroke");
    const [i_is_active, i_set_active] = useState("default-stroke");
    const [n_is_active, n_set_active] = useState("default-stroke");
    function hovered(e) {
        const color_num = Math.floor(Math.random() * (7 + 1))
        if (e.target.id === 'k') {
            if (color_num === 1) {
                k_set_active("pastel-green-stroke")
            } else if (color_num === 2) {
                k_set_active("pastel-blue-stroke")
            } else if (color_num === 3) {
                k_set_active("pastel-yellow-stroke")
            } else if (color_num === 4) {
                k_set_active("pastel-red-stroke")
            } else if (color_num === 5) {
                k_set_active("pastel-purple-stroke")
            } else if (color_num === 6) {
                k_set_active("pastel-orange-stroke")
            } else if (color_num === 7) {
                k_set_active("pastel-pink-stroke")
            } else {
                k_set_active("default-stroke")
            }
        } else if (e.target.id === 'a') {
            if (color_num === 1) {
                a_set_active("pastel-green-stroke")
            } else if (color_num === 2) {
                a_set_active("pastel-blue-stroke")
            } else if (color_num === 3) {
                a_set_active("pastel-yellow-stroke")
            } else if (color_num === 4) {
                a_set_active("pastel-red-stroke")
            } else if (color_num === 5) {
                a_set_active("pastel-purple-stroke")
            } else if (color_num === 6) {
                a_set_active("pastel-orange-stroke")
            } else if (color_num === 7) {
                a_set_active("pastel-pink-stroke")
            } else {
                a_set_active("default-stroke")
            }
        } else if (e.target.id === 'v') {
            if (color_num === 1) {
                v_set_active("pastel-green-stroke")
            } else if (color_num === 2) {
                v_set_active("pastel-blue-stroke")
            } else if (color_num === 3) {
                v_set_active("pastel-yellow-stroke")
            } else if (color_num === 4) {
                v_set_active("pastel-red-stroke")
            } else if (color_num === 5) {
                v_set_active("pastel-purple-stroke")
            } else if (color_num === 6) {
                v_set_active("pastel-orange-stroke")
            } else if (color_num === 7) {
                v_set_active("pastel-pink-stroke")
            } else {
                v_set_active("default-stroke")
            }
        } else if (e.target.id === 'i') {
            if (color_num === 1) {
                i_set_active("pastel-green-stroke")
            } else if (color_num === 2) {
                i_set_active("pastel-blue-stroke")
            } else if (color_num === 3) {
                i_set_active("pastel-yellow-stroke")
            } else if (color_num === 4) {
                i_set_active("pastel-red-stroke")
            } else if (color_num === 5) {
                i_set_active("pastel-purple-stroke")
            } else if (color_num === 6) {
                i_set_active("pastel-orange-stroke")
            } else if (color_num === 7) {
                i_set_active("pastel-pink-stroke")
            } else {
                i_set_active("default-stroke")
            }
        } else if (e.target.id === 'n') {
            if (color_num === 1) {
                n_set_active("pastel-green-stroke")
            } else if (color_num === 2) {
                n_set_active("pastel-blue-stroke")
            } else if (color_num === 3) {
                n_set_active("pastel-yellow-stroke")
            } else if (color_num === 4) {
                n_set_active("pastel-red-stroke")
            } else if (color_num === 5) {
                n_set_active("pastel-purple-stroke")
            } else if (color_num === 6) {
                n_set_active("pastel-orange-stroke")
            } else if (color_num === 7) {
                n_set_active("pastel-pink-stroke")
            } else {
                n_set_active("default-stroke")
            }
        }
    }

  return (
      <p onMouseOver={hovered} id="main">
          <em id={"k"} className={k_is_active}>K</em>
          <em id={"a"} className={a_is_active}>A</em>
          <em id={"v"} className={v_is_active}>V</em>
          <em id={"i"} className={i_is_active}>I</em>
          <em id={"n"} className={n_is_active}>N</em>
      </p>
  );
}
export default Kavin;