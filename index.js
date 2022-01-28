const project = [
  {
    image: './image/pic.jpeg',
    title: 'Multi-Post Stories Gain+Glory',
    language: ['HTML5', 'HTML5', 'HTML5'],
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
    liveLink: 'https://github.com/41hulk/micro-portfolio',
    gitLink: 'https://github.com/41hulk/micro-portfolio',

  },
];

const projectsDesktop = document.querySelector('.projects-desktop');

for (let i = 0; i <= 5; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-container');

  const img = document.createElement('img');
  img.src = project[0].image;

  const desc = document.createElement('div');
  desc.classList.add('desc');

  const title = document.createElement('h3');
  title.innerHTML = project[0].title;

  const languages = document.createElement('ul');

  project[0].language.forEach((language) => {
    const li = document.createElement('li');
    li.innerHTML = language;
    languages.appendChild(li);
  });

  const button = document.createElement('button');
  const modal = document.querySelector('.modal-invisible');
  button.setAttribute('type', 'button');
  button.classList.add('project-button');
  button.innerHTML = 'See project';

  button.addEventListener('click', () => {
    modal.style.display = 'block';
    const content = `<div id="modal">
                        <div id="modal-snapshot">
                            <div id="modal-cancel" >
                                <i onclick=closeModal() class="fa fa-times" title="medium" aria-hidden="true"></i>
                            </div>
                            <img id="screenshot" src="./image/pic.jpeg" alt="project snapshot">
                        </div>
                        <div id="modal-details">
                            <h2 id="modal-title">Keeping track of hundreds of components</h2>
                            <ul id="modal-list">
                                <li class="lang-item">hello</li>
                                <li class="lang-item">hello</li>
                                <li class="lang-item">hello</li>
                            </ul>
                            <p id="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
                
                            <div id="modal-buttons">
                                <a id="live-link" href="#" target="_blank" class="modal-btn button project-button primary-font">See
                                    Live <i class="fa fa-github " title="medium" aria-hidden="true"></i></a>
                                <a id="git-link" href="#" target="_blank" class="modal-btn button project-button primary-font">See
                                    Source <i class="fa fa-github" title="medium" aria-hidden="true"></i></a>
                            </div>
                        </div>
                
                    </div>`;
    modal.innerHTML = content;
    document.body.style.overflow = 'hidden';
  });
  desc.append(title, languages, button);
  card.append(img, desc);
  projectsDesktop.appendChild(card);
}
// eslint-disable-next-line no-unused-vars
function closeModal() {
  const modals = document.querySelector('.modal-invisible');
  modals.style.display = 'none';
  document.body.style.overflow = 'unset';
}
