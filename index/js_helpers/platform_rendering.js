// Render Mobile
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

// Render Desktop
function render_desktop(data, parentElement, btnsId, render_func) {
    parentElement.innerHTML = data.map(render_func).join(" ");
    const carouselBtns = document.getElementById(btnsId);
    carouselBtns.style.display = "none";
}