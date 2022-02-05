var currentDay = moment().format("MMM Do YY")
function whatDayIsIt(){
 dateDisplay= document.getElementById("currentDay")
dateDisplay.innerHTML=currentDay

}
function init() {displayNine() 
  checkHour9()
  displayTen() 
  checkHour10()
  displayEleven() 
  checkHour11()
  displayTwelve() 
  checkHour12()
  displayOne() 
  checkHour1()
  displayTwo() 
  checkHour2()
  displayThree() 
  checkHour3()
  displayFour() 
  checkHour4()
  displayFive() 
  checkHour5()




whatDayIsIt()} 
var nineAMEvents
var firstEvent
var nineAM
var nineColor
var nineHour = 9
var currentHour = moment().hour() 
var nineAMTextArea =document.getElementById("nineAMEvents")
 //window.localStorage.clear()
 function checkHour9(){
   if (nineHour === currentHour)
   {nineAMTextArea.classList.add("present")}
   if (nineHour <  currentHour)
{   nineAMTextArea.classList.add("past")}
   if (nineHour > currentHour)
  { nineAMTextArea.classList.add("future")}
 }

function displayNine() { 
     nineAMEvents = document.getElementById ("nineAMEvents")
   
firstEvent=localStorage.getItem("nineOClock")  
  nineAMEvents.innerHTML = firstEvent}
window.onload= init
let nineOClock
if (window.localStorage.nineOClock){
    nineOClock=window.localStorage.getItem("nineOClock")
}
else nineOClock =""
 function SaveNine()  
   {
 nineOClock = nineAMTextArea.value
   localStorage.setItem("nineOClock",nineOClock)
displayNine()
}
var nineQueue =document.getElementById("9AMTitle")
addEventListener("click",SaveNine)



var tenAMEvents
var secondEvent
var tenAM
var tenColor
var tenHour = 10

var tenAMTextArea =document.getElementById("tenAMEvents")
 //window.localStorage.clear()
 function checkHour10(){
   if (tenHour === currentHour)
   {tenAMTextArea.classList.add("present")}
   if (tenHour <  currentHour)
{   tenAMTextArea.classList.add("past")}
   if (tenHour > currentHour)
  { tenAMTextArea.classList.add("future")}
 }

function displayTen() { 
     tenAMEvents = document.getElementById ("tenAMEvents")
   
secondEvent=localStorage.getItem("tenOClock")  
  tenAMEvents.innerHTML = secondEvent}
let tenOClock
if (window.localStorage.tenOClock){
    tenOClock=window.localStorage.getItem("tenOClock")
}
else tenOClock =""
 function SaveTen()  
   {
 tenOClock = tenAMTextArea.value
   localStorage.setItem("tenOClock",tenOClock)
displayTen()
}
var tenQueue =document.getElementById("10AMTitle")
addEventListener("click",SaveTen)


var elevenAMEvents
var thirdEvent
var elevenAM
var elevenColor
var elevenHour = 11

var elevenAMTextArea =document.getElementById("elevenAMEvents")
 //window.localStorage.clear()
 function checkHour11(){
   if (elevenHour === currentHour)
   {elevenAMTextArea.classList.add("present")}
   if (elevenHour <  currentHour)
{   elevenAMTextArea.classList.add("past")}
   if (elevenHour > currentHour)
  { elevenAMTextArea.classList.add("future")}
 }

function displayEleven() { 
  elevenAMEvents = document.getElementById ("elevenAMEvents")
   
thirdEvent=localStorage.getItem("elevenOClock")  
elevenAMEvents.innerHTML = thirdEvent}
let elevenOClock
if (window.localStorage.elevenOClock){
  elevenOClock=window.localStorage.getItem("elevenOClock")
}
else elevenOClock =""
 function SaveEleven()  
   {
    elevenOClock = elevenAMTextArea.value
   localStorage.setItem("elevenOClock",elevenOClock)
displayEleven()
}
var elevenQueue =document.getElementById("11AMTitle")
addEventListener("click",SaveEleven)




var twelveEvent
var twelveAMEvents
var fourthEvent
var twelveAM
var twelveColor
var twelveHour = 12

var twelveAMTextArea =document.getElementById("twelveAMEvents")
 //window.localStorage.clear()
 function checkHour12(){
   if (twelveHour === currentHour)
   {twelveAMTextArea.classList.add("present")}
   if (twelveHour <  currentHour)
{   twelveAMTextArea.classList.add("past")}
   if (twelveHour > currentHour)
  { twelveAMTextArea.classList.add("future")}
 }

function displayTwelve() { 
  twelveAMEvents = document.getElementById ("twelveAMEvents")
   
fourthEvent=localStorage.getItem("twelveOClock")  
twelveAMEvents.innerHTML = twelveEvent}
let twelveOClock
if (window.localStorage.twelveOClock){
  twelveOClock=window.localStorage.getItem("twelveOClock")
}
else twelveOClock =""
 function SaveTwelve()  
   {
    twelveOClock = twelveAMTextArea.value
   localStorage.setItem("twelveOClock",twelveOClock)
displayTwelve()
}
var twelveQueue =document.getElementById("12AMTitle")
addEventListener("click",SaveTwelve)





var oneAMEvents
var fifthEvent
var oneAM
var oneColor
var oneHour = 13

