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


const gallery = document.getElementsByClassName('.gallery');

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
  for (let i = 0; i < works.lenght; i++) {
    const work = works[i]

    // Créer un élément d'image
    const image = document.createElement('img');
    image.src = work.imageURL;
    // Créer un élément de titre
    const title = document.createElement('h3');
    title.innerText = work.title;
    // Créer un élément de travail contenant l'image et le titre
    const workElement = document.createElement('div');
    workElement.appendChild(image);
    workElement.appendChild(title);
    // Ajouter l'élément de travail à la galerie
    gallery.appendChild(workElement);
  };
}

