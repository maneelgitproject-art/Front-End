
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
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            const dropdowns = document.querySelectorAll('.dropdown');
            const globeMobile = document.getElementById('globeMobile');

            // التحقق من وجود العناصر الأساسية
            if (!menuToggle || !navLinks) {
                console.warn('عناصر القائمة غير موجودة في الصفحة');
                return;
            }

            // تفعيل القائمة المنسدلة للجوال
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

           

           

            // تفعيل القوائم المنسدلة في وضع الجوال
            if (dropdowns.length > 0) {
                dropdowns.forEach(dropdown => {
                    dropdown.addEventListener('click', function(e) {
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            this.classList.toggle('active');
                            
                            // إغلاق القوائم المنسدلة الأخرى
                            dropdowns.forEach(otherDropdown => {
                                if (otherDropdown !== this && otherDropdown.classList) {
                                    otherDropdown.classList.remove('active');
                                }
                            });
                        }
                    });
                });
            }

            // إغلاق القائمة عند النقر خارجها (للجوال)
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && 
                    navLinks && 
                    menuToggle && 
                    !navLinks.contains(e.target) && 
                    !menuToggle.contains(e.target) &&
                    (!globeMobile || !globeMobile.contains(e.target))) {
                    navLinks.classList.remove('active');
                    
                    // إغلاق جميع القوائم المنسدلة
                    dropdowns.forEach(dropdown => {
                        if (dropdown.classList) {
                            dropdown.classList.remove('active');
                        }
                    });
                }
            });

            // إغلاق القائمة عند تغيير حجم النافذة
            window.addEventListener('resize', function() {
                if (navLinks && window.innerWidth > 768) {
                    navLinks.classList.remove('active');
                    
                    // إغلاق جميع القوائم المنسدلة
                    dropdowns.forEach(dropdown => {
                        if (dropdown.classList) {
                            dropdown.classList.remove('active');
                        }
                    });
                }
            });
        }

        // تشغيل التهيئة عندما تكون الصفحة جاهزة
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initNavbar);
        } else {
            initNavbar();
        }
        


        
