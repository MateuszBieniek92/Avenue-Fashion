document.addEventListener("DOMContentLoaded", function () {


    // hover effect most__popular__section
    
    var ClothPlacingSmall = document.getElementsByClassName('cloth__placing__small');
    var ClothPlacingBig = document.getElementsByClassName('cloth__placing');

    function clothShadowHover(name) {
        for (var i = 0; i < name.length; i++) {
            name[i].onmouseover = function () {
                this.classList.add("cloth__hover__shadow");
            };
            name[i].onmouseleave = function () {
                this.classList.remove("cloth__hover__shadow");
            };
        }
    }

    clothShadowHover(ClothPlacingSmall);
    clothShadowHover(ClothPlacingBig);

});