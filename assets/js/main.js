/*================== SHOW MENU ====================*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')



/*================== MENU SHOW ====================*/

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

/*================== MENU HIDDEN ====================*/

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }


/*================== REMOVE MENU MOBILE ====================*/


    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        //When we click on each nav_link, we remove then show-menu class
        navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click',linkAction))


/*================== SHADOW HEADER ====================*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    //Wehen the scroll is greater then 50 viewport height, add the shadows-header class to the header tag
    this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)


/*================== EMAIL JS ====================*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_w63bom1','template_lfqu0km','#contact-form','NCKqS6acKY0X9YIwT')
    .then(() =>{
    //Show sent message
    contactMessage.textContent='Message sent successfully ✅'

    // Remove message after five seconds
    setTimeout(() =>{
        contactMessage.textContent=''
    }, 5000)

    //clear input fields

    contactForm.reset()
    }, () =>{
        //Show error meesage
        contactForm.textContent = ' Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)