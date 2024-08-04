const scrollContainer = document.querySelector('.destination-slider');
const scrollRightBtn = document.getElementById('right');
const scrollLeftBtn = document.getElementById('left');

scrollRightBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
});

scrollLeftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
});


document.getElementById("see-more").addEventListener('click',(e)=>{
  scrollContainer.classList.toggle("height");
  if (e.target.innerText = "see more") {
    e.target.innerText = "see less";
  }else{
    e.target.innerText = "see more";
  }
});

let nav = document.querySelector('.hamburger');
nav.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log("working");
  document.querySelector('.res-nav').classList.toggle("show");
});
let section = document.querySelectorAll("section");
section.forEach(item=>{
  item.addEventListener('click', () => {
    document.querySelector('.res-nav').classList.remove("show");
  })
})

