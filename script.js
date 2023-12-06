
console.log("Probar");
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
