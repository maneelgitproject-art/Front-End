const progressBar = document.getElementById('progressBar');
const progressBar2 = document.getElementById('progressBar2');
const progressB = document.getElementById('progressB');
const progressB2 = document.getElementById('progressB2');
 
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
  const moveA = progressWidth;

   progressBar.style.transform = `translateX(-${moveAmount * currentPage}px)`;
   progressBar2.style.transform = `translateX(-${ moveAmount  * currentPage}px)`;
   
   progressB.style.transform = `translateX(${moveAmount * currentPage}px)`;
   progressB2.style.transform = `translateX(${moveAmount * currentPage}px)`;

    

}


 
  // Get all select buttons and dropdowns
  const selects = document.querySelectorAll('.select-box');

  selects.forEach((box) => {
    const btn = box.querySelector('.select-btn');
    const selectedText = box.querySelector('.selectedText');
    const dropdown = box.nextElementSibling; // dropdown right after select box

    // Toggle dropdown
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
      document.querySelectorAll('.select-btn').forEach(b => {
        if (b !== btn) b.classList.remove('open');
      });

      dropdown.classList.toggle('open');
      btn.classList.toggle('open');
    });

    // Handle option click
    dropdown.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('disabled')) return;

        // remove selected class from others
        dropdown.querySelectorAll('li').forEach(li => li.classList.remove('selected'));

        // add selected to clicked item
        item.classList.add('selected');

        // show selected text
        selectedText.textContent = item.textContent;

        // close dropdown
        dropdown.classList.remove('open');
        btn.classList.remove('open');
      });
    });
  });

  // Close all dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.select-btn').forEach(b => b.classList.remove('open'));
  });

  

   document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const links = document.getElementById('links');

    toggle.addEventListener('click', () => {
        links.classList.add('show'); // show menu
     });

    closeBtn.addEventListener('click', () => {
        links.classList.remove('show'); // hide menu
    });
});
 