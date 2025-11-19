const mainImage = document.querySelector(".image-3d");
const title = document.querySelector(".image-container h4");
const shortDesc = document.querySelector(".image-container > p:first-of-type");
const longDesc = document.querySelector(".image-container > p:last-of-type");
const icons = document.querySelectorAll(".icons img");
const iconsContainer = document.querySelector(".icons"); 
const nextArrow = document.querySelector(".next-arrow1");
const prevArrow = document.querySelector(".prev-arrow1");

// مقدار السحب

const capIconsContainer = document.querySelector(".cap-icons");
const prevArrow2 = document.querySelector(".prev-arrow2");
const nextArrow2 = document.querySelector(".next-arrow2");
const scrollAmount = 120;

nextArrow2.addEventListener("click", () => {
  capIconsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevArrow2.addEventListener("click", () => {
  capIconsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});


// تحديث حالة الأسهم
function updateArrows() {
  const maxScroll = iconsContainer.scrollWidth - iconsContainer.clientWidth;

  if (iconsContainer.scrollLeft <= 0) {
    prevArrow.classList.add("disabled");
    prevArrow.classList.remove("active");
  } else {
    prevArrow.classList.remove("disabled");
    prevArrow.classList.add("active");
  }

  if (iconsContainer.scrollLeft >= maxScroll) {
    nextArrow.classList.add("disabled");
    nextArrow.classList.remove("active");
  } else {
    nextArrow.classList.remove("disabled");
    nextArrow.classList.add("active");
  }
}

// السحب عند الضغط
nextArrow.addEventListener("click", () => {
  iconsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  setTimeout(updateArrows, 300);
});

prevArrow.addEventListener("click", () => {
  iconsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  setTimeout(updateArrows, 300);
});

// تشغيل أول مرة
updateArrows();

const specialtiesData = [
  {
    title: "تطوير تطبيقات الموبايل",
    short: "صانع التجربة اليومية في راحة اليد",
    long: "يكتب الأكواد التي ترافق المستخدم في يومه، فيتعامل مع السرعة والدقة كأنهما إيقاع واحد. كل تطبيق يولد من يديه هو أداة تبسيط للحياة ونافذة على المستقبل.",
    img: "../assets/specialties/all_specialists/s1.jpeg",
  },
  {
    title: "الذكاء الاصطناعي",
    short: "مُبرمج الوعي الرقمي",
    long: "يعيد تعريف معنى الفهم من خلال البيانات. يخلق أنظمة تتأمل وتستنتج وتبدع، ويمزج بين منطق الرياضيات وحدس الإنسان في معادلة واحدة تفتح أبواب الثورة القادمة.",
    img: "../assets/specialties/all_specialists/s2.jpeg",
  },
  {
    title: "تصميم الجرافيك",
    short: "الفنان الرقمي الذي يترجم الفكرة إلى هوية",
    long: "ينسج الألوان والخطوط ليجعل الفكرة تُرى وتُحسّ قبل أن تُفهم. كل تصميم يصنعه هو توقيعٌ بصريٌّ يُخلّد المعنى في الذاكرة، ويمنح المشروع وجهه الحقيقي.",
    img: "../assets/specialties/all_specialists/s3.jpeg",
  },
  {
    title: "تطوير مواقع الويب",
    short: "مهندس الواجهة والجوهر",
    long: "يبني العوالم الرقمية التي يسكنها المستخدمون. يوازن بين الجمال والوظيفة، وبين الكود والتجربة. كل سطر يكتبه يربط بين الفكرة والواقع بلمسة من الإتقان.",
    img: "../assets/specialties/all_specialists/s4.jpeg",
  },

  {
    title: "الأمن السيبراني",
    short: "حارس الأنظمة ومهندس الدفاعات الرقمية",
    long: "يمتلك مهارة اكتشاف الثغرات قبل أن تُستغل، وتحليل الهجمات قبل أن تتكرر. يعمل بدقة عالية بين الفوضى والنظام، ليبقي العالم الرقمي آمنًا ومتوازنًا.",
    img: "../assets/specialties/all_specialists/s5.jpeg",
  },
  {
    title: "الباك إند",
    short: "القلب النابض الذي لا يُرى",
    long: "لكنه يحمل كل شيء. يبني منطق النظام ويصون استقراره، كمهندسٍ في أعماق آلة ضخمة لا تتوقف. كل سطر كود يكتبه هو صمام أمان، وكل بنية يصممها هي وعدٌ بالثبات في وجه الفوضى.",
    img: "../assets/specialties/all_specialists/s6.jpeg",
  },
];

// عند الضغط على أي أيقونة
icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    mainImage.src = specialtiesData[index].img;
    title.textContent = specialtiesData[index].title;
    shortDesc.textContent = specialtiesData[index].short;
    longDesc.textContent = specialtiesData[index].long;

    icons.forEach((i) => i.classList.remove("active"));
    icon.classList.add("active");

    mainImage.style.opacity = "0";
    setTimeout(() => {
      mainImage.style.opacity = "1";
    }, 150);
  });
});

