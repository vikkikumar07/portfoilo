// ================= Themes change =================
const themebtn = document.getElementById("themeBtn");

themebtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themebtn.style.color = "white";   // Dark mode → White icon
    } else {
      themebtn.style.color = "black";   // Light mode → Black icon
    }
  }
);
/* ================= show all arrow section =================*/
function hiddenArrowBox(item) {
  item.style.flexWrap = "nowrap";
  item.style.overflowX = "auto";
  item.style.whiteSpace = "nowrap";
  item.style.height = "auto";
}
function showArrowBox(item) {
  item.style.flexWrap = "wrap";
  item.style.overflowX = "hidden";
  item.style.whiteSpace = "normal";
  item.style.height = "auto";
}
let showAll = document.querySelectorAll(".show-All");
let languageSkill = document.querySelector(".languages-skill");
let technicalSkill = document.querySelector(".technical-skill");
let toolSkill = document.querySelector(".tool-skill");
let projectContenar = document.querySelector(".project-contenar");

// accesses nave bar item
showAll.forEach(function(arrow) {
  arrow.addEventListener("click", function() {
    /* technical arrow */
    if(this.id === "technical-arrow") {
      if (technicalSkill.style.flexWrap === "wrap") {
        hiddenArrowBox(technicalSkill);
      } else {
        showArrowBox(technicalSkill);
      }
      /* language arrow*/
    } else if(this.id === "language-arrow") {
      if (languageSkill.style.flexWrap === "wrap") {
        hiddenArrowBox(languageSkill);
      } else {
        showArrowBox(languageSkill);
      }
      /*tool and platform */
    } else if(this.id === "tool-arrow") {
      if (toolSkill.style.flexWrap === "wrap") {
        hiddenArrowBox(toolSkill);
      } else {
        showArrowBox(toolSkill);
      }
    }  else if(this.id === "project-arrow") {
      if (projectContenar.style.flexWrap === "wrap") {
        hiddenArrowBox(projectContenar);
        projectContenar.style.justifyContent = "flex-start";
      } else {
        showArrowBox(projectContenar);
        projectContenar.style.justifyContent = "center";
      }
    }

  });
});

/* ================= menu-Btn Section =================*/
let menuSection = document.querySelector(".menu-section");
window.addEventListener("scroll", () =>{
  menuSection.style.display = "none";
})
function menuBtn(){
  if(menuSection.style.display === "none") {
    menuSection.style.display = "block";
  } else {
    menuSection.style.display = "none";
  }
}

/* ================= Technical Section =================*/
// for use code stream store
let technicalSkills = [
  { title:"HTML5",id:1, img:'<i class="fa-brands fa-html5"></i>' }, { title:"CSS3", id:2, img:'<i class="fa-brands fa-css3-alt"></i>' },
  { title:"JavaScript", id:3, img:'<i class="fa-brands fa-square-js"></i>' },{ title:"Java",id:4, img:'<i class="fa-brands fa-java"></i>' },
  { title:"Git & GitHub",id:5, img:'<i class="fa-brands fa-git-alt"></i>' }
];

let techSkills = document.querySelector(".technical-skill");


technicalSkills.forEach(function(skill){
    techSkills.innerHTML +=`
        <div class="skills-img">
           <div class="skill-image" id="img${skill.id}">${skill.img}</div>
           <div class="skill-title">${skill.title}</div>
        </div>
    `;
});     

/*================= Programming Languages Section =================*/
let languageSkills = [
    { title:"C",id:1, img:'<i class="fa-solid fa-c"></i>' }, { title:"Java",id:2, img:'<i class="fa-brands fa-java"></i>' },
    { title:"JavaScript",id:3, img:'<i class="fa-brands fa-square-js"></i>' }
];

let languagesSkills = document.querySelector(".languages-skill");

languageSkills.forEach(function(skill){
    languagesSkills.innerHTML +=`
        <div class="languages-img">
          <div class="skill-image" id="img${skill.id}">${skill.img}</div>
          <div class="skill-title">${skill.title}</div>
        </div>
    `;
});

/*================= Tool & platforms Section =================*/
let toolsSkills = [
    { title:"V S Code",id:1, img:'<i class="fa-solid fa-laptop-code"></i>' }, { title:"Git",id:2, img:'<i class="fa-brands fa-git-alt"></i>' },
    { title:"GitHub",id:3, img:'<i class="fa-brands fa-github"></i>'}, { title:"Firebase",id:4, img:'<i class="fa-solid fa-meteor"></i>' }
];

let toolSkills = document.querySelector(".tool-skill");

toolsSkills.forEach(function(skill){
    toolSkills.innerHTML +=`
        <div class="tools-img">
          <div class="skill-image" id="icon${skill.id}">${skill.img}</div>
          <div class="skill-title">${skill.title}</div>
        </div>
    `;
});
        
/*================= Projects Section =================*/

       
/*================= Experience Section =================*/

       
/*================= Internship Section =================*/

       
/*================= Certifications Section =================*/

/*================= Achievements Section =================*/

       
/*================= Coding Profile =================*/

/*================= GitHub Statistics =================*/

/*================= Resume =================*/