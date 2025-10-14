console.log("Hola mundo");

interface ICaracter {
  name: string;
  phrases: string[];
  portrait_path: string;
}
interface IrespiestaApi {
  results: ICaracter[];
}
const urlCaracteres = "https://thesimpsonsapi.com/api/characters";
const loadingDiv = document.getElementById("loading-div");
const errorMessage = document.getElementById("errorMessage");
const cardContainer = document.getElementById("lista-caracteres");
const loadButton = document.getElementById("load-button");

const showLoading = (): void => {
  loadingDiv?.classList.remove("d-none");
};

const hideLoading = (): void => {
  loadingDiv?.classList.add("d-none");
};

const showErrorMessage = (): void => {
  errorMessage?.classList.remove("d-none");
  setTimeout(() => {
    errorMessage?.classList.add("d-none");
  }, 2000);
};

const foundShortPhrase = (phrases: string[]): string => {
  const shortPhrase = phrases.find((element) => element.length < 30) || "";

  return shortPhrase;
};

const createImage = (character: ICaracter): HTMLImageElement => {
  const image = document.createElement("img");
  image.src = "https://cdn.thesimpsonsapi.com/500" + character.portrait_path;
  image.classList.add("card__img");
  image.alt = "Imagen de " + character.name;
  return image;
};

const createPhrase = (character: ICaracter): HTMLParagraphElement => {
  const phrase = document.createElement("p");
  phrase.textContent = foundShortPhrase(character.phrases);
  phrase.classList.add("card__phrase");
  return phrase;
};

const createCharacterCard = (character: ICaracter): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("card__character");
  const title = document.createElement("h3");
  title.textContent = character.name;
  title.classList.add("card__title");

  const phrase = createPhrase(character);
  const image = createImage(character);

  div.appendChild(image);
  div.appendChild(title);
  if (phrase.textContent != "") div.appendChild(phrase);
  return div;
};

const renderCharacters = (characters: ICaracter[]): void => {
  if (cardContainer) {
    cardContainer.innerHTML = "";
    characters.forEach((element) => {
      const characterCard = createCharacterCard(element);
      cardContainer?.appendChild(characterCard);
    });
  }
};

const fetchCharacters = async (): Promise<void> => {
  showLoading();
  try {
    await new Promise((resolve) => setTimeout(resolve, 600)); //pequeño retraso para ver el spinnner de carga
    const res = await fetch(urlCaracteres);
    if (!res.ok) {
      showErrorMessage();
    }
    const data: IrespiestaApi = await res.json();
    renderCharacters(data.results);
    console.log(data.results);
  } catch (error) {
    showErrorMessage();
  } finally {
    hideLoading();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (loadButton) {
    loadButton?.addEventListener("click", fetchCharacters);
  }
});
