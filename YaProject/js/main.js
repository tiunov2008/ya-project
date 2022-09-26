'use strict'
document.addEventListener('DOMContentLoaded' , () => {
    let clicked;
    document.addEventListener('click',event=>{
        if (event.target.classList.contains('certificates-list_img')) {
            clicked = event.target;
            clicked.parentNode.querySelector('.pop-up').style.display = 'flex';
            document.querySelector('.pop-up-shadow').style.display = 'block';
        }else if(clicked){
            clicked.parentNode.querySelector('.pop-up').style.display = 'none';
            document.querySelector('.pop-up-shadow').style.display = 'none';
        }
    });
});