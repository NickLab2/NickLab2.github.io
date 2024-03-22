const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
        window.location.href = 'https://www.example.com/';
    });
});