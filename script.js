// const form = document.querySelector("#show-search");
// const inputField = document.querySelector("#search-field");
// const resultContainer = document.querySelector(".search-container");
// const searchBtn = document.querySelector(".search-btn");
// const onloadContainer = document.querySelector(".onload-container");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   getData();
//   inputField.value = "";
//   onloadContainer.innerHTML = "";
// });

// onPageLoad();

// //FUNCTION TO SHOW SOME MOVIES WHEN PAGE LOADS
// async function onPageLoad() {
//   const res = await axios.get(`http://api.tvmaze.com/search/shows?q=girls`);

//   onloadContainer.innerHTML = "";
//   const data = res.data;

//   data.forEach((show) => {
//     console.log(show.show.name);

//     onloadContainer.innerHTML += `
//     <div>
//           <div class="uk-card uk-card-default uk-card-body">
//             <div class="s-grid-1">
//               <img
//                 src="${show.show.image.medium}"
//               />

//               <h2>Name</h2>
//               <p>
//                ${show.show.summary}
//               </p>
//             </div>

//             <div class="s-grid-2"></div>
//           </div>
//         </div>
//     `;
//   });
// }

// //FUNCTION FOR SEARCH
// async function getData() {
//   const inputValue = inputField.value;
//   const response = await axios.get(
//     `http://api.tvmaze.com/search/shows?q=${inputValue}`
//   );

//   resultContainer.innerHTML = "";

//   response.data.forEach((show) => {
//     console.log(show.show);
//     const showName = show.show.name;

//     resultContainer.innerHTML += `
//         <div>
//           <p>${showName}</p>
//         </div>
//       `;
//   });
// }
