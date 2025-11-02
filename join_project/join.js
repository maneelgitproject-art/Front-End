const progressBar = document.getElementById('progressBar');
const progressBar2 = document.getElementById('progressBar2');

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const pages = document.querySelectorAll('.page');

let currentPage = 0;

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
    moveProgress();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    pages[currentPage].classList.remove('active');
    currentPage--;
    pages[currentPage].classList.add('active');
    moveProgress();
  }
});

function moveProgress() {
  const progressWidth = document.querySelector('.progress').offsetWidth;
  const barWidth = progressBar.offsetWidth;
  const moveAmount = progressWidth - barWidth;

   progressBar.style.transform = `translateX(-${moveAmount * currentPage}px)`;
   progressBar2.style.transform = `translateX(-${moveAmount * currentPage}px)`;

}

 
    
    