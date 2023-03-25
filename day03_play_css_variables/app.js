const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // console.log(this.dataset);
  const suffix = this.dataset.sizing || '';
  // console.log(suffix);

  // update <html> element style (update :root we adjusted on style.css)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));