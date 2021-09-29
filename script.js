const inputText = document.querySelector("#textInput");
const outputText = document.querySelector("#textOutput");
const btnClicked = document.querySelector("#btn-click");

btnClicked.addEventListener("click", () => {
  dataFetching();
});

function errorMesssage() {
  alert("Please Enter the correct Input");
}

function dataFetching() {
  const responseUrl = "https://api.funtranslations.com/translate/chef.json";
  console.log(responseUrl);
  let input = inputText.value;
  if (input == "") {
    errorMesssage();
    return;
  }
  let serverUrl = responseUrl + "?text=" + input;
  console.log(serverUrl);
  fetch(serverUrl)
    .then((response) => response.json())
    .then((json) => {
      let output = json.contents.translated;
      outputText.innerText = output;
    });
}
