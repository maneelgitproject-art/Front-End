// Last Updates Data
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

// Last Updates Section Element
const updates = document.getElementById("updates");

// Update Data Id
let updateDataId = 1;

// Next Carousel Element Function For Mobile & Last Updates Section
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

// Previous Carousel Element Function For Mobile & Last Updates Section
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

// Create Update Card Function For Mobile & Last Updates Section
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
                    style="${updateDataId === 1 ? "color: gray" : "color: #32c7ff"
        }"></i>
                <i id="next-button" class="fa-solid fa-arrow-left fa-lg" onclick="next_carousel_elem(updates , 'carousel-buttons' , create_update_card)" 
                style="${updateDataId === last_updates_data.length
            ? "color: gray"
            : "color: #32c7ff"
        }"></i>
            </div>
        </div>`;

    return update_card;
}