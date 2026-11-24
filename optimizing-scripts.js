document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#245b91';
        } else {
            header.style.backgroundColor = '';
        }
    });

    console.log('JS is loaded!');
});
