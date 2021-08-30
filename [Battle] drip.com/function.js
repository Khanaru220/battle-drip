"use strict";
// Select -- FAQ
const faqTitleSl = document.querySelectorAll(".faq-title");
const faqAnswerSl = document.getElementsByClassName("faq-answer");
const changePathIconSl = document.querySelectorAll(".faq-change-icon");
const iconFaqEL = document.querySelectorAll(".icon-right-arrow");
// Select -- Button
const btnSMSEl = document.querySelector(".btn-small");
const containerButtonEl = document.querySelector(".container-2-button");

const smallRatioRightEl = document.querySelector(".de-emphasize.small-right");
const pricingRightEl = document.querySelector(".pricing-right");
const smallBtnEl = document.querySelector(".btn-small");
const bigBtnEl = document.querySelector(".btn-big");

for (let i = 0; i < faqTitleSl.length; i++) {
	// (1) Initial styling (differnt class display/non-display at beginning)
	if (!faqAnswerSl[i].classList.contains("hidden")) {
		iconFaqEL[i].style.stroke = "#f224f2";
		faqTitleSl[i].style.color = "#f224f2";
		iconFaqEL[i].classList.add("rotate-icon");
		// faqTitleSl[i].style.fontWeight = "bold";
		// faqTitleSl[i].style.letterSpacing = "0.5px";
		// changePathIconSl[i].setAttribute("d", "M19 9l-7 7-7-7");
	} else {
		iconFaqEL[i].style.stroke = "";
		faqTitleSl[i].style.color = "";
		// faqTitleSl[i].style.fontWeight = 400;
		// faqTitleSl[i].style.letterSpacing = "";
		// changePathIconSl[i].setAttribute("d", "M9 5l7 7-7 7");
	}

	// Click faq title -- display faq answer + change icon  + change color faq-title
	faqTitleSl[i].addEventListener("click", function () {
		faqAnswerSl[i].classList.toggle("hidden");

		iconFaqEL[i].classList.toggle("rotate-icon");
		// can use "hidden" for condition checking
		// --- replaced by transition CSS + roate()
		// if (changePathIconSl[i].getAttribute("d") === "M9 5l7 7-7 7") {
		// 	changePathIconSl[i].setAttribute("d", "M19 9l-7 7-7-7");
		// } else changePathIconSl[i].setAttribute("d", "M9 5l7 7-7 7");
		// ---
		iconFaqEL;

		// (2) Copy from initial -- toggle when "click"
		if (!faqAnswerSl[i].classList.contains("hidden")) {
			iconFaqEL[i].style.stroke = "#f224f2";
			faqTitleSl[i].style.color = "#f224f2";
			// faqTitleSl[i].style.fontWeight = "bold";
			// faqTitleSl[i].style.letterSpacing = "0.5px";
		} else {
			iconFaqEL[i].style.stroke = "";
			faqTitleSl[i].style.color = "";
			// faqTitleSl[i].style.fontWeight = 400;
			// faqTitleSl[i].style.letterSpacing = "";
		}
	});

	// Can't set 1 condition check class to toggle eventListener -- eventListerner add 1 time and stick to element -- NOT WHITE SURE :"}"

	// (3) Check condition to apply hover effect -- while non-display faq answer
	faqTitleSl[i].addEventListener("mouseover", function () {
		if (faqAnswerSl[i].classList.contains("hidden")) {
			iconFaqEL[i].style.stroke = "#a819a8";
			faqTitleSl[i].style.color = "#a819a8";
		}
	});
	faqTitleSl[i].addEventListener("mouseout", function () {
		if (faqAnswerSl[i].classList.contains("hidden")) {
			iconFaqEL[i].style.stroke = "";
			faqTitleSl[i].style.color = "";
		}
	});
}

// arrow-right"M19 9l-7 7-7-7";
// arrow-down "M9 5l7 7-7 7";

// BUTTONS ON RIGHT SIDE
containerButtonEl.addEventListener("mouseover", function () {
	smallRatioRightEl.innerHTML = "$0.03 / send";
	pricingRightEl.innerHTML = "$30.00";
	smallBtnEl.innerHTML = "MMS";
});

containerButtonEl.addEventListener("mouseout", function () {
	smallRatioRightEl.innerHTML = "$0.015 / send";
	pricingRightEl.innerHTML = "$15.00";
	smallBtnEl.innerHTML = "SMS";
});

console.log(bigBtnEl);
