function searchProduct() {

  const input =
  document.getElementById("search")
  .value
  .toLowerCase()
  .trim();

  let translatedInput = input;

  // SMART SEARCH FOR TOMATO

  if (

    input.includes("tamatar") ||
    input.includes("टमाटर") ||
    input.includes("tomato") ||
    input.includes("tomatoes") ||
    input.includes("tamto") ||
   
