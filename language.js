document.addEventListener('DOMContentLoaded', function() {
    console.log("IDIOMA")

    let currentLanguage = document.documentElement.getAttribute('lang');
    setLanguage(currentLanguage);

    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        currentLanguage = this.value;
        console.log(currentLanguage);
        setLanguage(currentLanguage);
    });

});

function setLanguage(lang) {
    fetch(`/language_${lang}.json`)
        .then(response => response.json())
        .then(data => translatePage(data));
}

function translatePage(translations) {
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');

    elementsToTranslate.forEach(element => {
        const key = element.dataset.translateKey;
        if (key && translations[key]) {
            element.textContent = translations[key];
        }
    });
}