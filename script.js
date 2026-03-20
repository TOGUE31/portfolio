// === Bouton menu ===
const btnMenu = document.querySelector('.btn-menu');
const navigation = document.querySelector('.navigation');
const itemsMenu = document.querySelectorAll('.menu-blocs a');
const ligne = document.querySelector('.ligne-cont');

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active');
    navigation.classList.toggle('menu-visible');
});

// Fermeture du menu au clic sur un lien (mobile)
itemsMenu.forEach(item => {
    item.addEventListener('click', () => {
        ligne.classList.remove('active');
        navigation.classList.remove('menu-visible');
    });
});

// === Animation Typewriter ===
const txtAnim = document.querySelector(".animation");
let writer = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20,
});

writer
    .pauseFor(1000)
    .changeDelay(30)
    .typeString("Salut ! C'est <strong>TOGUÈ</strong>")
    .pauseFor(500)
    .typeString(", je suis <br><strong>Développeur Full-Stack</strong>")
    .pauseFor(1000)
    .deleteChars(11)
    .typeString("<span style='color: #009688;'>FastAPI</span> (Python)")
    .pauseFor(1500)
    .deleteChars(16)
    .typeString("<span style='color: #41B883;'>Nuxt 4 / Vue 3</span>")
    .pauseFor(1500)
    .deleteChars(14)
    .typeString("<span style='color: #38BDF8;'>Tailwind CSS</span>")
    .pauseFor(1500)
    .deleteChars(12)
    .typeString("<span style='color: #F7DF1E;'>TypeScript</span>")
    .pauseFor(1500)
    .deleteChars(10)
    .typeString("<span style='color: #00758F;'>MySQL / SQL</span>")
    .pauseFor(2000)
    .start();

// === Générateur de citations ===
const citations = [
    "Le code est comme l'humour. Quand on doit l'expliquer, c'est qu'il est mauvais.",
    "La persévérance est la clé du succès, même quand le virement tarde.",
    "Un bon développeur ne s'arrête pas quand il est fatigué, mais quand il a fini le déploiement.",
    "Soit je gagne, soit j'apprends.",
    "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
    "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
    "Choisissez un travail que vous aimez, et vous n'aurez jamais à travailler un seul jour de votre vie."
];

const genereCitation = document.querySelector(".genere");
const newRessult = document.querySelector(".result");

newRessult.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    genereCitation.textContent = citations[randomIndex];
});

// === Animations GSAP et ScrollMagic ===
const controller = new ScrollMagic.Controller();

// Section Présentation
const presContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre1");
const presGauche = document.querySelector(".pres-gauche");
const listPres = document.querySelectorAll(".pres-droite li");

const tlPresentation = gsap.timeline();
tlPresentation
    .from(titrePres, { y: -100, opacity: 0, duration: 0.6 })
    .from(presGauche, { x: -50, opacity: 0, duration: 0.6 }, "-=0.3")
    .from(listPres, { y: 20, opacity: 0, stagger: 0.2 }, "-=0.3");

new ScrollMagic.Scene({
    triggerElement: presContainer,
    triggerHook: 0.7,
    reverse: false
})
    .setTween(tlPresentation)
    .addTo(controller);

// Section Portfolio
const portContainer = document.querySelector(".portfolio");
const itemPort = document.querySelectorAll(".vagues");

const tlPortfolio = gsap.timeline();
tlPortfolio
    .from(portContainer, { y: 50, opacity: 0, duration: 0.8 })
    .from(itemPort, { 
        y: 30, 
        opacity: 0, 
        stagger: 0.2, 
        duration: 0.5,
        clearProps: "all"
    }, "-=0.4");

new ScrollMagic.Scene({
    triggerElement: portContainer,
    triggerHook: 0.9,
    reverse: false
})
    .setTween(tlPortfolio)
    .addTo(controller);

// Section Compétences
const sectionComp = document.querySelector('.range');
const titreComp = document.querySelector('.titre3');
const allLabel = document.querySelectorAll('.skill');
const allPourcent = document.querySelectorAll('.number-skill');
const allBarres = document.querySelectorAll('.bare');
const allShadowBarres = document.querySelectorAll('.grises');

const tlCompetences = gsap.timeline();
tlCompetences
    .from(titreComp, { opacity: 0, duration: 0.6 })
    .from(allLabel, { y: -30, opacity: 0, stagger: 0.1 }, "-=0.4")
    .from(allPourcent, { opacity: 0, stagger: 0.1 }, "-=0.8")
    .from(allShadowBarres, { scaleX: 0, transformOrigin: "left", stagger: 0.1 }, "-=0.8")
    .from(allBarres, { scaleX: 0, transformOrigin: "left", stagger: 0.1 }, "-=0.8");

new ScrollMagic.Scene({
    triggerElement: sectionComp,
    triggerHook: 0.8,
    reverse: false
})
    .setTween(tlCompetences)
    .addTo(controller);

// === Contact via WhatsApp ===
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const prenom = document.querySelector('#prenom').value;
    const nom = document.querySelector('#nom').value;
    const message = document.querySelector('#txt').value;

    const fullMessage = `Bonjour TOGUÈ, je suis ${prenom} ${nom}.\n\nIntéressé par votre profil Full-Stack.\nMessage : ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const phoneNumber = '22656995313';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
});

// Effet de focus sur les champs du formulaire
const inputFields = document.querySelectorAll('.form-group input, .form-group textarea');

inputFields.forEach(field => {
    field.addEventListener('focus', () => {
        field.closest('.form-group').classList.add('has-content');
    });
    field.addEventListener('blur', () => {
        if (field.value.trim() === '') {
            field.closest('.form-group').classList.remove('has-content');
        }
    });
});
