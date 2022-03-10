document.querySelector('#form_message').addEventListener('submit', e => {
    e.preventDefault();
    if(!document.getElementsByName("name")[0].value.match(/[a-zа-яё]/ig)) {
        document.getElementsByName("name")[0].classList.toggle("redBorder");   
    }
    if(!document.getElementsByName("phone")[0].value.match(/^\+[7]{1}\([\d]{3}\)[\d]{3}-[\d]{4}$/i)) {
        document.getElementsByName("phone")[0].classList.toggle("redBorder");   
    }
    if(!document.getElementsByName("email")[0].value.match(/^[a-z0-9\._-]+@[a-z0-9\._-]+\.[a-z]{2,4}$/i)) {
        document.getElementsByName("email")[0].classList.toggle("redBorder");   
    }
})