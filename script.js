var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function(details){
    
    var rectangleLocation = rect.getBoundingClientRect();
console.log(details);
    var insideRectVal = details.clientX - rectangleLocation.left;

    if(insideRectVal < rectangleLocation.width/2){
        var red = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${red}, 0, 0)`,
            ease: Power4,
        });
    }
    else{
        var blue = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blue})`,
            ease: Power4,
        });
    }
});

rect.addEventListener('mouseleave', function(){
    gsap.to(rect, {
        backgroundColor: "white",
    });
});

