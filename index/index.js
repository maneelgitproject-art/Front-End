// Window Load Event
window.addEventListener("load", function () {
    render_helper();
});

// Window Resize Event
window.addEventListener("resize", function () {
    render_helper();
});

// console.log(window.innerWidth);

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