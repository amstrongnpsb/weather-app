const contentContainer = document.getElementsByClassName("content")[0];
const weatherCard = document.getElementsByClassName("weather-data")[0];
const generatePromptCard = () => {
  const createWarningCard = () => {
    const noInputCard = document.createElement("div");
    noInputCard.innerHTML = `<h1 class="text-3xl font-sans font-bold uppercase text-center">Search any city ...</h1>`;
    noInputCard.classList.add("warning-card", "text-sky-950", "animate-show");
    return noInputCard;
  };
  return contentContainer.insertBefore(createWarningCard(), weatherCard);
};

export default generatePromptCard;
