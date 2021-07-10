const form = document.querySelector("#show-search");
const inputField = document.querySelector("#search-field");
const resultContainer = document.querySelector(".search-container");
const searchBtn = document.querySelector(".search-btn");
const onloadContainer = document.querySelector(".onload-container");
const searchFunc = document.querySelector(".A-I");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getData();
  inputField.value = "";
  onloadContainer.innerHTML = "";
});

//FUNCTION TO SHOW SOME MOVIES WHEN PAGE LOADS
async function onPageLoad() {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=boy`);

  onloadContainer.innerHTML = "";
  res.data.forEach((show) => {
    const data = show.show;

    const genres = data.genres;
    const showImage = data.image.medium;
    const showName = data.name;
    const showSummary = data.summary;
    const rating = data.rating.average;

    onloadContainer.innerHTML += `
            <div class="movie">
                <div>
                    <img src="${showImage}" alt="" />
                    <h3 class="movie-name uk-text-bold">${showName}</h3>
                    <p class="rating">Rating: <span>${rating} </span></p>
                    <p>Genres: ${genres}</p>
                </div>

                <div class="overlay">
                    <p>
                       ${showSummary}
                    </p>
                </div>
            </div>
    `;
  });
}

//FUNCTION FOR SEARCH
async function getData() {
  const inputValue = inputField.value;
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${inputValue}`
  );

  resultContainer.innerHTML = "";
  response.data.forEach((show) => {
    const data = show.show;

    const genres = data.genres;
    const showImage = data.image.medium;
    const showName = data.name;
    const showSummary = data.summary;
    const rating = data.rating.average;

    resultContainer.innerHTML += `
            <div class="movie">
                <div>
                    <img src="${showImage}" alt="" />
                    <h3 class="movie-name uk-text-bold">${showName}</h3>
                    <p class="${ratingClass(
                      rating
                    )}">Rating: <span>${rating} </span></p>
                    <p>Genres: ${genres}</p>
                </div>

                <div class="overlay">
                    <p>
                    ${showSummary}
                    </p>
                </div>
            </div>
      `;
  });
}

function ratingClass(rating) {
  if (rating >= 5) {
    return "green";
  } else {
    return "red";
  }
}

axios.interceptors.request.use(
  function (config) {
    searchFunc.textContent = "Searching...";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    searchFunc.textContent = "";
    return response;
  },
  function (error) {
    searchFunc.textContent = "not found";

    return Promise.reject(error);
  }
);
onPageLoad();
