/* =====================================================
   TYPING ANIMATION
===================================================== */

const roles = [

    "Web Developer",

    "AWS Student Builder Campus Leader",

    "Ex-GeeksforGeeks Campus Mantri",

    "Paytm Campus Ambassador",

    "Flyrank AI Frontend Engineering Intern",

    "Pinlo Digital Marketing Intern",

    "AWS Certified Prompt Engineer",

    "Trainer",

    "Digital Marketing Consultant"

];


const typingElement =
    document.getElementById("typing");


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;


            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 40 : 80
    );

}


typeEffect();



/* =====================================================
   PARTICLE BACKGROUND
===================================================== */

const particleContainer =
    document.getElementById(
        "particles"
    );


for (let i = 60; i > 0; i--) {

    const particle =
        document.createElement("div");


    particle.classList.add(
        "particle"
    );


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (
            Math.random() * 12 + 8
        ) + "s";


    particle.style.animationDelay =
        Math.random() * 10 + "s";


    particle.style.opacity =
        Math.random() * 0.5;


    particleContainer.appendChild(
        particle
    );

}



/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


menuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(
        "#navMenu a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formStatus =
    document.getElementById(
        "formStatus"
    );


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            !name ||
            !email ||
            !message
        ) {

            formStatus.textContent =
                "Please fill in all fields.";

            return;

        }


        const receiverEmail =
            "ssaadsaadsaad052@gmail.com";


        const subject =
            encodeURIComponent(
                "New Portfolio Message from " +
                name
            );


        const body =
            encodeURIComponent(

`Hello Saad,

You received a new message through your portfolio.

Name:
${name}

Email:
${email}

Message:
${message}

Regards,
${name}`

            );


        formStatus.textContent =
            "Opening your email application...";


        window.location.href =
            `mailto:${receiverEmail}` +
            `?subject=${subject}` +
            `&body=${body}`;


        contactForm.reset();

    }
);



/* =====================================================
   CURRENT YEAR
===================================================== */

document
    .getElementById("year")
    .textContent =
        new Date().getFullYear();



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(5,7,13,0.94)";

        } else {

            navbar.style.background =
                "rgba(5,7,13,0.72)";

        }

    }
);



/* =====================================================
   PROJECT CARD 3D EFFECT
===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    (
                        (y / rect.height) -
                        0.5
                    ) * -5;


                const rotateY =
                    (
                        (x / rect.width) -
                        0.5
                    ) * 5;


                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 150;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);
const galleryImages = [
    "01-event-poster-display.jpg",
    "02-good-economy-movement-event.jpg",
    "03-uef-trade-summit-event-poster.jpg",
    "04-conference-panel-session.jpg",
    "05-student-group-event-selfie.jpg",
    "06-student-networking-with-mentors.jpg",
    "07-professional-group-photo.jpg",
    "08-conference-stage-presentation.jpg",
    "09-conference-group-photo.jpg",
    "10-college-event-stage-session.jpg",
    "11-achievement-certificates.jpg",
    "12-event-stage-photo.jpg",
    "13-panel-discussion-event.jpg",
    "14-classroom-technical-session.jpg",
    "15-pendo-event-goodie.jpg",
    "16-united-economic-event.jpg",
    "17-campus-event-banner.jpg",
    "18-event-swag-and-merchandise.png",
    "19-aws-summit-bengaluru.jpg",
    "20-aws-summit-welcome-session.jpg",
    "21-aws-summit-main-stage.jpg",
    "22-aws-summit-speaker.jpg",
    "23-aws-summit-stage-session.jpg",
    "24-aws-summit-audience.jpg",
    "25-aws-summit-event-crowd.jpg",
    "26-next-unicorn-session.jpg",
    "27-aws-event-booth.jpg",
    "28-aws-summit-event-display.jpg",
    "29-aws-turn-ideas-into-impact.jpg",
    "30-aws-event-group-photo.jpg",
    "31-aws-event-lighting-and-stage.jpg",
    "32-aws-event-venue.jpg",
    "33-aws-event-entrance.jpg",
    "34-aws-event-display-wall.jpg",
    "35-aws-swag-collection.jpg",
    "36-top-campus-ambassador-feature.jpg",
    "37-event-merchandise-kit.png",
    "38-event-badges-and-materials.jpg",
    "39-prompt-engineering-workshop.jpg",
    "40-system-architecture-workshop.jpg",
    "41-project-demo-session.jpg",
    "42-build-apps-workshop.jpg",
    "43-technical-workshop-classroom.jpg",
    "44-student-presentation.jpg",
    "45-professional-portrait.jpg",
    "46-event-professional-portrait.jpg",
    "47-classroom-presentation.jpg",
    "48-classroom-presentation-wide.jpg",
    "49-technical-workshop-session.jpg",
    "50-technical-workshop-audience.jpg",
    "51-technical-workshop-classroom-wide.jpg",
    "52-classroom-teaching-session.jpg",
    "53-technical-presentation.jpg",
    "54-student-workshop-session.jpg",
    "55-student-outreach-discussion.jpg",
    "56-student-group-outreach.jpg",
    "57-campus-group-photo.jpg",
    "58-event-recognition-photo.jpg",
    "59-coding-workshop-presentation.jpg",
    "60-aws-branded-travel-mug.jpg",
    "61-aws-builder-community-qr-poster.png",
    "62-aws-builder-community-student-engagement.jpg",
    "63-aws-swag-distribution.jpg",
    "64-aws-builder-community-student-outreach.jpg",
    "65-aws-builder-community-group-engagement.jpg",
    "66-aws-builder-community-faculty-engagement.jpg",
    "67-aws-builder-community-swag-table.jpg",
    "68-aws-builder-community-campus-promotion.jpg",
    "69-aws-builder-community-campus-promotion-portrait.jpg",
    "70-professional-formal-portrait.png",
    "71-classroom-session-wide.jpg",
    "72-student-collaboration-discussion.jpg",
    "73-crescent-mega-demo-day-stage.jpg",
    "74-crescent-mega-demo-day-networking.jpg",
    "75-professional-photo-with-peer.jpg",
    "76-professional-full-body-photo.jpg",
    "77-cic-delegate-badge-and-goodie-bag.jpg",
    "78-mega-demo-day-networking-selfie.jpg",
    "79-mega-demo-day-delegate-session.jpg",
    "80-professional-portrait-at-mega-demo-day.jpg"
];

const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {
    galleryImages.forEach((image, index) => {

        const galleryItem = document.createElement("div");

        galleryItem.className = "gallery-item";

        galleryItem.innerHTML = `
    <span class="gallery-number">
        ${String(index + 1).padStart(2, "0")}
    </span>

    <img 
        src="images/${image}" 
        alt="Portfolio gallery photo ${index + 1}"
        loading="lazy"
    >
`;

        galleryGrid.appendChild(galleryItem);
    });
}