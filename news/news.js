// News js Code

 document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const links = document.getElementById('links');

    toggle.addEventListener('click', () => {
        links.classList.add('show'); // show menu
     });

    closeBtn.addEventListener('click', () => {
        links.classList.remove('show'); // hide menu
    });
});
