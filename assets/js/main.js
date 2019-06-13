"use strict";$(document).ready(function(){function e(){t++;var e=document.querySelector("nav"),n=getComputedStyle(e.querySelector("li"));if(t%2!=0){var o=parseInt(n.height),l=e.getElementsByTagName("li").length,u=o*l;e.querySelector("ul").style.height=u+"px"}t%2==0&&(e.querySelector("ul").style.height="0px")}var t=0;document.getElementsByClassName("header__btn-mobile-menu")[0]&&(document.getElementsByClassName("header__btn-mobile-menu")[0].onclick=e),$(".section__btn_section_one").on("click",function(){$(".back-popup").fadeIn("slow"),$(".popup").fadeIn("slow"),$(".popup").css("display","flex")}),$(".popup__btn")&&$(".popup__btn").on("click",function(){$(".back-popup").fadeOut("slow"),$(".popup").fadeOut("slow")});var n={el:{ham:$(".header__btn-mobile-menu"),menuTop:$(".header_menu-top"),menuMiddle:$(".header_menu-middle"),menuBottom:$(".header_menu-bottom")},init:function(){n.bindUIactions()},bindUIactions:function(){n.el.ham.on("click",function(e){n.activateMenu(e),e.preventDefault()})},activateMenu:function(){n.el.menuTop.toggleClass("menu-top-click"),n.el.menuMiddle.toggleClass("menu-middle-click"),n.el.menuBottom.toggleClass("menu-bottom-click")}};n.init()

$('.section__btn_contact_us').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.section__to_do').offset().top }, 500);
  e.preventDefault();
});

$('.section__btn_section_one').on("submit", function(e) {
   e.preventDefault();
  $.ajax({
    url: "https://formspree.io/chermanderX@yandex.ru", 
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
  }).done(function() {
     alert(1);
  });
  return false;
});


});