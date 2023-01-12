const btn = document.querySelector('#menu-btn');
const closeButton = document.querySelector('#close-btn');
const sectionLink = document.querySelectorAll('.nav-link');

function display() {
  const menu = document.querySelector('#menu');
  menu.classList.add('menu-visible');
}
function close() {
  const menu = document.querySelector('#menu');
  menu.classList.remove('menu-visible');
}

btn.addEventListener('click', display);
closeButton.addEventListener('click', close);
sectionLink.forEach((item) => {
  item.addEventListener('click', close);
});


const cardData = [
  {
    title: "Space Travelers",
    image: "./image/space.png",
    tags: ["React", "Redux"],
    description: "A Front-end application that allows users to rent their favorite rockets and register for SpaceX missions.",
    liveSite: "https://space-travelers-hub-ksg.netlify.app/",
    repository: "https://github.com/Saadat123456/Space-Travelers-Hub"
  },
  {
    title: "Leaderboard",
    image: "./image/space.png",
    tags: ["HTML", "CSS", "JS"],
    description: " A front-end web application that displays scores submitted by different players. It also allows you to submit your score.",
    liveSite: "https://leadb.netlify.app/",
    repository: "https://github.com/41hulk/leaderboard"
  },
  {
    title: "VueJs Amsterdam  ",
    image: "./image/vuejs.png",
    tags: ["HTML", "CSS", "JS"],
    description: "Vuejs is a community event which takes place in Amsterdam for all vuejs users to learn and discuss the evolution of vuejs as a framework",
    liveSite: "https://41hulk.github.io/vuejs-amsterdam/",
    repository: "https://github.com/41hulk/vuejs-amsterdam"
  },
  {
    title: "Budget App",
    image: "./image/budget.png",
    tags: ["Ruby on Rails", "Capybara", "Rspec"],
    description: "A Front-end application that allows users to create their budget categories and list their expenses depending on them.",
    liveSite: "https://budget-app-ovsg.onrender.com/",
    repository: "https://github.com/41hulk/budget-app"
  },
  // Add more project data here
];

function generateCards() {
  const cardContainer = document.getElementById("card-container");
  for (let i = 0; i < cardData.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = cardData[i].image;
    cardImage.alt = "Project Image";
    card.appendChild(cardImage);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card.appendChild(cardContent);

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = cardData[i].title;
    cardContent.appendChild(cardTitle);

    const cardTags = document.createElement("div");
    cardTags.classList.add("card-tags");
    cardContent.appendChild(cardTags);
    for (let j = 0; j < cardData[i].tags.length; j++) {
        const cardTag = document.createElement("span");
        cardTag.textContent = cardData[i].tags[j];
        cardTags.appendChild(cardTag);
    }

    const cardDescription = document.createElement("p");
    cardDescription.textContent = cardData[i].description;
    cardContent.appendChild(cardDescription);

    const cardButtons = document.createElement("div");
    cardButtons.classList.add("card-buttons");
    cardContent.appendChild(cardButtons);

    const liveSiteButton = document.createElement("a");
    liveSiteButton.classList.add("button", "live-site-button");
    liveSiteButton.href = cardData[i].liveSite;
    liveSiteButton.textContent = "Live Site";
    cardButtons.appendChild(liveSiteButton);

    const repoButton = document.createElement("a");
    repoButton.classList.add("button", "repo-button");
    repoButton.href = cardData[i].repository;
    repoButton.textContent = "Repository";
    cardButtons.appendChild(repoButton);

    cardContainer.appendChild(card);
  }
}



generateCards();