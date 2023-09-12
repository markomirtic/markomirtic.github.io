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



/*================== SHOW SCROLL UP ====================*/

const scrollUp = () =>{
    
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with scrollup class
    
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)



/*================== SHOW SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(currrent =>{
        const   sectionHeight = currrent.offsetHeight,
                sectionTop = currrent.offsetTop - 58,
                sectionId = currrent.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

                if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                    sectionClass.classList.add('active-link')
                }else{
                    sectionClass.classList.remove('active-link')
                }
    })
}
window.addEventListener('scroll',scrollActive)


/*================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previosly selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previosly chose a topic
if(selectedTheme){
    //If the calidation is fulfilled, we ask what the issue was to know if we activated od deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate/Deactivated the theme manually with the button
themeButton.addEventListener('click', () =>{
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        //We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon',getCurrentIcon())
})




/*================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: true //Animations repeat 
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`,{interval: 100})