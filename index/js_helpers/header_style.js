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
