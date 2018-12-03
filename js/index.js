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
})

// append

const nav = document.querySelector('nav a');
const home = document.createElement('a');
home.textContent = 'Home';
home.style.margin = '0 35px 0 0';
nav.prepend(home);


// cta 
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];
//cta btn 

let btn = document.querySelector('.cta .cta-text button');
btn.textContent = siteContent['cta']['button']
//cta image
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['img-src']);

// main-content 
let mainHeaders = document.querySelectorAll(".text-content h4");
mainHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainParagraphs = document.querySelectorAll(".text-content p");
mainParagraphs[0].innerHTML = siteContent["main-content"]["features-content"];
mainParagraphs[1].innerHTML = siteContent["main-content"]["about-content"];
mainParagraphs[2].innerHTML = siteContent["main-content"]["services-content"];
mainParagraphs[3].innerHTML = siteContent["main-content"]["product-content"];
mainParagraphs[4].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelectorAll(".contact p");
contactAddress[0].innerHTML = siteContent["contact"]["address"];
contactAddress[1].innerHTML = siteContent["contact"]["phone"];
contactAddress[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];


