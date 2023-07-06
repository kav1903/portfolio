import {wait} from "@testing-library/user-event/dist/utils";

function Binary() {
    // const binary_array = Array.from({length: 1000}, () => Math.floor(Math.random()*2));

    let binary_array = [[]]

    const string_array = binary_array.join(" ")

    function Create2DArray(rows) {
        var arr = [];

        for (var i=0;i<rows;i++) {
            arr[i] = [];
        }

        return arr;
    }

    binary_array = Create2DArray(30)

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            binary_array[i][j] = <v  id={i + " " + j} className={"binary"}>{Math.floor(Math.random()*2) + " "}</v>
        }
        binary_array[i][30] = <br/>
    }


    function hover_event(e) {
        if (e.target.id !== "test") {
            let x = parseInt(e.target.id.split(" ")[0]);
            let y = parseInt(e.target.id.split(" ")[1]);
            let left_upper_corner = document.getElementById((x - 1) + " " + (y - 1)) === null ? x + " " + y : (x - 1) + " " + (y - 1)
            let upper_center = document.getElementById(x + " " + (y - 1)) === null ? x + " " + y : x + " " + (y - 1)
            let right_upper_corner = document.getElementById((x + 1) + " " + (y - 1)) === null ? x + " " + y : (x + 1) + " " + (y - 1)
            let left_center = document.getElementById((x - 1) + " " + (y)) === null ? (x) + " " + y : (x - 1) + " " + y
            let center = document.getElementById(x + " " + y) === null ? x + " " + y : x + " " + y
            let right_center = document.getElementById((x + 1) + " " + y) === null ? x + " " + y : (x + 1) + " " + y
            let left_lower_corner = document.getElementById((x - 1) + " " + (y + 1)) === null ? x + " " + y : (x - 1) + " " + (y + 1)
            let lower_center = document.getElementById(x + " " + (y + 1)) === null ? x + " " + y : x + " " + (y + 1)
            let right_lower_corner = document.getElementById((x + 1) + " " + (y + 1)) === null ? x + " " + y : (x + 1) + " " + (y + 1)


            document.getElementById(left_upper_corner).classList.add("binary-change-color")
            document.getElementById(upper_center).classList.add("binary-change-color")
            document.getElementById(right_upper_corner).classList.add("binary-change-color")
            document.getElementById(left_center).classList.add("binary-change-color")
            document.getElementById(center).classList.add("binary-change-color-center")
            document.getElementById(right_center).classList.add("binary-change-color")
            document.getElementById(left_lower_corner).classList.add("binary-change-color")
            document.getElementById(lower_center).classList.add("binary-change-color")
            document.getElementById(right_lower_corner).classList.add("binary-change-color")

            document.getElementById(left_upper_corner).classList.remove("binary-default")
            document.getElementById(upper_center).classList.remove("binary-default")
            document.getElementById(right_upper_corner).classList.remove("binary-default")
            document.getElementById(left_center).classList.remove("binary-default")
            document.getElementById(center).classList.remove("binary-default")
            document.getElementById(right_center).classList.remove("binary-default")
            document.getElementById(left_lower_corner).classList.remove("binary-default")
            document.getElementById(lower_center).classList.remove("binary-default")
            document.getElementById(right_lower_corner).classList.remove("binary-default")

            // document.getElementById(upper_center).style.color = "red"
            // document.getElementById(right_upper_corner).style.color = "red"
            // document.getElementById(left_center).style.color = "red"
            // document.getElementById(center).style.color = "blue"
            // document.getElementById(right_center).style.color = "red"
            // document.getElementById(left_lower_corner).style.color = "red"
            // document.getElementById(lower_center).style.color = "red"
            // document.getElementById(right_lower_corner).style.color = "red"
        }
    }

    function normal(e) {
        if (e.target.id !== "test") {
            let x = parseInt(e.target.id.split(" ")[0]);
            let y = parseInt(e.target.id.split(" ")[1]);

            let left_upper_corner = document.getElementById((x - 1) + " " + (y - 1)) === null ? x + " " + y : (x - 1) + " " + (y - 1)
            let upper_center = document.getElementById(x + " " + (y - 1)) === null ? x + " " + y : x + " " + (y - 1)
            let right_upper_corner = document.getElementById((x + 1) + " " + (y - 1)) === null ? x + " " + y : (x + 1) + " " + (y - 1)
            let left_center = document.getElementById((x - 1) + " " + (y)) === null ? (x) + " " + y : (x - 1) + " " + y
            let center = document.getElementById(x + " " + y) === null ? x + " " + y : x + " " + y
            let right_center = document.getElementById((x + 1) + " " + y) === null ? x + " " + y : (x + 1) + " " + y
            let left_lower_corner = document.getElementById((x - 1) + " " + (y + 1)) === null ? x + " " + y : (x - 1) + " " + (y + 1)
            let lower_center = document.getElementById(x + " " + (y + 1)) === null ? x + " " + y : x + " " + (y + 1)
            let right_lower_corner = document.getElementById((x + 1) + " " + (y + 1)) === null ? x + " " + y : (x + 1) + " " + (y + 1)


            document.getElementById(left_upper_corner).classList.add("binary-default")
            document.getElementById(upper_center).classList.add("binary-default")
            document.getElementById(right_upper_corner).classList.add("binary-default")
            document.getElementById(left_center).classList.add("binary-default")
            document.getElementById(center).classList.add("binary-default")
            document.getElementById(right_center).classList.add("binary-default")
            document.getElementById(left_lower_corner).classList.add("binary-default")
            document.getElementById(lower_center).classList.add("binary-default")
            document.getElementById(right_lower_corner).classList.add("binary-default")


            document.getElementById(left_upper_corner).classList.remove("binary-change-color")
            document.getElementById(upper_center).classList.remove("binary-change-color")
            document.getElementById(right_upper_corner).classList.remove("binary-change-color")
            document.getElementById(left_center).classList.remove("binary-change-color")
            document.getElementById(center).classList.remove("binary-change-color-center")
            document.getElementById(right_center).classList.remove("binary-change-color")
            document.getElementById(left_lower_corner).classList.remove("binary-change-color")
            document.getElementById(lower_center).classList.remove("binary-change-color")
            document.getElementById(right_lower_corner).classList.remove("binary-change-color")
        }
    }

    async function click_event(e) {
        if (e.target.id !== "test") {
            let x = parseInt(e.target.id.split(" ")[0]);
            let y = parseInt(e.target.id.split(" ")[1]);
            for (let i = 0; i < 50; i++) {


                    if (document.getElementById((x-i) + " " + (y-i)) !== null) {
                        document.getElementById((x-i) + " " + (y-i)).classList.remove("binary-change-color")
                        document.getElementById((x-i) + " " + (y-i)).classList.remove("binary-change-color-center")
                        document.getElementById((x-i) + " " + (y-i)).classList.remove("binary-default")
                        document.getElementById((x-i) + " " + (y-i)).classList.add("hi")
                    }
                    if (document.getElementById((x+i) + " " + (y+i)) !== null) {
                        document.getElementById((x+i) + " " + (y+i)).classList.remove("binary-change-color")
                        document.getElementById((x+i) + " " + (y+i)).classList.remove("binary-change-color-center")
                        document.getElementById((x+i) + " " + (y+i)).classList.remove("binary-default")
                        document.getElementById((x+i) + " " + (y+i)).classList.add("hi")
                    }
                    if (document.getElementById((x-i) + " " + (y+i)) !== null) {
                        document.getElementById((x-i) + " " + (y+i)).classList.remove("binary-change-color")
                        document.getElementById((x-i) + " " + (y+i)).classList.remove("binary-change-color-center")
                        document.getElementById((x-i) + " " + (y+i)).classList.remove("binary-default")
                        document.getElementById((x-i) + " " + (y+i)).classList.add("hi")
                    }
                    if (document.getElementById((x+i) + " " + (y-i)) !== null) {
                        document.getElementById((x+i) + " " + (y-i)).classList.remove("binary-change-color")
                        document.getElementById((x+i) + " " + (y-i)).classList.remove("binary-change-color-center")
                        document.getElementById((x+i) + " " + (y-i)).classList.remove("binary-default")
                        document.getElementById((x+i) + " " + (y-i)).classList.add("hi")
                    }
                    if (document.getElementById((x) + " " + (y-i)) !== null) {
                        document.getElementById((x) + " " + (y-i)).classList.remove("binary-change-color")
                        document.getElementById((x) + " " + (y-i)).classList.remove("binary-change-color-center")
                        document.getElementById((x) + " " + (y-i)).classList.remove("binary-default")
                        document.getElementById((x) + " " + (y-i)).classList.add("hi")
                    }
                    if (document.getElementById((x) + " " + (y+i)) !== null) {
                        document.getElementById((x) + " " + (y+i)).classList.remove("binary-change-color")
                        document.getElementById((x) + " " + (y+i)).classList.remove("binary-change-color-center")
                        document.getElementById((x) + " " + (y+i)).classList.remove("binary-default")
                        document.getElementById((x) + " " + (y+i)).classList.add("hi")
                    }
                    if (document.getElementById((x-i) + " " + (y)) !== null) {
                        document.getElementById((x-i) + " " + (y)).classList.remove("binary-change-color")
                        document.getElementById((x-i) + " " + (y)).classList.remove("binary-change-color-center")
                        document.getElementById((x-i) + " " + (y)).classList.remove("binary-default")
                        document.getElementById((x-i) + " " + (y)).classList.add("hi")
                    }
                    if (document.getElementById((x+i) + " " + (y)) !== null) {
                        document.getElementById((x+i) + " " + (y)).classList.remove("binary-change-color")
                        document.getElementById((x+i) + " " + (y)).classList.remove("binary-change-color-center")
                        document.getElementById((x+i) + " " + (y)).classList.remove("binary-default")
                        document.getElementById((x+i) + " " + (y)).classList.add("hi")
                    }
                    if (document.getElementById((x) + " " + (y)) !== null) {
                        document.getElementById((x) + " " + (y)).classList.remove("binary-change-color")
                        document.getElementById((x) + " " + (y)).classList.remove("binary-change-color-center")
                        document.getElementById((x) + " " + (y)).classList.remove("binary-default")
                        document.getElementById((x) + " " + (y)).classList.add("hi")
                    }






                    await wait(15).then(() => {
                        if (document.getElementById((x-i) + " " + (y-i)) !== null) {
                            document.getElementById((x-i) + " " + (y-i)).classList.add("binary-default")
                            document.getElementById((x-i) + " " + (y-i)).classList.remove("hi")
                        }
                        if (document.getElementById((x+i) + " " + (y+i)) !== null) {
                            document.getElementById((x+i) + " " + (y+i)).classList.add("binary-default")
                            document.getElementById((x+i) + " " + (y+i)).classList.remove("hi")
                        }
                        if (document.getElementById((x-i) + " " + (y+i)) !== null) {
                            document.getElementById((x-i) + " " + (y+i)).classList.add("binary-default")
                            document.getElementById((x-i) + " " + (y+i)).classList.remove("hi")
                        }
                        if (document.getElementById((x+i) + " " + (y-i)) !== null) {
                            document.getElementById((x+i) + " " + (y-i)).classList.add("binary-default")
                            document.getElementById((x+i) + " " + (y-i)).classList.remove("hi")
                        }
                        if (document.getElementById((x) + " " + (y-i)) !== null) {
                            document.getElementById((x) + " " + (y-i)).classList.add("binary-default")
                            document.getElementById((x) + " " + (y-i)).classList.remove("hi")
                        }
                        if (document.getElementById((x) + " " + (y+i)) !== null) {
                            document.getElementById((x) + " " + (y+i)).classList.add("binary-default")
                            document.getElementById((x) + " " + (y+i)).classList.remove("hi")
                        }
                        if (document.getElementById((x-i) + " " + (y)) !== null) {
                            document.getElementById((x-i) + " " + (y)).classList.add("binary-default")
                            document.getElementById((x-i) + " " + (y)).classList.remove("hi")
                        }
                        if (document.getElementById((x+i) + " " + (y)) !== null) {
                            document.getElementById((x+i) + " " + (y)).classList.add("binary-default")
                            document.getElementById((x+i) + " " + (y)).classList.remove("hi")
                        }
                        if (document.getElementById((x) + " " + (y)) !== null) {
                            document.getElementById((x) + " " + (y)).classList.add("binary-default")
                            document.getElementById((x) + " " + (y)).classList.remove("hi")
                        }


                    })





            }
            // let left_upper_corner = document.getElementById((x - 1) + " " + (y - 1)) === null ? x + " " + y : (x - 1) + " " + (y - 1)
            // let upper_center = document.getElementById(x + " " + (y - 1)) === null ? x + " " + y : x + " " + (y - 1)
            // let right_upper_corner = document.getElementById((x + 1) + " " + (y - 1)) === null ? x + " " + y : (x + 1) + " " + (y - 1)
            // let left_center = document.getElementById((x - 1) + " " + (y)) === null ? (x) + " " + y : (x - 1) + " " + y
            // let center = document.getElementById(x + " " + y) === null ? x + " " + y : x + " " + y
            // let right_center = document.getElementById((x + 1) + " " + y) === null ? x + " " + y : (x + 1) + " " + y
            // let left_lower_corner = document.getElementById((x - 1) + " " + (y + 1)) === null ? x + " " + y : (x - 1) + " " + (y + 1)
            // let lower_center = document.getElementById(x + " " + (y + 1)) === null ? x + " " + y : x + " " + (y + 1)
            // let right_lower_corner = document.getElementById((x + 1) + " " + (y + 1)) === null ? x + " " + y : (x + 1) + " " + (y + 1)
            //
            //
            // document.getElementById(left_upper_corner).classList.add("binary-change-color")
            // document.getElementById(upper_center).classList.add("binary-change-color")
            // document.getElementById(right_upper_corner).classList.add("binary-change-color")
            // document.getElementById(left_center).classList.add("binary-change-color")
            // document.getElementById(center).classList.add("binary-change-color-center")
            // document.getElementById(right_center).classList.add("binary-change-color")
            // document.getElementById(left_lower_corner).classList.add("binary-change-color")
            // document.getElementById(lower_center).classList.add("binary-change-color")
            // document.getElementById(right_lower_corner).classList.add("binary-change-color")
            //
            // document.getElementById(left_upper_corner).classList.remove("binary-default")
            // document.getElementById(upper_center).classList.remove("binary-default")
            // document.getElementById(right_upper_corner).classList.remove("binary-default")
            // document.getElementById(left_center).classList.remove("binary-default")
            // document.getElementById(center).classList.remove("binary-default")
            // document.getElementById(right_center).classList.remove("binary-default")
            // document.getElementById(left_lower_corner).classList.remove("binary-default")
            // document.getElementById(lower_center).classList.remove("binary-default")
            // document.getElementById(right_lower_corner).classList.remove("binary-default")
        }
    }



    return (
        <div id={"test"} onClick={click_event} onMouseOver={hover_event} onMouseOut={normal}>
            {binary_array}
            {/*{binary_array[1]}*/}
        </div>
    )
}

export default Binary;