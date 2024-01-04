function moveBall(link) {
    const logo = document.getElementById('logo');
    const linkElement = document.querySelector(`.sub-links a[href='#'][onclick*="${link}"]`);

    const linkRect = linkElement.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();

    const top = linkRect.top - logoRect.top + linkRect.height / 2 - logoRect.height / 2;
    const left = linkRect.left - logoRect.left + linkRect.width / 2 - logoRect.width / 2;

    logo.style.transition = 'transform 0.5s ease-in-out';
    logo.style.transform = `translate(${left}px, ${top}px)`;

    // Remove active class from all links
    const allLinks = document.querySelectorAll('.sub-links a');
    allLinks.forEach((el) => {
        el.classList.remove('active');
    });

    // Add active class to the clicked link
    linkElement.classList.add('active');

    setTimeout(() => {
        logo.style.transition = '';
        openLink(linkElement.getAttribute('href'));
    }, 500);
}

function openLink(href) {
    window.location.href = href;
}
