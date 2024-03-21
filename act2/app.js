import { imgfun } from "./image.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')

let obj1 = {
    title   : "Porsche, 911 GT3 RS",
    par     : "Introducing the epitome of automotive excellence: the Porsche 911 GT3 RS. <br>Born from the racetrack, this marvel of engineering redefines performance. Accelerate <br> from 0 to 100 km/h in a blistering 3 seconds flat, leaving competitors in the dust. With its precision-tuned<br> aerodynamics and a powerful engine, every curve becomes your playground. Experience the pinnacle of driving pleasure<br> with the Porsche 911 GT3 RS. It's not just a car; it's a statement of pure performance.",
    button  : "Contact me",
    img     : "porsche.png"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "porschee.jpg",
    desc    : "Stare The Beauty of Porsche 911 GT3 RS",
    button1 : "learn more",
    title2  : "MOVIES"
}

const { image, desc, button1, title2 } = obj2

section1.append(infofunc(title, par, button))
section1.append(imgfun(img))
section3.append(infofunc2(title2))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))