/*
  _________                                     .__
 /   _____/ ______   _____    _______    ______ |  |__
 \_____  \  \____ \  \__  \   \_  __ \  /  ___/ |  |  \
 /        \ |  |_> >  / __ \_  |  | \/  \___ \  |   Y  \
/_______  / |   __/  (____  /  |__|    /____  > |___|  /
        \/  |__|          \/                \/       \/
*/

var slideIndex = 1;
var heightIndex = 0;

function start() {
    var upperbox = document.getElementById("upperbox");
    var lowerbox = document.getElementById("lowerbox");
    document.getElementById("start").style.display = "none";
    upperbox.classList.add("upperbox");
    lowerbox.classList.add("lowerbox");
    if (heightIndex > 0) { about(); }
    if (heightIndex < 0) { moreinfo(); }
    currentSlide(1);
    setTimeout("display()", 500);
}

function display() {
    document.getElementById("upperbox").style.display = "none";
    document.getElementById("lowerbox").style.display = "none";
    main();
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    var slides = document.getElementsByClassName("mySlides");
    if (n == 1) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("faderight");
            setTimeout("removeright()", 200)
        }
    }
    if (n == -1) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("fadeleft");
            setTimeout("removeleft()", 200)
        }
    }
}

function moreinfo() {
    var infos = document.getElementsByClassName("down");
    var simg = document.getElementsByClassName("simg");
    var shiftup = document.getElementsByClassName("shiftup");
    var bottomup = document.getElementsByClassName("bottomup");
    var mq = window.matchMedia("(max-width: 480px)");
    var updown = document.getElementsByClassName("updown");
    var i;
    if (heightIndex == -1) {
        document.getElementById("aboutme").style.display = "none";
        heightIndex = 0;
        for (i = 0; i < simg.length; i++) {
            simg[i].style.filter = "none";
        }
    }
    else {
        for (i = 0; i < simg.length; i++) {
            infos[i].style.display = "inline-block";
            shiftup[i].style.paddingTop = "3vw";
            bottomup[i].style.transform = "rotate(180deg)";
            bottomup[i].style.bottom = "60vh";
            bottomup[i].setAttribute("onclick", "about()");
            if (mq.matches) {
                updown[i].style.display = "none";
            }
            document.getElementById("arrows").style.bottom = "47%";
        }
        if (mq.matches) {
            document.getElementById("arrows").style.bottom = "64%";
            document.getElementById("arrows").style.right = "4%";
        }
        heightIndex = 1;
    }
}

function about() {
    var infos = document.getElementsByClassName("down");
    var simg = document.getElementsByClassName("simg");
    var shiftup = document.getElementsByClassName("shiftup");
    var mq = window.matchMedia("(max-width: 480px)");
    var bottomup = document.getElementsByClassName("bottomup");
    var updown = document.getElementsByClassName("updown");
    var i;
    if (heightIndex == 1) {
        for (i = 0; i < simg.length; i++) {
            infos[i].style.display = "none";
            shiftup[i].style.paddingTop = "30vh";
            bottomup[i].style.transform = "none";
            bottomup[i].style.bottom = "5vh";
            bottomup[i].setAttribute("onclick", "moreinfo()");
            if (mq.matches) {
                updown[i].style.display = "inline-block";
            }
        }
        document.getElementById("arrows").style.bottom = "6%";
        if (mq.matches) {
            document.getElementById("arrows").style.bottom = "3%";
            document.getElementById("arrows").style.right = "38%";
        }
        heightIndex = 0;
    }
    else {
        document.getElementById("aboutme").style.display = "inline-block";
        heightIndex = -1;
        for (i = 0; i < simg.length; i++) {
            simg[i].style.filter = "blur(3px)";
        }
    }
}

function removeright() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("faderight");
    }
}

function removeleft() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fadeleft");
    }
}

function arrowkeys(n) {
    var arrows = document.getElementsByClassName("arrowkeys");
    arrows[n].classList.add("illuminate");
    setTimeout("setblinkFont()", 200)
}
function setblinkFont() {
    var i;
    var arrows = document.getElementsByClassName("arrowkeys");
    for (i = 0; i < arrows.length; i++) {
        arrows[i].classList.remove("illuminate");
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "inline";
    for (i = 0; i < dots.length; i += slides.length) {
        dots[slideIndex + i - 1].className += " active";
    }
}

