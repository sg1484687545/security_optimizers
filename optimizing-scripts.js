document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('header.hdr.fl-hdr-ready').forEach(function (element) {
        element.style.backgroundColor = '#245b91';
        element.style.color = '#ffffff';
        element.style.padding = '15px';
        element.style.display = 'none';
    });
});