// تحديد أول أيقونة افتراضيًا
if (icons.length > 0) {
  icons[4].classList.add("active");
}

// دالة تهيئة آمنة
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

document.addEventListener("DOMContentLoaded", function () {
  // نتحقق إن الشاشة موبايل فقط
  if (window.innerWidth > 768) return;

  // 🔹 القسم الأول (goals)
  const goalsContainer = document.querySelector(".goals");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  if (goalsContainer && prevArrow && nextArrow) {
    const goalItems = goalsContainer.querySelectorAll("div");
    let currentSlide = 0;
    const totalSlides = goalItems.length;
    let lastActiveArrow = prevArrow; // السهم الأبيض الافتراضي

    function updateSlidesVisibility() {
      goalItems.forEach((item, index) => {
        item.style.display = index === currentSlide ? "block" : "none";
      });

      prevArrow.style.display = "flex";
      nextArrow.style.display = "flex";

      prevArrow.disabled = currentSlide === 0;
      nextArrow.disabled = currentSlide === totalSlides - 1;

      prevArrow.classList.remove("active");
      nextArrow.classList.remove("active");

      if (currentSlide === 0) {
        prevArrow.classList.add("active");
      } else if (currentSlide === totalSlides - 1) {
        nextArrow.classList.add("active");
      } else {
        lastActiveArrow.classList.add("active");
      }
    }

    function activateArrow(arrow) {
      prevArrow.classList.remove("active");
      nextArrow.classList.remove("active");
      arrow.classList.add("active");
      lastActiveArrow = arrow;
    }

    prevArrow.addEventListener("click", function () {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlidesVisibility();
        activateArrow(prevArrow);
      }
    });

    nextArrow.addEventListener("click", function () {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlidesVisibility();
        activateArrow(nextArrow);
      }
    });

    updateSlidesVisibility();
  }

  // 🔹 القسم الثاني (icons)
  const iconsContainer = document.querySelector(".icons");
  const prevArrow1 = document.querySelector(".prev-arrow1");
  const nextArrow1 = document.querySelector(".next-arrow1");

  if (iconsContainer && prevArrow1 && nextArrow1) {
    const icons = Array.from(iconsContainer.querySelectorAll("img"));
    const visibleCount = 4;
    let currentStart = icons.length - visibleCount;
    let activeArrow = prevArrow1;

    function updateIcons() {
      icons.forEach((icon, index) => {
        icon.style.display =
          index >= currentStart && index < currentStart + visibleCount
            ? "inline-block"
            : "none";
      });

      prevArrow1.classList.remove("active");
      nextArrow1.classList.remove("active");
      activeArrow.classList.add("active");
    }

    function activateArrow(arrow) {
      activeArrow = arrow;
      updateIcons();
    }

    prevArrow1.addEventListener("click", function () {
      if (currentStart > 0) currentStart--;
      activateArrow(prevArrow1);
    });

    nextArrow1.addEventListener("click", function () {
      if (currentStart < icons.length - visibleCount) currentStart++;
      activateArrow(nextArrow1);
    });

    updateIcons();
  }

  // 🔹 القسم الثالث (cap-icons)
  const capIconsContainer = document.querySelector(".cap-icons");
  const prevArrow2 = document.querySelector(".prev-arrow2");
  const nextArrow2 = document.querySelector(".next-arrow2");

  if (capIconsContainer && prevArrow2 && nextArrow2) {
    const icons = Array.from(capIconsContainer.querySelectorAll(".cap-icon"));
    const visibleCount = 4;
    let currentStart = icons.length - visibleCount;
    let activeArrow = prevArrow2;

    function updateIcons() {
      icons.forEach((icon, index) => {
        icon.style.display =
          index >= currentStart && index < currentStart + visibleCount
            ? "inline-block"
            : "none";
      });

      prevArrow2.classList.remove("active");
      nextArrow2.classList.remove("active");
      activeArrow.classList.add("active");
    }

    function activateArrow(arrow) {
      activeArrow = arrow;
      updateIcons();
    }

    prevArrow2.addEventListener("click", function () {
      if (currentStart > 0) currentStart--;
      activateArrow(prevArrow2);
    });

    nextArrow2.addEventListener("click", function () {
      if (currentStart < icons.length - visibleCount) currentStart++;
      activateArrow(nextArrow2);
    });

    updateIcons();
  }

  // 🔹 القسم الرابع (imgs__box)

  const imgContainers = document.querySelectorAll(".imgs__box-container");
  const prevArrow3 = document.querySelector(".prev-arrow3");
  const nextArrow3 = document.querySelector(".next-arrow3");

  if (imgContainers.length && prevArrow3 && nextArrow3) {
    let currentIndex = imgContainers.length - 1;

    function updateImages() {
      imgContainers.forEach((img, idx) => {
        img.style.display = idx === currentIndex ? "block" : "none";
      });

      prevArrow3.style.display = "flex";
      nextArrow3.style.display = "flex";
    }

    prevArrow3.addEventListener("click", () => {
      if (currentIndex > 0) currentIndex--;
      updateImages();
    });

    nextArrow3.addEventListener("click", () => {
      if (currentIndex < imgContainers.length - 1) currentIndex++;
      updateImages();
    });

    updateImages();
  }
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

