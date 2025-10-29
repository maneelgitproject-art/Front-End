const last_updates_data = [
  {
    id: 1,
    image: "./assets/index/last_update/update-one.jpeg",
    title: "نظرة على نظام الربح التعليمي",
    date: "2025/10/26",
    subtitle: "انظمة الربح",
    description: "نظرة أولية على اول نظام للربح أثناء عملية التعلم والتدريب.",
  },
  {
    id: 2,
    image: "./assets/index/last_update/update-two.png",
    title: "نظرة على نظام الربح التعليمي",
    date: "2025/10/26",
    subtitle: "مشاريع الاعضاء",
    description:
      "تم إطلاق البوت نظام المسؤول عن تقييم وإدارة أعضاء الجروبات المختلفة في التلجرام",
  },
  {
    id: 3,
    image: "./assets/index/last_update/update-three.jpg",
    title: "متابعة تقدمك في كتابة الكود أصبحت أسهل",
    date: "2025/10/26",
    subtitle: "تطوير",
    description:
      "اكتب، تطوّر، وارتقِ! دع أداة نواة تتتبع أسطرك بدقة، لتعرف بالضبط كم اقتربت من مستوى “الماستر” في البرمجة.",
  },
];

const pro_space_data = [
  {
    id: 1,
    image: "../assets/index/pro-space/right.jpeg",
    description:
      "نواة تكبر مع تجاربكم، نتعلّم من مشاكلكم، ونبني معًا تجربة تليق بطموحاتكم وتدفعكم خطوة أبعد كل يوم",
  },
  {
    id: 2,
    image: "../assets/index/pro-space/center.jpeg",
    description:
      "شارك في فعاليات نواة، وتحديات بناء المشاريع، واختبر متعة التعلم الجماعي الذي لا يُنسى.",
  },
  {
    id: 3,
    image: "../assets/index/pro-space/left.jpeg",
    description:
      "استكشف مساحة نواة، وانضم إلى مجتمع من المبدعين الشغوفين بمجالاتهم، كلٌ منهم يسعى لرفع مستواه.",
  },
];

const updates = document.getElementById("updates");
const proSpace = document.getElementById("pro-space-content");
let updateDataId = 1;
let proSpaceDataId = 1;

const overview_link = document.getElementById("overview-link");
const overview_link_underline = document.querySelector(
  ".overview-link-item-underline"
);

const news_link = document.getElementById("news-link");
const news_link_underline = document.querySelector(".news-link-item-underline");

const specialties_link = document.getElementById("specialties-link");
const specialties_link_underline = document.querySelector(
  ".specialties-link-item-underline"
);

const find_specialize_link = document.getElementById("find_specialize-link");
const find_specialize_link_underline = document.querySelector(
  ".find_specialize-link-item-underline"
);

const support_link = document.getElementById("support-link");
const support_link_underline = document.querySelector(
  ".support-link-item-underline"
);

const social_link = document.getElementById("social-link");
const social_link_underline = document.querySelector(
  ".social-link-item-underline"
);

window.addEventListener("load", function () {
  if (window.innerWidth < 768) {
    render_mobile(
      last_updates_data,
      updates,
      "carousel-buttons",
      create_update_card,
      updateDataId
    );
    render_mobile(
      pro_space_data,
      proSpace,
      "pro-space-buttons",
      create_pro_space_card,
      proSpaceDataId
    );
  } else {
    render_desktop(
      last_updates_data,
      updates,
      "carousel-buttons",
      create_update_card
    );
    render_desktop(
      pro_space_data,
      proSpace,
      "pro-space-buttons",
      create_pro_space_card
    );
  }
  change_speciality_section();
});

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
  if (window.innerWidth < 768) {
    render_mobile(
      last_updates_data,
      updates,
      "carousel-buttons",
      create_update_card,
      updateDataId
    );
    render_mobile(
      pro_space_data,
      proSpace,
      "pro-space-buttons",
      create_pro_space_card,
      proSpaceDataId
    );
  } else {
    render_desktop(
      last_updates_data,
      updates,
      "carousel-buttons",
      create_update_card
    );
    render_desktop(
      pro_space_data,
      proSpace,
      "pro-space-buttons",
      create_pro_space_card
    );
  }
  change_speciality_section();
});

function render_mobile(
  data,
  parentElement,
  btnsId,
  render_func,
  sectionDataId
) {
  parentElement.innerHTML = data
    .map((item) => (item.id == sectionDataId ? render_func(item) : ""))
    .join(" ");
  const carouselBtns = document.getElementById(btnsId);
  carouselBtns.style.display = "flex";
  carouselBtns.style.flexDirection = "row";
}

function render_desktop(data, parentElement, btnsId, render_func) {
  parentElement.innerHTML = data.map(render_func).join(" ");
  const carouselBtns = document.getElementById(btnsId);
  carouselBtns.style.display = "none";
}

function create_update_card(data) {
  const update_card = `
        <div id="update">
            <div id="image-container">
                <img src="${data.image}" alt="" />
            </div>
            <small> <strong> ${data.subtitle} </strong> | ${data.date} </small>
            <h3>${data.title}</h3>
            <p>
                ${data.description}
            </p>
            <div id="carousel-buttons" style="display: none;">
                <hr>
                <i id="prev-button" class="fa-solid fa-arrow-right fa-lg" onclick="prev_carousel_elem(updates , 'carousel-buttons' , create_update_card)" 
                    style="${
                      updateDataId === 1 ? "color: gray" : "color: #32c7ff"
                    }"></i>
                <i id="next-button" class="fa-solid fa-arrow-left fa-lg" onclick="next_carousel_elem(updates , 'carousel-buttons' , create_update_card)" 
                style="${
                  updateDataId === last_updates_data.length
                    ? "color: gray"
                    : "color: #32c7ff"
                }"></i>
            </div>
        </div>`;

  return update_card;
}

