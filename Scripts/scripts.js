const navMenu = document.querySelector('.nav-menu')
const navToggle =document.querySelector('.nav-toggle')
const navClose = document.querySelector('.nav-close')

navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})


const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
  const navMenu = document.querySelector('.nav-menu')
  navMenu.classList.remove('show-menu')
}


navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () => {
  const header = document.querySelector('.header')

  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}

window.addEventListener('scroll',  blurHeader)



const contactForm = document.getElementById('contact-form');
const contactMessage =document.getElementById('contact-message');

const sendEmail = (e) =>{
  e.preventDefault()

  // service ID -  templateID -#form -publickey
  emailjs.sendForm('service_ozbw3ao', 'template_aw8tmsr', '#contact-form', 'j6IdfEJ7aPSKOQs_U')
        .then(() =>{
          contactMessage.textContent = 'Message Sent Successfully'

          setTimeout(() =>{
            contactMessage.textContent = ''
          }, 5000)

          contactForm.reset()
        })
};

contactForm.addEventListener('submit', sendEmail);


const scrollUp = () => {
  const scrollUp = document.querySelector('.scroll-up')
  this.scrollY >= 350 ?scrollUp.classList.add('show-scroll')
                      :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)




const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight =current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass =document.querySelector('.nav-menu a[href*=' + sectionId + ']');

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          } else{
            sectionsClass.classList.remove('active-link')
          }
  })
}

window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset:true // animations repeat
})

sr.reveal('.home-data, .experience, .skill, .contact-container')
sr.reveal('.home-img', {delay:600})
sr.reveal('.home-scroll', {delay:800})
sr.reveal('.project-card', {interval:100})
sr.reveal('.about-content', {origin: 'right'}, {delay: 1000})
sr.reveal('.about-img', {origin: 'left'}, {delay: 1000})