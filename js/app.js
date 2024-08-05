document.addEventListener('DOMContentLoaded', function() {
    const links = [
        { url: 'https://github.com/sampaio-arthur', title: 'GitHub' },
        { url: 'https://www.linkedin.com/in/sampaio-arthur/', title: 'Linkedin' },
        { url: 'https://wa.me/5548999895574', title: 'WhatsApp' },
        { url: 'mailto:arthurbarrasampaio@gmail.com', title: 'Gmail' },
        { url: 'https://www.instagram.com/sampaio__arthur/', title: 'Instagram' },
        { url: 'http://lattes.cnpq.br/4591176014728041', title: 'Lattes' }
    ];

    const linkContainer = document.createElement('div');
    linkContainer.className = 'link-container';

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.className = 'link-button';
        a.innerHTML = `<span>${link.title}</span>`;
        linkContainer.appendChild(a);
    });

    document.getElementById('main-content').appendChild(linkContainer);
});
