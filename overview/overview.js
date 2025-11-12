const mainImage = document.querySelector(".image-3d");
const title = document.querySelector(".image-container h4");
const shortDesc = document.querySelector(".image-container > p:first-of-type");
const longDesc = document.querySelector(".image-container > p:last-of-type");
const icons = document.querySelectorAll(".icons img");

const specialtiesData = [
  {
    title: "تطوير تطبيقات الموبايل",
    short: "صانع التجربة اليومية في راحة اليد",
    long: "يكتب الأكواد التي ترافق المستخدم في يومه، فيتعامل مع السرعة والدقة كأنهما إيقاع واحد. كل تطبيق يولد من يديه هو أداة تبسيط للحياة ونافذة على المستقبل.",
    img: "../assets/specialties/in_a_creative_inspiring_and_educational_way_scene.jpeg",
  },
  {
    title: "الذكاء الاصطناعي",
    short: "مُبرمج الوعي الرقمي",
    long: "يعيد تعريف معنى الفهم من خلال البيانات. يخلق أنظمة تتأمل وتستنتج وتبدع، ويمزج بين منطق الرياضيات وحدس الإنسان في معادلة واحدة تفتح أبواب الثورة القادمة.",
    img: "../assets/specialties/a_thoughtful_ai_researcher_or_innovator_sits.jpeg",
  },
  {
    title: "تصميم الجرافيك",
    short: "الفنان الرقمي الذي يترجم الفكرة إلى هوية",
    long: "ينسج الألوان والخطوط ليجعل الفكرة تُرى وتُحسّ قبل أن تُفهم. كل تصميم يصنعه هو توقيعٌ بصريٌّ يُخلّد المعنى في الذاكرة، ويمنح المشروع وجهه الحقيقي.",
    img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_representing (2).jpeg",
  },
  {
    title: "تطوير مواقع الويب",
    short: "مهندس الواجهة والجوهر",
    long: "يبني العوالم الرقمية التي يسكنها المستخدمون. يوازن بين الجمال والوظيفة، وبين الكود والتجربة. كل سطر يكتبه يربط بين الفكرة والواقع بلمسة من الإتقان.",
    img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_that.jpeg",
  },

  {
    title: "الأمن السيبراني",
    short: "حارس الأنظمة ومهندس الدفاعات الرقمية",
    long: "يمتلك مهارة اكتشاف الثغرات قبل أن تُستغل، وتحليل الهجمات قبل أن تتكرر. يعمل بدقة عالية بين الفوضى والنظام، ليبقي العالم الرقمي آمنًا ومتوازنًا.",
    img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_representing.jpeg",
  },
  {
    title: "الباك إند",
    short: "القلب النابض الذي لا يُرى",
    long: "لكنه يحمل كل شيء. يبني منطق النظام ويصون استقراره، كمهندسٍ في أعماق آلة ضخمة لا تتوقف. كل سطر كود يكتبه هو صمام أمان، وكل بنية يصممها هي وعدٌ بالثبات في وجه الفوضى.",
    img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_representing (3).jpeg",
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