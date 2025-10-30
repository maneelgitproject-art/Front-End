// Pro Space Data
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

// Pro Space Section Element
const proSpace = document.getElementById("pro-space-content");

// Pro Space Data Id
let proSpaceDataId = 1;

// Next Carousel Element Function For Mobile & Pro Space Section
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

// Previous Carousel Element Function For Mobile & Pro Space Section
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

// Create Pro Space Card Function For Mobile & Pro Space Section
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
                    style="${proSpaceDataId === 1 ? "color: gray" : "color: #32c7ff"
        }"></i>
                <i id="next-button" class="fa-solid fa-arrow-left fa-lg" onclick="next_proSpace_elem(proSpace , 'pro-space-buttons' , create_pro_space_card)" 
                style="${proSpaceDataId === pro_space_data.length
            ? "color: gray"
            : "color: #32c7ff"
        }"></i>
            </div>
       `;

    return pro_space_card;
}