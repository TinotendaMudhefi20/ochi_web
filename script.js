// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    // Close the menu when a navigation link is clicked

    document.querySelectorAll("#navMenu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


// =========================================
// WHATSAPP BOOKING / ENQUIRY FORM
// =========================================

// This will be used when we add a form
// with id="bookingForm" on another page.

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Ochi Safari Lodge WhatsApp number

        const whatsappNumber = "263772401663";


        // Get form values

        const customerName =
            document.getElementById("customerName").value.trim();

        const customerPhone =
            document.getElementById("customerPhone").value.trim();

        const checkIn =
            document.getElementById("checkIn").value;

        const checkOut =
            document.getElementById("checkOut").value;

        const guests =
            document.getElementById("guests").value;

        const message =
            document.getElementById("message").value.trim();


        // Create the WhatsApp message

        const whatsappMessage = `
Hello Ochi Safari Lodge,

I would like to make an accommodation enquiry.

*Guest Details*

Name: ${customerName}
Phone: ${customerPhone}

*Booking Details*

Check-in: ${checkIn}
Check-out: ${checkOut}
Number of Guests: ${guests}

*Additional Message*

${message || "No additional message."}

Thank you.
        `;


        // Encode message

        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        // Create WhatsApp URL

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        // Open WhatsApp

        window.open(whatsappURL, "_blank");

    });

}