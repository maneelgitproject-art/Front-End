// overview js code


const mainImage = document.querySelector(".image-3d");
  const title = document.querySelector(".image-container h4");
  const shortDesc = document.querySelector(".image-container > p:first-of-type");
  const longDesc = document.querySelector(".image-container > p:last-of-type");
  const icons = document.querySelectorAll(".icons img");

  const specialtiesData = [
    {
      title: "الأمن السيبراني",
      short: "حارس الأنظمة ومهندس الدفاعات الرقمية",
      long: "يمتلك مهارة اكتشاف الثغرات قبل أن تُستغل وتحليل الهجمات قبل أن تتكرر. يعمل بدقة عالية بين الفوضى والنظام ليبقي العالم الرقمي آمناً ومتوازناً.",
      img: "../assets/specialties/in_a_creative_inspiring_and_educational_way_scene.jpeg",
    },
    {
      title: "الذكاء الاصطناعي",
      short: "العقل المفكر خلف الأنظمة الذكية",
      long: "يبتكر خوارزميات تتعلم من البيانات لتجعل الآلات أكثر فهمًا للعالم وأكثر قدرة على اتخاذ القرار.",
      img: "../assets/specialties/a_thoughtful_ai_researcher_or_innovator_sits.jpeg",
    },
    {
      title: "تطوير الألعاب",
      short: "صانع العوالم التفاعلية",
      long: "يجمع بين الفن والبرمجة ليبني تجارب ممتعة تأخذ اللاعب إلى عوالم جديدة من الإبداع.",
      img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_representing (2).jpeg",
    },
    {
      title: "تحليل البيانات",
      short: "المستكشف الرقمي",
      long: "يفك شيفرات الأرقام ليكتشف الأنماط ويحوّل البيانات إلى قرارات استراتيجية مؤثرة.",
      img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_that.jpeg",
    },
    {
      title: "تصميم الواجهات",
      short: "فنان التجربة الرقمية",
      long: "يبني واجهات جذابة وسهلة الاستخدام توازن بين الجمال والوظيفة.",
      img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_representing.jpeg",
    },
    {
      title: "الروبوتات",
      short: "مهندس المستقبل الذكي",
      long: "يجمع بين الميكانيكا والبرمجة لصناعة آلات تفكر وتتعلم وتؤدي المهام المعقدة.",
      img: "../assets/specialties/create_a_2d_hand_drawn_digital_illustration_representing (3).jpeg",
    },
  ];

  // عند الضغط على أي أيقونة
  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      // تحديث الصورة والنصوص
      mainImage.src = specialtiesData[index].img;
      title.textContent = specialtiesData[index].title;
      shortDesc.textContent = specialtiesData[index].short;
      longDesc.textContent = specialtiesData[index].long;

      // إزالة تفعيل كل الأيقونات
      icons.forEach((i) => i.classList.remove("active"));

      // تفعيل الأيقونة اللي اتضغطت
      icon.classList.add("active");

      // تأثير بسيط عند تغيير الصورة
      mainImage.style.opacity = "0";
      setTimeout(() => {
        mainImage.style.opacity = "1";
      }, 150);
    });
  });

  // افتراضيًا خليه يختار أول أيقونة عند تحميل الصفحة
  if (icons.length > 0) {
    icons[0].classList.add("active");
  }