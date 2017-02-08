$(

    // class operations

    $("#add-class").on("click", function() {
        $(this).addClass("active");
    }),

    $("#remove-class").on("click", function() {
        $(this).removeClass("active");
    }),

    $("#toggle-class").on("click", function() {
        $(this).toggleClass("active");
    }),

    // attribute operations

    $("#get-attr").on("click", function() {

        let attribute = $(this).attr("value");
        $(this).text(attribute);
    }),

    $("#set-attr").on("click", function() {

        $(this).attr("value", "this is my set value");
        let attribute = $(this).attr("value");
        $(this).text(attribute);
    }),

    // alert operations

    $("#alert").on("click", function() {
      alert("I am your favourite alert");
    }),

    $("#trigger-alert").on("click", function() {
        $(this).toggle(alert("I am your favourite alert"));
    }),

    // clone

    $(".clone-me").on("click", function() {

        let clone = $(this).clone();
        $("#clone-list").append(clone);
        $(".clone-me:last button").text("cloned");
    }),

    $("#find-closest").on("click", function() {

        let element = $(this).parent();
        console.log(element);
    }),

    // buttons text array

    $("#buttons-text").on("click", function() {

        let buttonsTextArr = [];
        $(".main-button").each(function () {
            buttonsTextArr.push($(this).text());
        });
        console.log(buttonsTextArr);
    }),

    // find button

    $("#find-me").on("click", function() {

        let findMe = $("body").find($("#find-me"));
        console.log(findMe);
    }),

    // text operations

    $("#fade-in").on("click", function() {
        $("#text").fadeIn(500);
    }),

    $("#fade-out").on("click", function() {
        $("#text").fadeOut(500);
    }),

    $("#hide").on("click", function() {
        $("#text").hide();
    }),

    $("#show").on("click", function() {
        $("#text").show();
    }),

    // button info

    $("#my-info").on("click", function() {

        let height = $(this).height();
        let width = $(this).width();
        let coordinatesTop = $(this).offset().top;
        let coordinatesLeft = $(this).offset().left;
        let parent = $(this).parent();
        let closest = $(this).closest();

        console.log(height + ", " + width + ", " + coordinatesTop + ", " + coordinatesLeft + ", " + parent + ", " + closest);
    })
);