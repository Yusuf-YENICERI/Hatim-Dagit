

const detectLanguage = () => {
    return "en";
    let language = window.navigator.userLanguage || window.navigator.language;
    return language == 'tr-TR' ? 'tr-TR' : 'en-US' ;

}

export default detectLanguage;