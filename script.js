document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       INTRO
    ========================= */

    const intro = document.getElementById("intro");

    if (intro) {

        setTimeout(() => {

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";
                document.body.style.overflow = "auto";

            }, 1000);

        }, 5000);

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            const whatsappMessage =
                `Hello DRR Motorworks,

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}`;

            const whatsappURL =
                `https://wa.me/971553244144?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappURL, "_blank");

        });

    }

});