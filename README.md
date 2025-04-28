# Ubud Serenity Bungalows Theme Documentation

Welcome to the Ubud Serenity Bungalows theme documentation. This guide will help you customize various parts of the theme to suit your specific needs.

## Table of Contents

1. [Introduction](#introduction)
2. [File Structure](#file-structure)
3. [Customizing HTML](#customizing-html)
    - [Modifying Contact Information](#modifying-contact-information)
    - [Modifying Social Media Links](#modifying-social-media-links)
4. [Customizing CSS](#customizing-css)
    - [Modifying Colors](#modifying-colors)
    - [Modifying Fonts](#modifying-fonts)
5. [Customizing JavaScript](#customizing-javascript)

## Introduction

Welcome to the Ubud Serenity Bungalows theme documentation. This guide will help you customize various parts of the theme to suit your specific needs.

## File Structure

The theme consists of the following files:

- **HTML**: `index.html`, `booking.html`
- **CSS**: `css/style.css`, `css/components/navbar.css`, `css/components/hero.css`, `css/components/accommodations.css`, `css/components/common-spaces.css`, `css/components/what-to-see.css`, `css/components/book-button.css`, `css/components/footer.css`
- **JavaScript**: `js/carousel.js`

## Customizing HTML

### Modifying Contact Information

To update the contact information, modify the following sections in `index.html` and `booking.html`:

Update the address in the <div class="find-us__address"> 
<div class="find-us__address">
    <h3>Our Location in Ubud, Bali</h3>
    <p>[Your Full Address]</p>
    <p>Immerse yourself in the cultural heart of Bali, surrounded by lush greenery and spiritual energy.</p>
    <a href="https://www.google.com/maps/place/[your-google-maps-link]" target="_blank" class="button button--secondary">Get Directions</a>
</div>
R
eplace +33689245324 with your WhatsApp phone number in the WhatsApp links:
<a href="https://wa.me/YOUR_PHONE_NUMBER" class="button button--whatsapp"><i class="fab fa-whatsapp"></i> Ask Us Anything</>

Modifying Social Media Links
To update the social media links, modify the following section in index.html and booking.html, you'll have to create an html for these two links. 

Copy
<footer class="footer">
    <div class="footer__content">
        <p>&copy; 2025 Ubud Serenity Bungalows. All rights reserved.</p>
        <ul class="footer__links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
    </div>
</footer>

Customizing CSS

Modifying Colors
To change the colors, update the following CSS files:

/* css/style.css */
body {
    font-family: Arial, sans-serif;
    color: #333; /* Main text color */
}

/* css/components/navbar.css */
.navbar {
    background-color: #fff; /* Navbar background color */
    color: #333; /* Navbar text color */
}

.navbar__nav ul li a {
    color: #555; /* Navigation link color */
}

.navbar__nav ul li a\:hover {
    color: #25D366; /* Navigation link hover color */
}

/* css/components/footer.css */
.footer {
    background-color: #333; /* Footer background color */
    color: #eee; /* Footer text color */
}

.footer__links ul li a {
    color: #eee; /* Footer link color */
}

.footer__links ul li a\:hover {
    color: #fff; /* Footer link hover color */
}

Modifying Fonts
To change the fonts, update the font-family property in the css/style.css file:

/* css/style.css */
body {
    font-family: 'Your Custom Font', Arial, sans-serif; /* Replace with your custom font */
}

Customizing JavaScript
The theme includes a carousel script in js/carousel.js. You can customize the carousel behavior by modifying this file:

// js/carousel.js
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        let currentIndex = 0;

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : track.children.length - 1;
            updateCarousel(track, currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < track.children.length - 1) ? currentIndex + 1 : 0;
            updateCarousel(track, currentIndex);
        });

        function updateCarousel(track, index) {
            const translateX = index * -100;
            track.style.transform = `translateX(${translateX}%)`;
        }
    });
});

Modifying Images
To update the images used throughout the theme, you will need to locate the corresponding HTML files (index.html, booking.html) and potentially the CSS file (css/style.css or component-specific CSS files) where the image URLs are defined.

In HTML:

Look for <img> tags and the src attribute. The src attribute contains the path or URL to the image file.

HTML:
<img src="images/your-image.jpg" alt="Description of the image">
To change the image, replace the value of the src attribute with the path or URL to your new image file.

In CSS:
Some images might be used as background images in CSS rules. Look for the background-image property:

.hero {
    background-image: url('../images/hero-background.jpg');
}
To change these images, update the URL within the url() function.

Important Considerations:

File Paths: Ensure that the new image file paths in your HTML and CSS are correct relative to the location of your HTML and CSS files.

Image Dimensions: Consider the original dimensions of the images you are replacing and ensure that your new images are appropriately sized for the layout to avoid distortion or layout issues. You might need to adjust CSS styles if the dimensions of your new images are significantly different.
Image Optimization: For better website performance, make sure your new images are optimized (compressed) for the web.
By following these guidelines, you can easily replace the default images with your own visuals to personalize the Ubud Serenity Bungalows theme.

Conclusion
This documentation provides clear instructions for customizing the Ubud Serenity Bungalows theme. If you have any further questions or need additional assistance, please feel free to reach out.