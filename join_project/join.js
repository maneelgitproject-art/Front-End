const progressBar1 = document.getElementById('progressB');   // Page 1 bar
const progressBar2 = document.getElementById('progressBar'); // Page 2 bar

const nextBtn = document.getElementById('nextBtn');
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

function moveProgress() {
  if (currentPage === 0) {
     progressBar1.style.width = "50%";
  }

  if (currentPage === 1) {
     progressBar2.style.width = "100%";
  }
}




 
  // Get all select buttons and dropdowns
  const selects = document.querySelectorAll('.select-box');

  selects.forEach((box) => {
    const btn = box.querySelector('.select-btn');
    const selectedText = box.querySelector('.selectedText');
    const dropselctdown = box.nextElementSibling;

    // Toggle dropdown
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Close other dropdowns
      document.querySelectorAll('.dropselctdown').forEach(d => {
        if (d !== dropselctdown) d.classList.remove('open');
      });
      document.querySelectorAll('.select-btn').forEach(b => {
        if (b !== btn) b.classList.remove('open');
      });

      dropselctdown.classList.toggle('open');
      btn.classList.toggle('open');
    });

    // Handle option click
    dropselctdown.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('disabled')) return;

        // remove selected class from others
        dropselctdown.querySelectorAll('li').forEach(li => li.classList.remove('selected'));

        // add selected to clicked item
        item.classList.add('selected');

        // show selected text
        selectedText.textContent = item.textContent;

        // close dropselctdown
        dropselctdown.classList.remove('open');
        btn.classList.remove('open');
      });
    });
  });

  // Close all dropselctdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropselctdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.select-btn').forEach(b => b.classList.remove('open'));
  });

  

  // News js Code
function initNavbar() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const dropdowns = document.querySelectorAll(".dropdown");
  const globeMobile = document.getElementById("globeMobile");

  // التحقق من وجود العناصر الأساسية
  if (!menuToggle || !navLinks) {
    console.warn("عناصر القائمة غير موجودة في الصفحة");
    return;
  }

  // تفعيل القائمة المنسدلة للجوال
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
     menuToggle.classList.toggle("active");
  });

  // تفعيل القوائم المنسدلة في وضع الجوال
  if (dropdowns.length > 0) {
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          this.classList.toggle("active");

          // إغلاق القوائم المنسدلة الأخرى
          dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== this && otherDropdown.classList) {
              otherDropdown.classList.remove("active");
            }
          });
        }
      });
    });
  }

  // إغلاق القائمة عند النقر خارجها (للجوال)
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 768 &&
      navLinks &&
      menuToggle &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      (!globeMobile || !globeMobile.contains(e.target))
    ) {
      navLinks.classList.remove("active");

      // إغلاق جميع القوائم المنسدلة
      dropdowns.forEach((dropdown) => {
        if (dropdown.classList) {
          dropdown.classList.remove("active");
        }
      });
    }
  });

  // إغلاق القائمة عند تغيير حجم النافذة
  window.addEventListener("resize", function () {
    if (navLinks && window.innerWidth > 768) {
      navLinks.classList.remove("active");

      // إغلاق جميع القوائم المنسدلة
      dropdowns.forEach((dropdown) => {
        if (dropdown.classList) {
          dropdown.classList.remove("active");
        }
      });
    }
  });
}

// تشغيل التهيئة عندما تكون الصفحة جاهزة
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbar);
} else {
  initNavbar();
}




 