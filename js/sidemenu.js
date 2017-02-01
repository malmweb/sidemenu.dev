var sidemenuOpen = false;

function toggleSideMenu() {
		if (sidemenuOpen) {
            sidemenuOpen = false;
            $("#wrapper").css("left", "50px");
            $(".sidemenu").css("left", "-300px");
            $("ul").css("width", "85%");
        } else {
            sidemenuOpen = true;

            $("#wrapper").css("left", "350px");
            $(".sidemenu").css("left", "0");
            $("ul").css("width", "100%");
        }
	}


$(document).ready(function() {


    $(".fa-bars").click(function() {
        toggleSideMenu();
    });

    $(".menu-level1").click(function() {
        $('.menu-level2').not().css("maxHeight", "0");
        var childHeightSum = 0;
        $('.menu-level2', this).children('li').each(function() {
            childHeightSum += $(this).height();
        });

        if ($(".menu-level2", this).css("maxHeight") === childHeightSum + "px") {

            $(".menu-level2", this).css("maxHeight", "0");
        } else {

            $(".menu-level2", this).css("maxHeight", childHeightSum + "px");
        }
    });

});
