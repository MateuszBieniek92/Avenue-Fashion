document.addEventListener("DOMContentLoaded", function () {


    // hover effect most-popular-section
    
    var ClothPlacingSmall = document.getElementsByClassName('cloth-placing-small');
    var ClothPlacingBig = document.getElementsByClassName('cloth-placing');

    function clothShadowHover(name) {
        for (var i = 0; i < name.length; i++) {
            name[i].onmouseover = function () {
                this.classList.add("cloth-hover-shadow");
            };
            name[i].onmouseleave = function () {
                this.classList.remove("cloth-hover-shadow");
            };
        }
    }

    clothShadowHover(ClothPlacingSmall);
    clothShadowHover(ClothPlacingBig);

});