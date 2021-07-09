const form = document.querySelector("#show-search");
const inputField = document.querySelector("#search-field");
const resultContainer = document.querySelector(".result-container");
const searchBtn = document.querySelector(".search-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getData();
  inputField.value = "";
});

async function getData() {
  const inputValue = inputField.value;
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${inputValue}`
  );

  resultContainer.innerHTML += "";

  response.data.forEach((show) => {
    console.log(show.show);
    const showName = show.show.name;

    resultContainer.innerHTML += `
        <div>
          <p>${showName}</p>
        </div>
      `;
  });
}