var oneAMTextArea =document.getElementById("oneAMEvents")
 //window.localStorage.clear()
 function checkHour1(){
   if (oneHour === currentHour)
   {oneAMTextArea.classList.add("present")}
   if (oneHour <  currentHour)
{   oneAMTextArea.classList.add("past")}
   if (oneHour > currentHour)
  { oneAMTextArea.classList.add("future")}
 }

function displayOne() { 
  oneAMEvents = document.getElementById ("oneAMEvents")
   
fifthEvent=localStorage.getItem("oneOClock")  
oneAMEvents.innerHTML = fifthEvent}
let oneOClock
if (window.localStorage.oneOClock){
  oneOClock=window.localStorage.getItem("oneOClock")
}
else oneOClock =""
 function SaveOne()  
   {
    oneOClock = oneAMTextArea.value
   localStorage.setItem("oneOClock",oneOClock)
displayOne()
}
var oneQueue =document.getElementById("1AMTitle")
addEventListener("click",SaveOne)





var twoAMEvents
var sixthEvent
var twoAM
var twoColor
var twoHour = 14

var twoAMTextArea =document.getElementById("twoAMEvents")
 //window.localStorage.clear()
 function checkHour2(){
   if (twoHour === currentHour)
   {twoAMTextArea.classList.add("present")}
   if (twoHour <  currentHour)
{   twoAMTextArea.classList.add("past")}
   if (twoHour > currentHour)
  { twoAMTextArea.classList.add("future")}
 }

function displayTwo() { 
  twoAMEvents = document.getElementById ("twoAMEvents")
   
sixEvent=localStorage.getItem("twoOClock")  
twoAMEvents.innerHTML = sixthEvent}
let twoOClock
if (window.localStorage.twoOClock){
  twoOClock=window.localStorage.getItem("twoOClock")
}
else twoOClock =""
 function SaveTwo()  
   {
    twoOClock = twoAMTextArea.value
   localStorage.setItem("twoOClock",twoOClock)
displayTwo()
}
var twoQueue =document.getElementById("2AMTitle")
addEventListener("click",SaveTwo)




var threeEvent
var threeAMEvents
var seventhEvent
var threeAM
var threeColor
var threeHour = 15

var threeAMTextArea =document.getElementById("threeAMEvents")
 //window.localStorage.clear()
 function checkHour3(){
   if (threeHour === currentHour)
   {threeAMTextArea.classList.add("present")}
   if (threeHour <  currentHour)
{   threeAMTextArea.classList.add("past")}
   if (threeHour > currentHour)
  { threeAMTextArea.classList.add("future")}
 }

function displayThree() { 
  threeAMEvents = document.getElementById ("threeAMEvents")
   
seventhEvent=localStorage.getItem("threeOClock")  
threeAMEvents.innerHTML = threeEvent}
let threeOClock
if (window.localStorage.threeOClock){
  threeOClock=window.localStorage.getItem("threeOClock")
}
else threeOClock =""
 function SaveThree()  
   {
    threeOClock = threeAMTextArea.value
   localStorage.setItem("threeOClock",threeOClock)
displayThree()
}
var threeQueue =document.getElementById("3AMTitle")
addEventListener("click",SaveThree)

var fourEvent
var fourAMEvents
var eighthEvent
var fourAM
var fourColor
var fourHour = 16

var fourAMTextArea =document.getElementById("fourAMEvents")
 //window.localStorage.clear()
 function checkHour4(){
   if (fourHour === currentHour)
   {fourAMTextArea.classList.add("present")}
   if (fourHour <  currentHour)
{   fourAMTextArea.classList.add("past")}
   if (fourHour > currentHour)
  { fourAMTextArea.classList.add("future")}
 }

function displayFour() { 
  fourAMEvents = document.getElementById ("fourAMEvents")
   
eighthEvent=localStorage.getItem("fourOClock")  
fourAMEvents.innerHTML = fourEvent}
let fourOClock
if (window.localStorage.fourOClock){
  fourOClock=window.localStorage.getItem("fourOClock")
}
else fourOClock =""
 function SaveFour()  
   {
    fourOClock = fourAMTextArea.value
   localStorage.setItem("fourOClock",fourOClock)
displayFour()
}
var fourQueue =document.getElementById("4AMTitle")
addEventListener("click",SaveFour)


var fiveAMEvents
var ninthEvent
var fiveAM
var fiveColor
var fiveHour = 17

var fiveAMTextArea =document.getElementById("fiveAMEvents")
 //window.localStorage.clear()
 function checkHour5(){
   if (fiveHour === currentHour)
   {fiveAMTextArea.classList.add("present")}
   if (fiveHour <  currentHour)
{   fiveAMTextArea.classList.add("past")}
   if (fiveHour > currentHour)
  { fiveAMTextArea.classList.add("future")}
 }

function displayFive() { 
  fiveAMEvents = document.getElementById ("fiveAMEvents")
   
ninthEvent=localStorage.getItem("fiveOClock")  
fiveAMEvents.innerHTML = ninthEvent}
let fiveOClock
if (window.localStorage.fiveOClock){
  fiveOClock=window.localStorage.getItem("fiveOClock")
}
else fiveOClock =""
 function SaveFive()  
   {
    fiveOClock = fiveAMTextArea.value
   localStorage.setItem("fiveOClock",fiveOClock)
displayFive()
}
var fiveQueue =document.getElementById("5AMTitle")
addEventListener("click",SaveFive)



