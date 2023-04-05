// Récupération des pièces depuis le fichier JSON
/*const reponse = await fetch('liste-galerie.json');
const pieces = await reponse.json();

for (let i = 0; 1 < galerie.length; i++) {
    const gallery = galerie[i];

    const divGallery = document.createElement(".gallery");

    const imageElement = document.createElement("img");
    imageElement.src = gallery.image;
    const titleElement = document.createElement("h2");
    titleElement.innerText = gallery.title;

    divGallery.appendChild(imageElement);
    divGallery.appendChild(titleElement);
}*/


/*const reponse = await fetch('liste-galerie.json');
const liste = await reponse.json();

const article = liste[0];
const imageElement = document.createElement("img");
imageElement.src = article.imageUrl;
const titleElement = document.createElement("h2");
titleElement.innerText = article.title;

const sectionPortfolio = document.querySelector(".portfolio");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(titleElement);*/

/*const architectId = 123; // ID de l'architecte dont on veut récupérer les projets
const apiUrl = 'http://localhost:5678/api/works'; // URL de l'API qui retourne les projets de l'architecte

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des projets');
    }
    return response.json(); // Convertir la réponse JSON en objet JavaScript
  })
  .then(data => {
    // Traiter les données récupérées
    console.log(data); // Afficher les projets dans la console
  })
  .catch(error => {
    console.error(error);
  });*/

/*const architectId = 123; // ID de l'architecte dont on veut récupérer les projets
const apiUrl = `http://localhost:5678/api/works?architectId=${architectId}`; // URL de l'API qui retourne les projets de l'architecte

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des projets');
        }
        return response.json(); // Convertir la réponse JSON en objet JavaScript
    })
    .then(data => {
        // Traiter les données récupérées
        console.log(data); // Afficher les projets dans la console

        // Créer des balises <figure> pour chaque projet
        data.forEach(project => {
            const figure = document.createElement('figure');

            // Créer une balise <img> pour l'image du projet
            const image = document.createElement('img');
            image.src = project.image; // Récupérer l'URL de l'image depuis les données du projet
            image.alt = project.title; // Définir le texte alternatif de l'image

            // Ajouter la balise <img> à la balise <figure>
            figure.appendChild(image);

            // Ajouter la balise <figure> à la page HTML
            document.body.appendChild(figure);
        });
    })
    .catch(error => {
        console.error(error);
    });*/


/*fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));*/

/*const gallery = document.querySelector('.gallery');

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    // Créer un élément pour chaque projet
    data.forEach(work => {
      const title = work.title;
      const image = work.imageURL;

      // Créer un élément d'image avec la source de l'image
      const img = document.createElement('img');
      img.src = image;
      img.alt = title;

      // Créer un élément de légende pour l'image
      const caption = document.createElement('div');
      caption.classList.add('caption');
      caption.textContent = title;

      // Créer un élément de lien pour l'image
      const link = document.createElement('a');
      link.href = image;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.appendChild(img);
      link.appendChild(caption);

      // Ajouter l'élément de lien à la galerie
      gallery.appendChild(link);
    });
  })
  .catch(error => console.error(error));*/






/*const gallery = document.getElementsByClassName('.gallery');

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {

    console.log(data);

    addWorksToGallery(data);
  })
  .catch(error => {

    console.error(error);
  });

function addWorksToGallery(works) {
  console.log(gallery)
  // Parcourir les travaux
  /*works.forEach(work => {*/
// for (let i = 0; i < works.lenght; i++) {
// const work = works[i]

// Créer un élément d'image
// const image = document.createElement('img');
// image.src = work.imageURL;
// Créer un élément de titre
// const title = document.createElement('h3');
// title.innerText = work.title;
// Créer un élément de travail contenant l'image et le titre
// const workElement = document.createElement('div');
// workElement.appendChild(image);
// workElement.appendChild(title);
// Ajouter l'élément de travail à la galerie
// gallery.appendChild(workElement);
// };*
// }*/

// Récupération des travaux depuis l'API
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(works => {
    // Sélection de l'élément de la galerie
    const gallery = document.querySelector('.gallery');

    // Suppression des travaux présents dans la galerie
    gallery.innerHTML = '';

    // Ajout des nouveaux travaux récupérés depuis l'API
    works.forEach(work => {
      const workItem = document.createElement('div');
      workItem.classList.add('gallery-item');

      const workImage = document.createElement('img');
      workImage.src = work.imageUrl;
      workImage.alt = work.title;

      const workTitle = document.createElement('h3');
      workTitle.innerText = work.title;

      /*const workDescription = document.createElement('p');
      workDescription.textContent = work.description;*/

      workItem.appendChild(workImage);
      workItem.appendChild(workTitle);
      /*workItem.appendChild(workDescription);*/

      gallery.appendChild(workItem);
    });
  })

  .catch(error => {
    console.error('Error fetching works:', error);
  });


/*// Récupération des projets de l'API
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    const projects = data.projects;

    // Analyse des données pour déterminer les catégories de projets disponibles
    const categories = new Set();
    projects.forEach(project => categories.add(project.category));

    // Création des boutons de filtre
    const filters = document.getElementById('filters');
    categories.forEach(category => {
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      btn.setAttribute('data-filter', category.toLowerCase());
      btn.textContent = category;
      filters.appendChild(btn);
    });

    // Ajout des écouteurs d'événements pour les boutons de filtre
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Filtre des projets en fonction de la catégorie sélectionnée
        const filter = btn.getAttribute('data-filter');
        const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category.toLowerCase() === filter);

        // Affichage des projets filtrés dans la galerie
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = '';
        filteredProjects.forEach(project => {
          const projectEl = document.createElement('div');
          projectEl.classList.add('project');
          projectEl.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="project-details">
              <h3>${project.title}</h3>
              <p>${project.category}</p>
              <a href="${project.link}" target="_blank">Voir le projet</a>
            </div>
          `;
          gallery.appendChild(projectEl);
        });

        // Mettre à jour l'apparence des boutons de filtre
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Affichage initial de tous les projets dans la galerie
    const gallery = document.querySelector('.gallery');
    projects.forEach(project => {
      const
 */










