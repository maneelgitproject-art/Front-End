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