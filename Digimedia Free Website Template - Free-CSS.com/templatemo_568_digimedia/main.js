document.addEventListener('DOMContentLoaded', () => {
    // Charger le header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Ajouter la logique pour la classe active
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('nav ul.nav li a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        })
        .catch(err => console.error('Error loading header:', err));

        // Charger le footer
   fetch('footer.html')
       .then(response => response.text())
       .then(data => {
           document.getElementById('footer').innerHTML = data;
       })
       .catch(err => console.error('Error loading footer:', err));
});
