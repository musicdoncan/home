function changeLanguage(language) {
    const allContent = document.querySelectorAll('.lang-content');
    allContent.forEach(content => content.classList.remove('active'));

    const selectedContent = document.getElementById(`content-${language}`);
    selectedContent.classList.add('active');
    }