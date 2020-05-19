  let checkbox = document.getElementById("checkbox");
let navbar = document.querySelector("#nav");
let bender_text = document.querySelector("#bender_text");
let rocket_night = document.querySelector('#rocket_night');
let navtext_night = document.querySelector('#night_way');
let portfolio_night = document.querySelector('#portfolio_night');
let portfolio_art = document.querySelector('#portfolio_art');
let photo_night = document.querySelector("#photo_night");
let about_night = document.querySelector("#aboutme");
let text_night = document.querySelector("#text_night");
let scroll_night = document.querySelector("#scroll_night");


    checkbox.addEventListener('change', () => { 
        document.body.classList.toggle("dark")
        navbar.classList.toggle("dark")
        bender_text.classList.toggle("dark")
        rocket_night.classList.toggle("dark")
        navtext_night.classList.toggle("dark")
        portfolio_night.classList.toggle("dark")
        portfolio_art.classList.toggle("dark")
        photo_night.classList.toggle("dark")
        about_night.classList.toggle("dark")
        text_night.classList.toggle("dark")
        scroll_night.classList.toggle('dark')
    });


let content_block1 = document.querySelector('#content_b'); 
let  circle_big = document.querySelector("#circle_big");
let  time_text1 = document.querySelector("#time_text2993");

let content_block2 = document.querySelector("#content_b2");
let circle2_big = document.querySelector('#circle2_big');
let time_text2 = document.querySelector("#time_text3015");

let content_block3 = document.querySelector("#content_b3");
let circle3_big = document.querySelector('#circle3_big');
let time_text3 = document.querySelector("#time_text3017");

let content_block4 = document.querySelector("#content_b4");
let circle4_big = document.querySelector('#circle4_big');
let time_text4 = document.querySelector("#time_textNow");

 
content_block1.addEventListener('mouseenter', function() { 
  circle_big.classList.toggle("dark"); 
  time_text1.classList.toggle("dark")
})
content_block1.addEventListener('mouseleave', function () {
  circle_big.classList.remove('dark');
  time_text1.classList.remove('dark');
})

content_block2.addEventListener('mouseenter', function() { 
  circle2_big.classList.toggle('dark');
  time_text2.classList.toggle('dark');
})
content_block2.addEventListener('mouseleave', function () {
  circle2_big.classList.remove('dark');
  time_text2.classList.remove('dark');
})

content_block3.addEventListener('mouseenter', function() { 
  circle3_big.classList.toggle('dark');
  time_text3.classList.toggle('dark');
})
content_block3.addEventListener('mouseleave', function () {
  circle3_big.classList.remove('dark');
  time_text3.classList.remove('dark');
})

content_block4.addEventListener('mouseenter', function() { 
  circle4_big.classList.toggle('dark');
  time_text4.classList.toggle('dark');
})
content_block4.addEventListener('mouseleave', function() { 
  circle4_big.classList.remove('dark');
  time_text4.classList.remove('dark');
})

let bender1 = document.querySelector("#bender_2993");
let bender2 = document.querySelector('#bender_3015');

content_block2.addEventListener('mouseenter', function() { 
  bender1.classList.toggle('dark')
  bender2.classList.toggle('dark')
})
content_block2.addEventListener('mouseleave', function () {
  bender1.classList.remove('dark');
  bender2.classList.remove('dark');
})

let bender3 = document.querySelector("#bender_3017"); 

content_block3.addEventListener('mouseenter', function() { 
  bender2.classList.remove('dark')
  bender1.classList.toggle('dark')
  bender3.classList.toggle('dark')
});
content_block3.addEventListener('mouseleave', function () {
  bender1.classList.remove('dark');
  bender2.classList.remove('dark');
  bender3.classList.remove('dark');
});

let bender4 = document.querySelector('#bender_nowadays'); 

content_block4.addEventListener('mouseenter', function() { 
  bender2.classList.remove('dark')
  bender1.classList.toggle('dark')
  bender3.classList.remove('dark')
  bender4.classList.toggle('dark');
});

content_block4.addEventListener('mouseleave', function () {
  bender1.classList.remove('dark');
  bender2.classList.remove('dark');
  bender3.classList.remove('dark');
  bender4.classList.remove('dark');
})

let about_me = document.querySelector("#about_me"); 
let career_way = document.querySelector("#night_way"); 
let portfolio = document.querySelector("#portfolio_night"); 

let user = document.querySelector('#user'); 
let rocket = document.querySelector('#rocket_night'); 
let briefcase = document.querySelector('#portfolio_art')

user.classList.toggle('blue');