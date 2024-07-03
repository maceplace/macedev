const resources = {
    en: {
        translation: {
            "Hero Welcome": "Greetings!",
            "Hero description": "My name is Ilya Bulava and i am...<ul><li>Indie game developer 🎮</li><li>Certified programmer 💻</li><li>Aspiring composer 🎵</li><li>Pixel Artist 🎨</li></ul>",

            "Section Projects": "My best projects:",
            "Section Music": "Music that I've made:",
            "Other Projects": "Old projects",

            "Contact": "Contact me",
            "Footer-Copyright": "© 2018-2034 Mace Studios. All rights reserved."
        }
    },
    ru: {
        translation: {
            "Hero Welcome": "Привет!",
            "Hero description": "Меня зовут Илья Булава и я...<ul><li>Инди разработчик игр 🎮</li><li>Дипломированный программист 💻</li><li>Начинающий композитор 🎵</li><li>Художник в пиксель-арте 🎨</li></ul>",

            "Section Projects": "Мои лучшие проекты:",
            "Section Music": "Музыка, которую я написал:",
            "Other Projects": "Старые проекты",

            "Contact": "Связаться со мной",
            "Footer-Copyright": "© 2018-2034 Mace Studios. Все права защищены."
        }
    }
};

i18next.use(i18nextBrowserLanguageDetector).init({
    resources,
    fallbackLng: 'en',
    debug: false
}, function(err, t) {
    if (err) return console.error(err);
    updateContent();
});

function updateContent() {
    document.getElementById('hero-heading').innerText = i18next.t('Hero Welcome');
    document.getElementById('hero-me-desc').innerHTML = i18next.t('Hero description');
    document.getElementById('Section-Projects').innerText = i18next.t('Section Projects');
    document.getElementById('Section-Music').innerText = i18next.t('Section Music');
    document.getElementById('Section-OtherProjects').innerText = i18next.t('Other Projects');
    document.getElementById('Section-Contact').innerText = i18next.t('Contact');
    document.getElementById('Footer-Copyright').innerText = i18next.t('Footer-Copyright');
}