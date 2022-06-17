class Switches {
    constructor() {

    }

    setTheme() {
        const toggle = document.getElementById('theme');

        const themeStorage = window.localStorage.getItem('darkTheme');

        themeStorage === 'true' ? 
            document.getElementById('body').classList.add('dark') : 
            document.getElementById('body').classList.remove('dark')

        themeStorage === 'true' ? 
            toggle.checked = true : 
            toggle.checked = false

        toggle.addEventListener('input', (event) => {

            document.getElementById('body').classList.toggle('dark');

            toggle.checked ?
                window.localStorage.setItem('darkTheme', 'true') :
                window.localStorage.setItem('darkTheme', 'false');
        })
    }

    setlanguage(es, en) {
        const toggle = document.getElementById('lang');

        const language = window.localStorage.getItem('language');

        language === 'ES' ? toggle.value = 'ES' : toggle.value = 'EN'

        language && console.log('lang', language);

        toggle.addEventListener('input', (event) => {
            console.log('lang', toggle.value);

            window.localStorage.setItem('language', `${toggle.value}`);
        })
    }
}

export default Switches;

