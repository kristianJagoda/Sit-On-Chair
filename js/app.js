document.addEventListener('DOMContentLoaded', function() {

    // submenu in HEADER
    (function() {

        var li = document.querySelector('.main_menu').children[0]; //li : about us
        var submenu = document.querySelector('.submenu'); //submenu

        li.addEventListener('mouseover', function(e) { //add event handler to change visibility from hidden to visible
            submenu.style.visibility = 'visible';


        });
        li.addEventListener('mouseout', function(e) { //add event handler to change visibility from visible to hidden
            submenu.style.visibility = 'hidden';

        });
    })();



    // changing visibiliy of picture captions in s. 2
    (function() {

        var smallBoxes = document.querySelectorAll('.small_box');

        for (var i = 0; i < 2; i++) {

            smallBoxes[i].addEventListener('mouseover', function(e) {
                var div = this.children[0];
                div.style.display = 'none';
                this.style.boxShadow = '0px 0px 10px 0px rgba(36,33,36,1)';

            });
        }
        for (i = 0; i < 2; i++) {

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
    })();



    //Slider
    (function() {
        var slider = document.querySelector('.slider');

        var arrow1 = document.querySelector('.arrow1');
        var arrow2 = document.querySelector('.arrow2');

        var lis = slider.querySelectorAll('ul>li');
        var index = 0;
        lis[index].classList.add('visible');


        arrow2.addEventListener('click', function() {
            lis[index].classList.remove('visible');
            index++;
            if (index > lis.length - 1) {
                index = 0;
            }
            lis[index].classList.add('visible');
        });

        arrow1.addEventListener('click', function() {
            lis[index].classList.remove('visible');
            index--;
            if (index < 0) {
                index = lis.length - 1;
            }
            lis[index].classList.add('visible');
        });
    })();

    (function() {
        // Setting transportation costs first (if client wishes)

        var transport = document.querySelector('#transport');
        var transportPrice = transport.dataset.transportPrice;
        var transportBox = document.querySelector('.panel_left .transport');
        var transportPriceBox = document.querySelector('.panel_right .transport');

        transport.addEventListener('change', function(e) {
            var label = this.parentElement.firstElementChild;

            if (transport.checked) {
                label.setAttribute('class', 'active');
                transportBox.innerText = 'Delivery';
                transportPriceBox.innerText = '£' + transportPrice;
            } else {
                label.removeAttribute('class', 'active');
                transportBox.innerText = '';
                transportPriceBox.innerText = ''; 
            }

        });


        // Drop down menus - selecting elements of a chair and calculating the price

        var arrows = document.querySelectorAll('.list_arrow');

        for (var i = 0; i < arrows.length; i++) {
            arrows[i].addEventListener('click', function(e) { //add event click on every arrow

                var ul = this.nextElementSibling;
                var listEls = ul.querySelectorAll('li');

                ul.style.display = 'block';


                for (var i = 0; i < listEls.length; i++) {

                    listEls[i].addEventListener('click', function(e) { //add event click on li-s
                        var span = this.parentElement.parentElement.firstElementChild;
                        span.innerText = this.innerText;
                        span.style.color = '#000';
                        this.parentElement.style.display = 'none';


                        var text = this.innerText; //get innerText from li and assign it to a variable text
                        var title = document.querySelector('.panel_left .title');
                        var titlePrice = document.querySelector('.panel_right .title');
                        var color = document.querySelector('.panel_left .color');
                        var colorPrice = document.querySelector('.panel_right .color');
                        var pattern = document.querySelector('.panel_left .pattern');
                        var patternPrice = document.querySelector('.panel_right .pattern');


                        //if one of the conditions below is met -> show text in the calculator area for the user

                        if (text == 'Margharita' || text == 'Clair' || text == 'Selena') {
                            title.innerText = text;

                            if (text == 'Margharita') {
                                titlePrice.innerText = '£200';

                            } else if (text == 'Clair') {
                                titlePrice.innerText = '£150';

                            } else if (text == 'Selena') {
                                titlePrice.innerText = '£100';
                            }

                        } else if (text == 'Red' || text == 'Black' || text == 'Orange') {
                            color.innerText = text;
                            colorPrice.innerText = '£0';

                        } else if (text == 'Fabric' || text == 'Leather') {
                            pattern.innerText = text;

                            if (text == 'Fabric') {
                                patternPrice.innerText = '£0';

                            } else if (text == 'Leather') {
                                patternPrice.innerText = '£50';
                            }
                        }





                    });
                }


            });

        }

    })();



});
