var next = document.getElementById("next");
var prev = document.getElementById("pre");
var item = document.getElementsByClassName("banner")[0];
var wrapper = document.getElementById("wrapper");
var index = 0;
var dots = document.getElementById("dots").getElementsByTagName("li");


next.onclick = function() {
    next_pic();
}
prev.onclick = function() {
    prev_pic();
}

function next_pic() {
    var newLeft = parseInt(item.style.left) - 200;
    if (newLeft === -1000) {
        newLeft = 0;
    }
    item.style.left = newLeft + "px";
    index++;
    if (index > dots.length - 1) {
        index = 0;
    }
    dotActive();
}

function prev_pic() {
    var newLeft = parseInt(item.style.left) + 200;
    if (newLeft === 200) {
        newLeft = -800;
    }
    item.style.left = newLeft + "px";
    index--;
    if (index < 0) {
        index = dots.length;
    }
}

var timer = null;

function autoPlay() {
    timer = setInterval(function() {
        next_pic();
    }, 3000);
}
autoPlay();
wrapper.onmouseover = function() {
    clearInterval(timer);
    prev.className = "";
    next.className = "";
}
wrapper.onmouseleave = function() {
    autoPlay();
    prev.className = "hidden";
    next.className = "hidden";
}



function dotActive() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].firstChild.className = "";
    }
    dots[index].firstChild.className = "active";
}

function manuChange() {
    for (let i = 0; i < dots.length; i++) {
        (function(i) {
            dots[i].firstChild.onclick = function() {
                var newLeft = i * (-200);
                item.style.left = newLeft + "px";
                index = i;
                dotActive();
            }
        })(i)
    }
}
manuChange();