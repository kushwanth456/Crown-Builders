// MOBILE MENU

const menuToggle =
document.getElementById("menuToggle");

const navMenu =
document.getElementById("navMenu");

if(menuToggle){

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

  });

}

// GET PROJECT ID FROM URL

const params =
new URLSearchParams(window.location.search);

const projectId =
params.get("id");

// LOAD PROJECT

async function loadProject(){

  try{

    const response =
    await fetch("projects.json");

    const data =
    await response.json();

    const project =
    data.projects.find(item =>

      item.id === projectId

    );

    if(!project){

      document.body.innerHTML =
      "<h1 style='padding:150px;text-align:center;'>Project Not Found</h1>";

      return;

    }

    renderProject(project);

  }

  catch(error){

    console.log(
      "Project loading error:",
      error
    );

  }

}

// RENDER PROJECT

function renderProject(project){

  // HERO

  const hero =
  document.getElementById(
    "projectHeroContent"
  );

  hero.innerHTML = `

    <span class="section-mini">

      ${project.category}

    </span>

    <h1>

      ${project.title}

    </h1>

    <p>

      <i class="fa-solid fa-location-dot"></i>

      ${project.location}

    </p>

  `;

  // INFO

  const info =
  document.getElementById(
    "projectInfo"
  );

  info.innerHTML = `

    <div class="project-description">

      <h2>

        Project Overview

      </h2>

      <p>

        ${project.description}

      </p>

    </div>

  `;

  // GALLERY

  const gallery =
  document.getElementById(
    "projectGallery"
  );

  gallery.innerHTML = "";

  project.images.forEach(image => {

    gallery.innerHTML += `

      <div class="gallery-item">

        <img
          src="${image}"
          alt="${project.title}"
        >

      </div>

    `;

  });

  // CUSTOMER REVIEW

  if(project.review){

    const stars =
    '<i class="fa-solid fa-star"></i>'
    .repeat(project.review.rating);

    gallery.innerHTML += `

      <div class="customer-review">

        <div class="review-card">

          <div class="review-top">

            <img
              src="${project.review.image}"
              alt="${project.review.name}"
            >

            <div>

              <h3>

                ${project.review.name}

              </h3>

              <span>

                ${project.review.role}

              </span>

            </div>

          </div>

          <div class="review-stars">

            ${stars}

          </div>

          <p>

            ${project.review.message}

          </p>

        </div>

      </div>

    `;

  }

  // GSAP

  if(typeof gsap !== "undefined"){

    gsap.from(".gallery-item",{

      y:100,
      opacity:0,
      duration:1,
      stagger:.15

    });

  }

}

// LOAD

loadProject();