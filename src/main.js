"use strict"

// === Imports === //

// Vendor
var SmoothScroll = require("./plugins/smooth-scroll")

// Ours
import { $, addTo, rmvFrom } from "./plugins/select"
import Nav from "./nav"



// === Vars === //

var
icon = $("body > header svg"),
nav = $("#nav"),
scroll = SmoothScroll('a[href*="#"]'),
check = 0



// === Functions === //

// -- Which Page

function page(cls) {
	return cls === $("body").className
}


// -- Hero Underline

function underline() {
   var span = $("h1 span")
   if (Array.isArray(span)) {
      span.map(function spanMap(item) {
         item.classList.add("js-underline")
      })
   } else {
      span.classList.add("js-underline")
   }
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

addTo("window", "load", function siteReady() {
	addTo("window", "scroll", () => {
		arrowFade()
	})

   underline()

   if (page("home")) {
      document.drop.send.addEventListener("click", validate)
   }
}, {once: true})

Nav()
