document.addEventListener('DOMContentLoaded', function() {

    // submenu in HEADER
    var li = document.querySelector('.main_menu').children[0]; //li : about us
    var submenu = document.querySelector('.submenu'); //submenu

    li.addEventListener('mouseover', function(e) { //add event handler to change visibility from hidden to visible
        setTimeout(function() {
            submenu.style.visibility = 'visible';
        }, 500);


    });
    li.addEventListener('mouseout', function(e) { //add event handler to change visibility from visible to hidden
        submenu.style.visibility = 'hidden';

    });

    // changing visibiliy of picture captions in s. 2

    var smallBoxes = document.querySelectorAll('.small_box');



    for (var i = 0; i < 2; i++) {

        smallBoxes[i].addEventListener('mouseover', function(e) {
            var div = this.children[0];
            div.style.display = 'none';
            this.style.boxShadow = '0px 0px 10px 0px rgba(36,33,36,1)';

        });
    }
    for (var i = 0; i < 2; i++) {

        smallBoxes[i].addEventListener('mouseout', function(e) {
            var div = this.children[0];
            div.style.display = 'block';
            this.style.boxShadow = '';

        });
    }
    //last box, only box-shadow styling
    smallBoxes[2].addEventListener('mouseover', function(e) {
        this.style.boxShadow = '0px 0px 10px 0px rgba(36,33,36,1)';

    });
    smallBoxes[2].addEventListener('mouseout', function(e) {
        this.style.boxShadow = '';

    });





});
