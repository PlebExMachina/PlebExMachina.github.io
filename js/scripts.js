window.onscroll = function(){
    const rightGears = document.querySelectorAll(".spinRight");
    const leftGears = document.querySelectorAll(".spinLeft");
    if((rightGears.length > 0) || (leftGears.length > 0)){
        rotateGear = function(gear, deg) {
            gear.style.webkitTransform = 'rotate('+deg+'deg)'; 
            gear.style.mozTransform    = 'rotate('+deg+'deg)'; 
            gear.style.msTransform     = 'rotate('+deg+'deg)'; 
            gear.style.oTransform      = 'rotate('+deg+'deg)'; 
            gear.style.transform       = 'rotate('+deg+'deg)';
        };

        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        rightGears.forEach((gear) => {
            rotateGear(gear,scrollPosition);
        });

        leftGears.forEach((gear) => {
            rotateGear(gear,scrollPosition*-1);
        });
    }
}