function next_carousel_elem(parentElement, btnsId, render_func) {
  if (updateDataId < last_updates_data.length) {
    updateDataId++;
    render_mobile(
      last_updates_data,
      parentElement,
      btnsId,
      render_func,
      updateDataId
    );
  }
}

function prev_carousel_elem(parentElement, btnsId, render_func) {
  if (updateDataId > 1) {
    updateDataId--;
    render_mobile(
      last_updates_data,
      parentElement,
      btnsId,
      render_func,
      updateDataId
    );
  }
}

function create_pro_space_card(data) {
  const pro_space_card = `
       
            <div id="pro-space-img">
                    <img src="${data.image}" alt="" />
                    <p>
                        ${data.description}
                    </p>
                </div>
            <div id="pro-space-buttons" style="display: none;">
                <hr>
                <i id="prev-button" class="fa-solid fa-arrow-right fa-lg" onclick="prev_proSpace_elem(proSpace , 'pro-space-buttons' , create_pro_space_card)" 
                    style="${
                      proSpaceDataId === 1 ? "color: gray" : "color: #32c7ff"
                    }"></i>
                <i id="next-button" class="fa-solid fa-arrow-left fa-lg" onclick="next_proSpace_elem(proSpace , 'pro-space-buttons' , create_pro_space_card)" 
                style="${
                  proSpaceDataId === pro_space_data.length
                    ? "color: gray"
                    : "color: #32c7ff"
                }"></i>
            </div>
       `;

  return pro_space_card;
}

function next_proSpace_elem(parentElement, btnsId, render_func) {
  if (proSpaceDataId < pro_space_data.length) {
    proSpaceDataId++;
    render_mobile(
      pro_space_data,
      parentElement,
      btnsId,
      render_func,
      proSpaceDataId
    );
  }
}

function prev_proSpace_elem(parentElement, btnsId, render_func) {
  if (proSpaceDataId > 1) {
    proSpaceDataId--;
    render_mobile(
      pro_space_data,
      parentElement,
      btnsId,
      render_func,
      proSpaceDataId
    );
  }
}

// Change Speciality Section
function change_speciality_section() {
  const speciality = document.getElementById("speciality");
  if (window.innerWidth < 768) {
    speciality.innerHTML = `
            <div class="center-content">
                <h1>اختر تخصصك</h1>
                <p>
                    صِغ أكوادك لتبني المستقبل، أو أطلق خيالك في تصميم تجربة تبهر
                    المستخدمين، أو خطّط لمشاريع تُحدث فرقًا حقيقيًا في العالم. هناك
                    تخصصات تتناسب مع كل شغفٍ وطموح.
                </p>
                <div id="speciality-button">
                    <button>اختر تخصصك</button>
                    <a href="">عرض جميع التخصصات</a>
                </div>
            </div>
            <div id="mobile-image">
                <div id="right-image">
                    <img src="../assets/index/specialist/right-image.png" alt="" />
                </div>
                <div id="left-image">
                    <img src="../assets/index/specialist/left-image.png" alt="" />
                </div>
            </div>`;
  } else {
    speciality.innerHTML = `
            <div id="right-image">
                <img src="../assets/index/specialist/right-image.png" alt="" />
            </div>
            <div class="center-content">
                <h1>اختر تخصصك</h1>
                <p>
                    صِغ أكوادك لتبني المستقبل، أو أطلق خيالك في تصميم تجربة تبهر
                    المستخدمين، أو خطّط لمشاريع تُحدث فرقًا حقيقيًا في العالم. هناك
                    تخصصات تتناسب مع كل شغفٍ وطموح.
                </p>
                <div id="speciality-button">
                    <button>اختر تخصصك</button>
                    <a href="">عرض جميع التخصصات</a>
                </div>
            </div>
            <div id="left-image">
                <img src="../assets/index/specialist/left-image.png" alt="" />
            </div>`;
  }
}

// Change Header Links Style
change_link_style(overview_link, overview_link_underline);
change_link_style(news_link, news_link_underline);
change_link_style(specialties_link, specialties_link_underline);
change_link_style(find_specialize_link, find_specialize_link_underline);
change_link_style(support_link, support_link_underline);
change_link_style(social_link, social_link_underline);

// Reset Header Links Style
reset_link_style(overview_link, overview_link_underline);
reset_link_style(news_link, news_link_underline);
reset_link_style(specialties_link, specialties_link_underline);
reset_link_style(find_specialize_link, find_specialize_link_underline);
reset_link_style(support_link, support_link_underline);
reset_link_style(social_link, social_link_underline);

// Change Header Links Style Function
function change_link_style(element, elementUnderLine) {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "rgba(160, 159, 159, 0.55)";
    element.style.borderRadius = "4px";
    element.style.cursor = "pointer";
    element.style.color = "white";
    elementUnderLine.style.backgroundColor = "#32c7ff";
    elementUnderLine.style.position = "absolute";
    elementUnderLine.style.bottom = "-20px";
    elementUnderLine.style.left = "0";
    elementUnderLine.style.height = "5px";
    elementUnderLine.style.width = "100%";
    elementUnderLine.style.borderRadius = "2px";
    elementUnderLine.style.transition = "0.1s ease-in-out";
  });
}

// Reset Header Links Style Function
function reset_link_style(element, elementUnderLine) {
  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "";
    elementUnderLine.style = "";
  });
}
