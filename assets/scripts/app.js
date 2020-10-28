/*
    Select DOM elements
*/
const addMovieDetailsBtn = document.getElementById("add-Movie");
const addMovieModalDiv = document.getElementById('add-modal');
const cancelAddMovieDetailsBtn = addMovieModalDiv.querySelector('.btn--passive');
const addMovieBtn = addMovieModalDiv.querySelector('.btn--success');
const backdropDiv = document.getElementById('backdrop');
const inputList = document.querySelector('.modal__content').querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movieListUl = document.getElementById('movie-list');

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

const cancelClickHandler = () => {
    toggleMovieModal();
    clearMovieDetails();
};

const clearMovieDetails = () => {
    for(const input of inputList) {
        input.value = '';
    }
};

const addMovie = () => {
    const movie = {
        title: inputList[0].value,
        url: inputList[1].value,
        rating: inputList[2].value
    } 
    //validate movie details input
    if(
        !movie.title.trim() || 
        !movie.url.trim() || 
        !movie.rating.trim() ||
        +movie.rating < 1 ||
        +movie.rating > 5
    ) {
        alert('please enter valid values');
    } else {
        movies.push(movie);
        updateUI();
        toggleMovieModal();
        clearMovieDetails();
        renderNewMovieElement(movie);
    }
    console.log(movies);
};

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const renderNewMovieElement = (movie) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
       <div class="movie-element__image">
        <img src=${movie.url} alt="${movie.title}">
       </div> 
       <div class="movie-element__info">
        <h2>${movie.title}</h2>
        <p>${movie.rating}/5 stars</h3>
       </div>
    `;
    
    movieListUl.appendChild(newMovieElement);
    
    //to delete the movie when clicked
    newMovieElement.addEventListener('click', () => { 
        /* 
            important to note: when this element is removed from the DOM, 
            the event listener is now just out in the void, however it does 
            NOT create a memory leak. If you delete an object from the DOM,
            as long as you do not have any references to it elsewhere in your
            code, the browser will automatically clear everything that is related
            to that DOM object, including any event listeners. 
        */
        movieListUl.removeChild(newMovieElement);
        movies.splice(movies.indexOf(movie), 1);

        console.log(movies);
    });
   
};

addMovieDetailsBtn.addEventListener('click', toggleMovieModal);
backdropDiv.addEventListener('click', backdropClickHandler);
cancelAddMovieDetailsBtn.addEventListener('click', cancelClickHandler);
addMovieBtn.addEventListener('click', addMovie);
