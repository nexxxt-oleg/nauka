function setEqualHeight(elements) {
    var mainDivs = document.getElementsByClassName(elements);
    var maxHeight = 0;
    for (var i = 0; i < mainDivs.length; ++i) {
        if (maxHeight < mainDivs[i].clientHeight) {
            maxHeight = mainDivs[i].clientHeight;
        }
    }
    for (var i = 0; i < mainDivs.length; ++i) {
        mainDivs[i].style.height = maxHeight + "px";
    }
}

new LazyLoad;
if (window.screen.width > 768) {
    AOS.init();

    new Rellax('.rellax');
}

var player;

function onYouTubePlayerAPIReady() {

    player = new YT.Player("video", {
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function () {
        player.playVideo();
        document.getElementById("wrap-video").remove();
    });
}

var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.addEventListener("DOMContentLoaded", function (event) {



    new Swiper('#sliderRew', {
        speed: 400,
        spaceBetween: 70,
        pagination: {
            el: '#paginationRew',
            clickable: true,
        },
        navigation: {
            nextEl: '#sliderRew .swiper-button-next',
            prevEl: '#sliderRew .swiper-button-prev',
        },
        on: {
            init: function () {
                setEqualHeight('science__rew__slider__item');
            },
        },
    });

    new Swiper('#sliderBay', {
        speed: 400,
        spaceBetween: 70,
        pagination: {
            el: '#paginationBay',
            clickable: true,
        },
        navigation: {
            nextEl: '#sliderBay .swiper-button-next',
            prevEl: '#sliderBay .swiper-button-prev',
        },
        preloadImages: false,
        // Enable lazy loading
        lazy: {
            loadPrevNext: true,
        },
    });

});