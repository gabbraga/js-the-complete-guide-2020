const addMovieDetailsBtn = document.getElementById("add-Movie");
const addMovieModal = document.getElementById('add-modal');

addMovieDetailsBtn.addEventListener('click', () => {
    addMovieModal.classList.toggle('visible');
});