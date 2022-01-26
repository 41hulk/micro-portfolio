const project = [
    {
        image:"./image/pic.jpeg",
        title:"Multi-Post Stories Gain+Glory",
        language: ['HTML5','HTML5','HTML5',]
    }
]

let projectsDesktop = document.querySelector('.projects-desktop')

for(let i=0;i<=6;i += 1){
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
    button.innerHTML = 'See project'
    
    desc.append(title, languages, button)
    card.append(img, desc)
    projectsDesktop.appendChild(card)
}
