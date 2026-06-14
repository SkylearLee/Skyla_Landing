// Photo stack click effect
const photos = document.querySelectorAll(".stack-photo");

photos.forEach(function(photo) {
  photo.addEventListener("click", function() {
    photos.forEach(function(p) {
      p.classList.remove("active");
    });

    photo.classList.add("active");
  });
});


// Folder tab click effect
const tabs = document.querySelectorAll(".folder-tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
    tabs.forEach(function(item) {
      item.classList.remove("active");
    });

    panels.forEach(function(panel) {
      panel.classList.remove("active");
    });

    tab.classList.add("active");

    const selectedPanel = document.getElementById(tab.dataset.tab);

    if (selectedPanel) {
      selectedPanel.classList.add("active");
    }
  });
});

// Experience board click effect
const experienceButtons = document.querySelectorAll(".pin-note");
const experiencePanels = document.querySelectorAll(".exp-panel");

experienceButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    experienceButtons.forEach(function(item) {
      item.classList.remove("active");
    });

    experiencePanels.forEach(function(panel) {
      panel.classList.remove("active");
    });

    button.classList.add("active");

    const selectedExperience = document.getElementById(button.dataset.exp);

    if (selectedExperience) {
      selectedExperience.classList.add("active");
    }
  });
});