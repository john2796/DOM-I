const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "img-src": "img/mid-page-accent.jpg"
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");



// images
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i + 1}`];
  link.addEventListener('click', () => (link.style.color = "green"))
})

// append

const nav = document.querySelector('nav');
const home = document.createElement('a');
home.textContent = 'Home';
home.style.color = 'red';
nav.prepend(home);


// cta 
const ctaText = document.querySelector(".cta-text h1"); 1
ctaText.textContent = siteContent["cta"]["h1"];
//cta btn 

let btn = document.querySelector('.cta .cta-text button');
btn.textContent = siteContent['cta']['button']
btn.addEventListener('click', () => {
  alert('You Clicked !!!')
})
//cta image
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['img-src']);


// main-content heading 4
let h4 = document.querySelectorAll(".main-content h4");
let mainContentArray = ["features", "about", "services", "product", "vision"];
for (let i = 0; i < mainContentArray.length; i++) {
  h4[i].textContent = siteContent["main-content"][`${mainContentArray[i]}-h4`];
}
// p 
let p = document.querySelectorAll(".main-content p");
let paragraphArr = ["features", "about", "services", "product", "vision"];
for (let i = 0; i < paragraphArr.length; i++) {
  p[i].textContent = siteContent["main-content"][`${paragraphArr[i]}-content`];
}

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];


let contactAddress = document.querySelectorAll(".contact p");
let contactp = ["address", "phone", "email"];
for (let i = 0; i < contactp.length; i++) {
  contactAddress[i].textContent = siteContent["contact"][`${contactp[i]}`];
}

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];


// events
