// Render Helper Function
function render_helper () {
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
}