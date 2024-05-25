const individualProjects = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    link:
      'https://ghostkato.github.io/goit-markup-hw-06-vanilla/',
    description: 'WEBSTUDIO',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    link:
      'https://ghostkato.github.io/goit-js-hw-12/',
    description: 'Picture Gallery',
  },  
];

const teamProjects = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    link:
      'https://ghostkato.github.io/project-group-4-html-css/',
    description: 'Green Harvest',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    link:
      'https://ghostkato.github.io/project-group-4-html-css/',
    description: 'Green Harvest',
  },  
];

const individualGallery = document.querySelector(".individual-gallery");
const teamGallery = document.querySelector(".team-gallery");

        const individualProjectsGallery = individualProjects
            .map((item) => {
                return `                
                <li class="gallery-item">
                    <a class="gallery-link" href="${item.link}" target="_blank">
                        <img
                            class="gallery-image"
                            src="${item.preview}"
                            
                            alt="${item.description}"
                        />
                    </a>
                </li>`;
            })
    .join('');         
   
        const teamProjectsGallery = teamProjects
            .map((item) => {
                return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${item.link}" target="_blank">
                        <img
                            class="gallery-image"
                            src="${item.preview}"
                            
                            alt="${item.description}"
                        />
                    </a>
                </li>`;
            })
            .join('');

individualGallery.insertAdjacentHTML('beforeend', individualProjectsGallery);
        
teamGallery.insertAdjacentHTML('beforeend', teamProjectsGallery);

const message = document.querySelector(".message-gallery")

function handleMouseOver(event) {
    if (event.target.tagName === 'IMG') {
        const description = event.target.alt;
        message.textContent = description;
    }
}

function handleMouseOut() {
    message.textContent = '';
}

individualGallery.addEventListener('mouseover', handleMouseOver);
individualGallery.addEventListener('mouseout', handleMouseOut);

teamGallery.addEventListener('mouseover', handleMouseOver);
teamGallery.addEventListener('mouseout', handleMouseOut);





