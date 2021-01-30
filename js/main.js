(() => {
  console.log('JS is linked up!');

  let theIcons = document.querySelectorAll('.icon svg');

  function logMyId() {
    console.log('clicked the icon!');
    console.log("my id:", this.id);
  }

  //theIcons.addEventListener("click", logMyId);
  theIcons.forEach(icon => icon.addEventListener('click', logMyId));
})()