function updateArrows() {
  const maxScroll = iconsContainer.scrollWidth - iconsContainer.clientWidth;

  // السهم اليسار
  if (iconsContainer.scrollLeft <= 0) {
    prevArrow.classList.add("disabled");
    prevArrow.classList.remove("active");
  } else {
    prevArrow.classList.remove("disabled");
    prevArrow.classList.add("active");
  }

  // السهم اليمين
  if (iconsContainer.scrollLeft >= maxScroll - 1) {
    nextArrow.classList.add("disabled");
    nextArrow.classList.remove("active");
  } else {
    nextArrow.classList.remove("disabled");
    nextArrow.classList.add("active");
  }
}


function updateArrows() {
  const maxScroll = iconsContainer.scrollWidth - iconsContainer.clientWidth;

  // السهم اليسار
  if (iconsContainer.scrollLeft <= 0) {
    prevArrow.classList.add("disabled");
    prevArrow.classList.remove("active");
  } else {
    prevArrow.classList.remove("disabled");
    prevArrow.classList.add("active");
  }

  // السهم اليمين
  if (iconsContainer.scrollLeft >= maxScroll - 1) {
    nextArrow.classList.add("disabled");
    nextArrow.classList.remove("active");
  } else {
    nextArrow.classList.remove("disabled");
    nextArrow.classList.add("active");
  }
}
// دالة عامة لتحديث حالة العناصر بناءً على حجم الشاشة
function updateLayoutOnResize() {
    updateGoalsLayout();
    updateSpecialtiesLayout();
    updateCapabilitiesLayout();
    updateImgsBoxLayout();
}

// ========== Goals Section ==========
function updateGoalsLayout() {
    const goalsContainer = document.querySelector('.goals');
    const goalItems = document.querySelectorAll('.goals > div');
    
    if (!goalsContainer || !goalItems.length) return;
    
    if (window.innerWidth <= 768) {
        // الجوال: إظهار عنصر واحد فقط
        let foundActive = false;
        goalItems.forEach((item, index) => {
            if (item.classList.contains('active') && !foundActive) {
                item.style.display = 'flex';
                foundActive = true;
            } else {
                item.style.display = 'none';
                if (index === 0 && !foundActive) {
                    item.style.display = 'flex';
                    item.classList.add('active');
                    foundActive = true;
                }
            }
        });
    } else {
        // الشاشات الكبيرة: إظهار جميع العناصر
        goalItems.forEach(item => {
            item.style.display = 'flex';
            item.classList.remove('active');
        });
    }
}

function initGoalsNavigation() {
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const goalItems = document.querySelectorAll('.goals > div');
    
    if (!prevArrow || !nextArrow || !goalItems.length) return;
    
    prevArrow.addEventListener('click', function() {
        const activeIndex = Array.from(goalItems).findIndex(item => item.classList.contains('active'));
        if (activeIndex > 0) {
            goalItems[activeIndex].classList.remove('active');
            goalItems[activeIndex].style.display = 'none';
            
            goalItems[activeIndex - 1].classList.add('active');
            goalItems[activeIndex - 1].style.display = 'flex';
            
            updateGoalsArrows();
        }
    });
    
    nextArrow.addEventListener('click', function() {
        const activeIndex = Array.from(goalItems).findIndex(item => item.classList.contains('active'));
        if (activeIndex < goalItems.length - 1) {
            goalItems[activeIndex].classList.remove('active');
            goalItems[activeIndex].style.display = 'none';
            
            goalItems[activeIndex + 1].classList.add('active');
            goalItems[activeIndex + 1].style.display = 'flex';
            
            updateGoalsArrows();
        }
    });
}

function updateGoalsArrows() {
    if (window.innerWidth > 768) return;
    
    const goalItems = document.querySelectorAll('.goals > div');
    const activeIndex = Array.from(goalItems).findIndex(item => item.classList.contains('active'));
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    if (!prevArrow || !nextArrow) return;
    
    prevArrow.disabled = activeIndex === 0;
    nextArrow.disabled = activeIndex === goalItems.length - 1;
    
    prevArrow.classList.toggle('disabled', activeIndex === 0);
    nextArrow.classList.toggle('disabled', activeIndex === goalItems.length - 1);
}

