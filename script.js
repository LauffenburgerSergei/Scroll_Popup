let playOnce = true

window.addEventListener("scroll", () => {
  //narbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  //image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = '1';
    imgImprovise.style.transform = 'none';
  }

  //popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = 'none';
    playOnce = false;
  }


});

closeBtn.addEventListener('click', () => {
popup.style.opacity = 0;
popup.style.transform = "translateX(500px)";
});







// Bonus : quand on clicke sur la popup elle disparait pour toujours
