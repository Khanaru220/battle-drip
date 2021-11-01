# -Battle-Drip (Clone practice)
> https://www.drip.com/pricing


------------

_(Not kidding. Where's my headphone? 🗿)_

https://user-images.githubusercontent.com/74447462/131471173-15af4f3e-14fe-4d92-917e-b45a15b5c4a3.mp4



about body-flex for centering depend on element's size growth: we need to set fixed height for nesting elements so that they could grow from inside instead 100% width (because container has not been specified width)

NO!!! it was ok, but the <p> has large number of character -- enough for create new line (it large than 100% parent) so that the problems of character create newline, not problem of fixed height of nesting elements
(this technique: use fixed width of element inside to grow the width of parent)
(but have benefit -- width is fixed set so that when smaller window, it's not scaled and always align middle)

## Learn:
(transition)
- transition property -- work by transfer 2 different values in a period time (smooth effect)
- default value of left:auto (for transistion position of absolute element)
- transform: rotate(90deg)
- rotate(90deg) -- not "roate"

(state:)
- (HTML need hack to use one-click effect) state :active -- just work by remaining clicking to apply, not one-click
- cons of :hover in CSS -- depend on HTML order, use selector to apply effect when hover, just select in parent. Can't select reverse or outside <-- need create  a container to hover on

(JS)
- querySelector(".de-emphasize.small-right") -- can use multiple classes in DOM
- can't select attribute "d" of <path> by (attribute) name === undefined
-.- don't know why (attribute_name).d not work<-- need use setAttribute()
change attriube -- change icon SVG with <path>
- .setAttribute() / .getAttribute() -- work with attributes
- use .innerHTML -- change HTML content
- event type: mouseover/mouseout to create hover effect

## Try:
- making loop transition -- animation + @keyframes
- have to set Initial style to toggle and reset style in JS event

- applying transition in JS DOM through adding class CSS ".rotate-icon"
- mix left:100% + translate(-100%,0) to move element to the edge of container
- mix add 2 transitions line for :hover and :normal state of element --> action + back
- opacity:0~1 + transition -- replace ".hidden" + JS

## Pratice:
- hover container but change style child element inside

- use many transform: translate()
- positioning for small elements 
- use shadow not "completely black" -- with rgba()

- select element with multiple classes (AND selector -- no "whitespace")
- use solid-fill icon (information)
- text-shadow
- box-shadow
- classes: de-emphasize + sub-headline.
- use margin-top:auto (set only last item in flex go to the edge)
- use icons in flex-box
- use ::after pseudo-element -- add small block + positioning easily

- add js -- event / remove class / change HTML element


## Lack of:
