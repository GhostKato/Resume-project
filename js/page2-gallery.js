const individualProjects = [
          {
            preview: 'img/webstudio.png',
            link: 'https://ghostkato.github.io/goit-markup-hw-06-vanilla/',
            description: 'WEBSTUDIO',
          },
          {
            preview: 'img/picture-gallery.png',
            link: 'https://ghostkato.github.io/goit-js-hw-12/',
            description: 'Picture Gallery',
          },
        ];

        const teamProjects = [
          {
            preview: 'img/green-harvest.png',
            link: 'https://ghostkato.github.io/project-group-4-html-css/',
            description: 'Green Harvest',
          },
          {
            preview: 'img/green-harvest.png',
            link: 'https://ghostkato.github.io/project-group-4-html-css/',
            description: 'Green Harvest',
          },
        ];

        document.addEventListener('DOMContentLoaded', () => {
            const individualGallery = document.querySelector(".individual-gallery");
            const teamGallery = document.querySelector(".team-gallery");

            function buildGallery(arr) {
              return arr.map((item) => {
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
              }).join('');
            }

            if (individualGallery) {
                individualGallery.insertAdjacentHTML('beforeend', buildGallery(individualProjects));
            }

            if (teamGallery) {
                teamGallery.insertAdjacentHTML('beforeend', buildGallery(teamProjects));
            }

            const message = document.querySelector(".message-gallery");

            function handleMouseOver(event) {
                if (event.target.tagName === 'IMG') {
                    const description = event.target.alt;
                    message.textContent = description;        
                }
            }

            function handleMouseOut() {
                message.textContent = '';    
            }

            if (individualGallery) {
                individualGallery.addEventListener('mouseover', handleMouseOver);
                individualGallery.addEventListener('mouseout', handleMouseOut);
            }

            if (teamGallery) {
                teamGallery.addEventListener('mouseover', handleMouseOver);
                teamGallery.addEventListener('mouseout', handleMouseOut);
            }
        });