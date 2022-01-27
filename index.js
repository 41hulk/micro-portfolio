const project = [
    {
        image:"./image/pic.jpeg",
        title:"Multi-Post Stories Gain+Glory",
        language: ['HTML5','HTML5','HTML5',],
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
        liveLink: 'https://github.com/41hulk/micro-portfolio',
        gitLink: 'https://github.com/41hulk/micro-portfolio',
    
    }
]

let projectsDesktop = document.querySelector('.projects-desktop')

for(let i=0;i<=5;i += 1){
    let card = document.createElement('div');
    card.classList.add('project-container');

    let img = document.createElement('img');
    img.src = project[0].image;

    let desc = document.createElement('div');
    desc.classList.add('desc');

    let title = document.createElement('h3');
    title.innerHTML = project[0].title;

    let languages = document.createElement('ul');

    project[0].language.forEach(language => {
        let li = document.createElement('li');
        li.innerHTML = language;
        languages.appendChild(li)
    })

    let button = document.createElement('button');
    button.setAttribute('type', 'button')
    button.classList.add('project-button')
    button.innerHTML = 'See project'
    
    desc.append(title, languages, button)
    card.append(img, desc)
    projectsDesktop.appendChild(card)
}

// MODAL
const btn=document.querySelector(".project-button");
const close=document.querySelector("modal-cancel")

function display(){
    const modal = document.querySelector()
}