

//navbar
 const navbar = document.querySelector(".navbar");
 const menu = document.querySelector(".navbar__content__menu-list");
 const menubtn = document.querySelector(".menu-btn");
 const cancelbtn = document.querySelector(".cancel-btn");
 menubtn.onclick = () => {
   menu.classList.add("active");
   menubtn.classList.add("hide");
 };
 cancelbtn.onclick = () => {
   menu.classList.remove("active");
   menubtn.classList.remove("hide");
 };

 window.onscroll = () => {
   this.scrollY > 20
     ? navbar.classList.add("sticky")
     : navbar.classList.remove("sticky");
 };


// window.onscroll = ()=>{
//     let nav =document.querySelector('nav');
//     if(window.pageXOffset > 0){
//         nav.classList.add('sticky')
//     }
//     else{
//         nav.classList.remove('sticky')
//     }
// }

// window.addEventListener("scroll", function () {
//   var nav = document.querySelector("nav");
//   nav.classList.toggle("shrink", window.scrollY > 0);
// });

//  const navtoggler=document.querySelector(".nav-toggler");
//  navtoggler.addEventListener("click",navtoggle);
//  function navtoggle(){
//      navtoggler.classList.toggle("active")
//      const nav =document.querySelector(".navv")
//      nav.classList.toggle("open");
//      if(nav.classList.contains("open")){
//          nav.style.maxHeight=nav.scrollHeight+"px";
//      }
//      else{
//          nav.removeAttribute("style")
//      }
//  }



//enhance
const num = document.getElementById("number");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");

function numbers(num,start,end,duration){
  let startTimestamp=null;
  const change =(timestamp)=>{
    if(!startTimestamp) startTimestamp = timestamp;
    const calc = Math.min((timestamp - startTimestamp) / duration, 1);
    num.innerHTML=Math.floor(calc * (end-start) + start);
    if(calc<1){
      window.requestAnimationFrame(change);
    }

    
  }
  window.requestAnimationFrame(change)
}
numbers(num,0,220,1500);
numbers(num1,0,25,1500);
numbers(num2,0.1,3.0,1500);





//map
//   $("[data-toggle=tooltip]").tooltip();
//  document.querySelectorAll(".countries-circle").forEach((circle) => {
//    circle.addEventListener("mouseenter", function () {
//      document.querySelector(circle.getAttribute("data-id")).style.fill =
//        primaryColor;
//    });
//  });


 document.querySelectorAll(".countries-circle").forEach((circle) => {
   circle.addEventListener("mouseleave", function () {
     document.querySelector(circle.getAttribute("data-id")).style.fill =
       "#E5E9F4";
   });
 });
 document.querySelectorAll(".countries-circle-orange").forEach((circle) => {
   circle.addEventListener("mouseenter", function () {
     document.querySelector(circle.getAttribute("data-id")).style.fill =
       "#FF931E";
   });
 });
 document.querySelectorAll(".countries-circle-orange").forEach((circle) => {
   circle.addEventListener("mouseleave", function () {
     document.querySelector(circle.getAttribute("data-id")).style.fill =
       "#E5E9F4";
   });
 });






//footer
function Baku() {
  var html3 = "baku@simbrella.com";
  var html = "Main Operations Office";
  var html2 =
    "Jalil Mammadguluzadeh st. 102 A, City Point Business Centre, AZ1022, Baku, Azerbaijan";
  document.getElementsByClassName(
    "footer-contact__first__body__baku"
  )[0].innerHTML = html;
  document.getElementsByClassName(
    "footer-contact__first__body__paragraph"
  )[0].innerHTML = html2;
  document.getElementsByClassName("about")[0].innerHTML = html3;
  document.querySelector("#amsterdam").style.color = "#999999";
  document.querySelector("#singapore").style.color = "#999999";
  document.querySelector("#baku").style.color = "#FF931E";
}
function Singapore() {
  var html3 = "singapore@simbrella.com";
  var html = "APAC Region Office";
  var html2 = "1163 Tras Street, #07-02, Lian Huat Building, 079024, Singapore";
  document.getElementsByClassName(
    "footer-contact__first__body__baku"
  )[0].innerHTML = html;
  document.getElementsByClassName(
    "footer-contact__first__body__paragraph"
  )[0].innerHTML = html2;
  document.getElementsByClassName("about")[0].innerHTML = html3;
  document.querySelector("#amsterdam").style.color = "#999999";
  document.querySelector("#singapore").style.color = "#FF931E";
  document.querySelector("#baku").style.color = "#999999";
}
function Amsterdam() {
  var html3 = "amsterdam@simbrella.com";
  var html = "Headquarters";
  var html2 =
    "Teleportboulevard 130, Scalehub, Unit number 1.08, 1043 EJ Amsterdam, Netherlands";
  document.getElementsByClassName(
    "footer-contact__first__body__baku"
  )[0].innerHTML = html;
  document.getElementsByClassName(
    "footer-contact__first__body__paragraph"
  )[0].innerHTML = html2;
  document.getElementsByClassName("about")[0].innerHTML = html3;
  document.querySelector("#amsterdam").style.color = "#FF931E";
  document.querySelector("#singapore").style.color = "#999999";
  document.querySelector("#baku").style.color = "#999999";
}
