const socialName = ["twitter", "github", "instagram", "youtube", "tiktok"];

function createCardSocial(array, id) {
  array.map((card) => {
    const cardLink = `
    <li>
    <a class="social_link" href="https://${card}.com" target="_blank">
      <img src="./assets/icons/${card}.svg" alt="${card}" />
    </a>
  </li>
    `;
    id.innerHTML += cardLink;
  });
}

createCardSocial(socialName, social);
