const inputs =document.querySelectorAll(".controls input");
function handleUpadte(){
    // console.log(this.value);
    const suffix=this.dataset.sizing || '';
    // console.log(this.dataset);
    // console.log(suffix);
    // console.log(this.name)
     // console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(input=> input.addEventListener('change',handleUpadte));
inputs.forEach(input=> input.addEventListener('mousemove',handleUpadte));

