let menuTablet = document.querySelector('.menu__media-tablet-block');

let menuIcon = document.querySelector('.menu__media-tablet');
menuIcon.addEventListener('click' ,() => {


    if(menuTablet.classList.contains('display-block')) {
        menuTablet.classList.remove('display-block');
    }   

    else {
        menuTablet.classList.add('display-block');
    }

    menuTablet.insertAdjacentHTML("beforeend", menu());

    menu = false;
});

 let menu = function() {
    return `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    `;
}









// window.onscroll = function() {
//     let menu = document.querySelector('.menu');

//     if(window.pageYOffset < 2000) {
//         menu.classList.add('menu__fixed');
//     }

//     else {
//         menu.classList.remove('menu__fixed');
//     }
//     console.log(window.pageYOffset)
// }




