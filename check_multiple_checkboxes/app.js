const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastchecked;

function handleCheck(e) {
  // console.log(e);
  // check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if(e.shiftKey && checked) {
    // go ahead do what we please
    // loop over every single checkbox
    checkboxed.forEach(checkbox => {
      // console.log(checkbox);
      if(checkbox === this || checkbox === lastchecked) {
        inBetween = !inBetween;
        console.log("Starting check them inbetween!")
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastchecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));