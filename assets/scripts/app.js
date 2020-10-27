const addMovieDetailsBtn = document.getElementById("add-Movie");
const addMovieModalDiv = document.getElementById('add-modal');
const cancelAddMovieDetailsBtn = addMovieModalDiv.querySelector('.btn--passive');
const addMovieBtn = addMovieModalDiv.querySelector('.btn--success');
const backdropDiv = document.getElementById('backdrop');
const inputList = document.querySelector('.modal__content').querySelectorAll('input');
const movies = [];

const toggleBackdrop = () => {
    backdropDiv.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModalDiv.classList.toggle('visible');
    toggleBackdrop();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

const validateMovieDetails = () => {
    const titleValue = inputList[0].value;
    const imageURL = inputList[1].value;
    const ratingValue = inputList[2].value;

    if(
        !titleValue.trim() || 
        !imageURL.trim() || 
        !ratingValue.trim() ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('please enter valid values');
    } else {
        //addMovie(titleValue, imageURL, ratingValue);
        movies.push({
            title: titleValue,
            url: imageURL,
            rating: ratingValue
        });
        toggleMovieModal();
    }
};

//if you need to add movies from somewhere else do it like this,
//but if not just add the movie in the validate function
/* function addMovie(titleValue, imageURL, ratingValue) {
    movies.push({
        title: titleValue,
        url: imageURL,
        rating: ratingValue
    });
}; */

addMovieDetailsBtn.addEventListener('click', toggleMovieModal);
backdropDiv.addEventListener('click', backdropClickHandler);
cancelAddMovieDetailsBtn.addEventListener('click', toggleMovieModal);
addMovieBtn.addEventListener('click', validateMovieDetails);
