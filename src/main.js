"use strict"

// === Imports === //

// Vendor
var SmoothScroll = require("./plugins/smooth-scroll")

// Ours
import Nav from "./nav"



// === Vars === //

var
icon = document.querySelector("body > header svg"),
nav = document.querySelector("#nav"),
scroll = SmoothScroll("a[href*='#']"),
check = 0



// === Functions === //

// -- Which Page

function page(cls) {
	return cls === document.body.className
}


// -- Hero Underline

function underline() {
   var span = document.querySelectorAll("h1 span")
   
   span.forEach(item => {
      item.classList.add("js-underline")
   })
}


// -- Arrow Fade

function arrowFade() {
   var wh = Math.round(window.innerHeight * 0.33),
   ws = window.scrollY

	if (ws > wh && !check) {
		icon.classList.add("fade")
		check = 1
	} else if (ws < wh && check) {
		icon.classList.remove("fade")
		check = 0
	}
}


// -- Form Validation

function validate() {
   document.drop.classList.add("sub")
}



// === Invoke === //

window.addEventListener("load", () => {
	window.addEventListener("scroll", () => {
		arrowFade()
	})

   underline()

   if (page("home")) {
      document.drop.send.addEventListener("click", validate)
   }
}, { once: true })

Nav()
