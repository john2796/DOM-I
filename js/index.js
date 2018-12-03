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
const container = document.querySelector('.container');
const logo = document.getElementById("logo-img");
const ctaImg = document.querySelector('#cta-img');
const middleImg = document.querySelector('#middle-img');

const nav = document.querySelector('nav');


// images
logo.setAttribute('src', siteContent["nav"]["img-src"])
ctaImg.setAttribute('src', siteContent['cta']['img-src'])
middleImg.setAttribute('src', siteContent['main-content']['img-src'])

// nav
const service = document.createElement('a');
const product = document.createElement('a');
const vision = document.createElement('a');
const features = document.createElement('a');
const about = document.createElement('a');
const contact = document.createElement('a');
service.textContent = siteContent['nav']["nav-item-1"]
product.textContent = siteContent['nav']["nav-item-2"]
vision.textContent = siteContent['nav']["nav-item-3"]
features.textContent = siteContent['nav']["nav-item-4"]
about.textContent = siteContent['nav']["nav-item-5"]
contact.textContent = siteContent['nav']["nav-item-6"]

nav.prepend(service, product, vision, features, about, contact);
// const navItems = siteContent['nav'];
// for (let key in navItems) {
//   const element = navItems[key];
//   let anchor = document.createElement('a');
//   anchor.textContent = element;
//   nav.append(anchor);
// }



