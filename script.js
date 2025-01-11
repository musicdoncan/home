function changeLanguage(language) {
    const allContent = document.querySelectorAll('.lang-content');
    allContent.forEach(content => content.classList.remove('active'));

    const selectedContent = document.getElementById(`content-${language}`);
    selectedContent.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    showContent('it');
});
function changeLanguage(language) {
    document.getElementById('content-it').style.display = 'none';
    document.getElementById('content-en').style.display = 'none';
    document.getElementById('content-fr').style.display = 'none';
    document.getElementById('content-' + language).style.display = 'block';
}
