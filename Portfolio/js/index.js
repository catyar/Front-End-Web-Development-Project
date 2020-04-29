const navMenu =  document.getElementById('nav')
navMenu.addEventListener('click', menuShow)

function menuShow(){
    event.preventDefault();
    document.getElementById('nav').style.display="none"
    document.getElementById('menu').style.opacity="1"
    document.getElementById('menu').style.transform='translateX(0)'
}

const closeMenu = document.getElementById('close-menu-span')
closeMenu.addEventListener('click', menuClose)

function menuClose(){
    event.preventDefault();
    document.getElementById('menu').style.transform='translateX(100%)'
    document.getElementById('nav').style.display='flex'

}



const formContact = document.getElementById('contact-me-form')
formContact.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    // XHR.open('POST',"https://formspree.io/mjvabwwd", "_blank") --- could not figure out how to get form to both submit and run the below styling - does it need to be asynchronos? If so, how is that done?
    document.getElementById('thank-you').style.opacity="1"  
    document.getElementById('lname').value=""
    document.getElementById('fname').value=""
    document.getElementById('email').value=""
    document.getElementById('inquiry-type').value="job-opportunity"
    document.getElementById('message').value=""
    event.preventDefault()
}

// Same issue here where I was unable to run both "functions" at the same time - wanted to make the side menu close and bring user down to bottom of page if they click "Art Inquiries"
/*
const artHomePage = document.getElementById('scroll-to-bottom')
artHomePage.addEventListener('click', menuCloseArt)

function closeArt(){
    event.preventDefault()
    document.getElementById('menu').style.transform="translateX(100%)"
    document.getElementById('nav').style.display='flex'
    document.location="index.html#art-footer"
}
*/