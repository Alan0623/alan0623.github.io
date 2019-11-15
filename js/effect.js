$(document).ready(function() {
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Alan Lin"), 

//RWD輪播================================================================
    $('.autoplay3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.autoplay4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

});
//RWD輪播================================================================
function show_browse(){
//alert('dw wd');
jarallax = new Jarallax();
//jarallax.setDefault('h2,p', { display: 'none' });
jarallax.addAnimation('.react', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-100%" }]);
jarallax.addAnimation('.air-max-270-react-0JdRkV',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-80%" }]);
jarallax.addAnimation('.nike_air_max', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-20%" }]);
jarallax.addAnimation('.content_media_block_model', [{ progress: "0%", top: "300%" }, { progress: "100%", top: "-300%" }]); 
/*
jarallax.addAnimation('h1', [{ progress: "0", top: "50px", opacity: "1" }, { progress: "10", top: "0px", opacity: "0" }]);
jarallax.addAnimation('h2', [{ progress: "10", left: "-100%", display: 'block' },
                            { progress: "12", left: "50%", display: 'block'},
                            { progress: "24", left: "55%", }]);


jarallax.addAnimation('h2',[{ progress: "20", opacity: "1" },
                            { progress: "24", opacity: "0" }]);
jarallax.addAnimation('p', [{ progress: "23", opacity: "0", display: 'block'},
                            { progress: "25", opacity: "1", display: 'block' }, 
                            { progress: "27", opacity: "1", display: 'block' },
                            { progress: "28", opacity: "0"}]);*/

}

$(document).ready(function () {
    show_browse();

});