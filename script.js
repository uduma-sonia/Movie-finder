const form = document.querySelector("#show-search");
const inputField = document.querySelector("#search-field");
const resultContainer = document.querySelector(".search-container");
const searchBtn = document.querySelector(".search-btn");
const onloadContainer = document.querySelector(".onload-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getData();
  inputField.value = "";
  onloadContainer.innerHTML = "";
});

onPageLoad();

//FUNCTION TO SHOW SOME MOVIES WHEN PAGE LOADS
async function onPageLoad() {
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=girls`);

  onloadContainer.innerHTML = "";
  const data = res.data;

  data.forEach((show) => {
    console.log(show.show);

    onloadContainer.innerHTML += `
            <div>
                <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img src="${show.show.image.medium}" alt="" />
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">${show.show.name}</h3>
                    <p>
                   ${show.show.summary}
                    </p>
                </div>
                </div>
            </div>
    `;
  });
}

//FUNCTION FOR SEARCH
async function getData() {
  const inputValue = inputField.value;
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${inputValue}`
  );

  resultContainer.innerHTML = "";

  response.data.forEach((show) => {
    console.log(show.show);
    const showImage = show.show.image.medium;
    const showName = show.show.name;
    const showSummary = show.show.summary;

    resultContainer.innerHTML += `
            <div>
                <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img src="${showImage}" alt="" />
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">${showName}</h3>
                    <p>
                ${showSummary}
                    </p>
                </div>
                </div>
            </div>
      `;
  });
}