// ========== Specialties Section ==========
function updateSpecialtiesLayout() {
    const iconsContainer = document.querySelector('.icons');
    if (!iconsContainer) return;
    
    if (window.innerWidth <= 768) {
        iconsContainer.style.overflowX = 'auto';
        iconsContainer.style.justifyContent = 'flex-start';
    } else {
        iconsContainer.style.overflowX = 'visible';
        iconsContainer.style.justifyContent = 'center';
    }
}

// ========== Capabilities Section ==========
function updateCapabilitiesLayout() {
    const capIconsContainer = document.querySelector('.cap-icons');
    if (!capIconsContainer) return;
    
    if (window.innerWidth <= 768) {
        capIconsContainer.style.overflowX = 'auto';
        capIconsContainer.style.justifyContent = 'flex-start';
    } else {
        capIconsContainer.style.overflowX = 'visible';
        capIconsContainer.style.justifyContent = 'center';
    }
}

// ========== Imgs Box Section ==========
function updateImgsBoxLayout() {
    const imgsBoxContainers = document.querySelectorAll('.imgs__box-container');
    
    if (!imgsBoxContainers.length) return;
    
    if (window.innerWidth <= 768) {
        // الجوال: إظهار عنصر واحد فقط
        let foundActive = false;
        imgsBoxContainers.forEach((container, index) => {
            if (container.classList.contains('active') && !foundActive) {
                container.style.display = 'block';
                foundActive = true;
            } else {
                container.style.display = 'none';
                if (index === 0 && !foundActive) {
                    container.style.display = 'block';
                    container.classList.add('active');
                    foundActive = true;
                }
            }
        });
    } else {
        // الشاشات الكبيرة: إظهار جميع العناصر
        imgsBoxContainers.forEach(container => {
            container.style.display = 'block';
            container.classList.remove('active');
        });
    }
}

function initImgsBoxNavigation() {
    const prevArrow3 = document.querySelector('.prev-arrow3');
    const nextArrow3 = document.querySelector('.next-arrow3');
    const imgsBoxContainers = document.querySelectorAll('.imgs__box-container');
    
    if (!prevArrow3 || !nextArrow3 || !imgsBoxContainers.length) return;
    
    prevArrow3.addEventListener('click', function() {
        const activeIndex = Array.from(imgsBoxContainers).findIndex(container => container.classList.contains('active'));
        if (activeIndex > 0) {
            imgsBoxContainers[activeIndex].classList.remove('active');
            imgsBoxContainers[activeIndex].style.display = 'none';
            
            imgsBoxContainers[activeIndex - 1].classList.add('active');
            imgsBoxContainers[activeIndex - 1].style.display = 'block';
            
            updateImgsBoxArrows();
        }
    });
    
    nextArrow3.addEventListener('click', function() {
        const activeIndex = Array.from(imgsBoxContainers).findIndex(container => container.classList.contains('active'));
        if (activeIndex < imgsBoxContainers.length - 1) {
            imgsBoxContainers[activeIndex].classList.remove('active');
            imgsBoxContainers[activeIndex].style.display = 'none';
            
            imgsBoxContainers[activeIndex + 1].classList.add('active');
            imgsBoxContainers[activeIndex + 1].style.display = 'block';
            
            updateImgsBoxArrows();
        }
    });
}

function updateImgsBoxArrows() {
    if (window.innerWidth > 768) return;
    
    const imgsBoxContainers = document.querySelectorAll('.imgs__box-container');
    const activeIndex = Array.from(imgsBoxContainers).findIndex(container => container.classList.contains('active'));
    const prevArrow3 = document.querySelector('.prev-arrow3');
    const nextArrow3 = document.querySelector('.next-arrow3');
    
    if (!prevArrow3 || !nextArrow3) return;
    
    prevArrow3.disabled = activeIndex === 0;
    nextArrow3.disabled = activeIndex === imgsBoxContainers.length - 1;
    
    prevArrow3.classList.toggle('disabled', activeIndex === 0);
    nextArrow3.classList.toggle('disabled', activeIndex === imgsBoxContainers.length - 1);
}

// ========== Initialize Everything ==========
function initAllSections() {
    updateLayoutOnResize();
    
    // تهيئة التنقل لكل قسم
    initGoalsNavigation();
    initImgsBoxNavigation();
    
    // تحديث حالة الأسهم
    updateGoalsArrows();
    updateImgsBoxArrows();
}

// الأحداث
document.addEventListener('DOMContentLoaded', initAllSections);
window.addEventListener('resize', updateLayoutOnResize);