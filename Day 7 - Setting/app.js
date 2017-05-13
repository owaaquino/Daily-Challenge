const range = document.getElementById('rangeValue');
const rangeSlider = document.getElementById('slider');

rangeSlider.addEventListener('change', ()=>{
  range.textContent = rangeSlider.value;
});