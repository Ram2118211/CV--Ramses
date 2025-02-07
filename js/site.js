function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos'); // Si es una clase
    // var button = document.querySelector('#gg-menu-oreos'); // Si es un id
    button.classList.toggle('gg-close');

    var menu = document.getElementsByClassName('js-menu');
    if (menu.length > 0) {
        menu[0].classList.toggle("active");
    }
}


window.addEventListener("scroll", fixPhotoInScroll, false);

function showImage(image) {
    var newImage = document.createElement('img');
    newImage.src=image.src;
    newImage.removeAttribute('onclick');
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    var existinImage= modal.querySelector('img');
    if(existinImage)
    {
        modal.removeChild(existinImage);
    }
    modal.appendChild(newImage);
}

function cerrarModal() {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal'); 
}