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

// ALL PROJECTS

let allProjects = [];

// LOAD PROJECTS

async function loadProjects(){

  try{

    const response =
    await fetch("projects.json");

    const data =
    await response.json();

    allProjects = data.projects;

    displayProjects(allProjects);

  }

  catch(error){

    console.log(
      "Projects loading error:",
      error
    );

  }

}

// DISPLAY PROJECTS

function displayProjects(projects){
console.log("Projects Loaded");
  const container =
  document.getElementById(
    "projectsContainer"
  );

  if(!container) return;

  container.innerHTML = "";
  console.log(projects);


  projects.forEach(project => {

    container.innerHTML += `

      <a
        href="project-details.html?id=${project.id}"
        class="project-page-card"
      >

        <!-- IMAGE -->

        <div class="project-image-wrap">

          <img
            src="${project.cover}"
            alt="${project.title}"
          >

        </div>

        <!-- CONTENT -->

        <div class="project-page-content">

          <div class="project-top">

            <span class="project-category">

              ${project.category}

            </span>

            <span class="project-location">

              <i class="fa-solid fa-location-dot"></i>

              ${project.location}

            </span>

          </div>

          <h3>

            ${project.title}

          </h3>

          <p>

            ${project.description}

          </p>

        </div>

      </a>

    `;

  });

  // GSAP ANIMATION

  if(typeof gsap !== "undefined"){

    gsap.from(".project-page-card",{

      y:80,
      opacity:0,
      duration:1,
      stagger:.15

    });

  }

}

// LOAD INITIAL

loadProjects();

// FILTERS

const filterBtns =
document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    document
    .querySelector(".filter-btn.active")
    ?.classList.remove("active");

    btn.classList.add("active");

    const filter =
    btn.dataset.filter;

    if(filter === "all"){

      displayProjects(allProjects);

    }

    else{

      const filtered =
      allProjects.filter(project =>

        project.category === filter

      );

      displayProjects(filtered);

    }

  });

});