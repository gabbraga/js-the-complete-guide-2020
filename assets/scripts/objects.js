// get things from the DOM
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById("movie-list");
    
    if (movies.length === 0) {
        movieList.classList.remove("visible")
        return;
    } else {
        movieList.classList.add("visible");
    }
    // done this way to save time
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach(movie => {
        const movieEl = document.createElement("li");
        //object destructuring. access it using the keyname, and assign it a new
        //variable name if you want. if not, you could just have {info} and that
        //would be fine
        const {info: movieInfo, ...id} = movie;
        console.log(id);
        let text = movieInfo.title + ' - ';
        for (const key in movieInfo) {
            if (key !== 'title') {
                text = text + `${key}: ${movieInfo[key]}`
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (!title.trim() || !extraName.trim() || !extraValue.trim()) {
        return;
    }

    const newMovie = {
        info: {
            title: title,
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);