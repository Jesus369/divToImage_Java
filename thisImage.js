// Replacing a div with an image

let advertisement = document.getElementById('adDiv')   // Setting a div within the HTML body to a "let"
let createdImage = document.createElement('IMG');     //  Create an "IMG" element and set this to a "let"

createdImage.id = "id"    // give it an id?
createdImage.className = "adImage"  // give it a class. This class can be styled within a css file
// link the createdImage to a src(in this case an image src to display an image)
createdImage.src = "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2017/11/08/black-friday-2017-deals-ads-best-buy-sales-iphone-4k-tv-ipad-xbox-one-nintendo-switch.png"
advertisement.appendChild(createdImage) // from "advertisement" append "createImage"

// in replacement of what once was a div called "advertisement" is now the image you wish to display
