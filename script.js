// === Bouton menu ===
const btnMenu = document.querySelector('.btn-menu');
const navigation = document.querySelector('.navigation');
const itemsMenu = document.querySelectorAll('.menu-blocs a');
const ligne = document.querySelector('.ligne-cont');

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active');
    navigation.classList.toggle('menu-visible');
});

if (window.matchMedia('(max-width: 1200px)').matches) {
    itemsMenu.forEach(item => {
        item.addEventListener('click', () => {
            ligne.classList.remove('active');
            navigation.classList.remove('menu-visible');
        });
    });
}

// === Animation Typewriter ===
const txtAnim = document.querySelector(".animation");
let writer = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20,
});

writer
    .pauseFor(1800)
    .changeDelay(20)
    .typeString("Salut! c'est <strong>TOGUÈ</strong>, je suis ")
    .pauseFor(500)
    .typeString("<strong>Développeur Full-Stack</strong> !")
    .pauseFor(1500)
    .deleteChars(12)
    .typeString("<span style='color: red;'>HTML</span> !")
    .pauseFor(1500)
    .deleteChars(6)
    .typeString("<span style='color: green;'>CSS</span> !")
    .pauseFor(1500)
    .deleteChars(5)
    .typeString("<span style='color: yellow;'>JavaScript</span> !")
    .pauseFor(1500)
    .deleteChars(12)
    .typeString("<span style='color: blue;'>SQL</span> !")
    .pauseFor(1500)
    .deleteChars(5)
    .typeString("<span style='color: lightskyblue;'>React</span> !")
    .pauseFor(5000)
    .start();

// === Générateur de citations ===

const citations = [
    "Le succès est la somme de petits efforts répétés jours après jours",
    "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
    "Le bonheur n'est pas quelque chose que vous reportez à plus tard, c'est quelque chose que vous concevez pour le présent.",
    "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu'un d'autre.",
    "Vis ta vie de telle sorte que tes actions soient compatibles avec la permanence d'une vie authentiquement humaine sur Terre.",
    "Celui qui a un pourquoi pour vivre peut supporter n'importe quel comment.",
    "Choisissez un travail que vous aimez, et vous n'aurez jamais à travailler un seul jour de votre vie.",
    "Le temps est un voleur. Il emporte tout ce que nous avons.",
    "Je ne perds jamais. Soit je gagne, soit j'apprends.",
    "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux."
];

const genereCitation = document.querySelector(".genere");
const newRessult = document.querySelector(".result");

newRessult.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    genereCitation.textContent = citations[randomIndex];
});

// === Animation de formulaire ===

const inputFields = document.querySelectorAll("input, textarea");

inputFields.forEach(field => {
    field.addEventListener("input", (e) => {
        const parent = e.target.closest("label");
        if (e.target.value !== "" && parent) {
            parent.classList.add("animation");
        } else if (parent) {
            parent.classList.remove("animation");
        }
    });
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
    .from(titrePres, { y: -200, opacity: 0, duration: 0.8 })
    .from(presGauche, { x: -50, opacity: 0, duration: 0.8 }, "-=0.5")
    .from(listPres, { y: 20, opacity: 0, stagger: 0.2 }, "-=0.5");

new ScrollMagic.Scene({
    triggerElement: presContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(tlPresentation)
    .addTo(controller);

// Section Portfolio

const portContainer = document.querySelector(".portfolio");
const itemPort = document.querySelectorAll(".vagues");

const tlPortfolio = gsap.timeline();
tlPortfolio
    .from(portContainer, { y: 50, opacity: 0, duration: 1 })
    .from(itemPort, { y: 30, opacity: 0, stagger: 0.3 });

 const scene1 = new ScrollMagic.Scene({
    triggerElement: portContainer,
    triggerHook: 1,
    reverse: false
})
    .setTween(tlPortfolio)
    .addTo(controller);


// Section Compétences

         const sectionComp = document.querySelector('.range')
     const titreComp = document.querySelector('.titre3')
     const allLabel = document.querySelectorAll('.skill')
     const allPourcent = document.querySelectorAll('.number-skill')
     const allBarres = document.querySelectorAll('.bare')
     const allShadowBarres = document.querySelectorAll('.grises')

     const tlCompetences = new TimelineMax();
     
     tlCompetences
     .from(titreComp, {opacity: 0, duration: 0.6})
     .staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
     .staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
     .staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
     .staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')

     const scene7 = new ScrollMagic.Scene({
        triggerElement: sectionComp,
        reverse: false
     })
     .setTween(tlCompetences)
     .addTo(controller);