function addIconClasses() {
    $(".img-p").each(function(){
        var scre = $("body").width();
        if ( scre >= 425 ) {
            $(".img-p").attr("scr", "image/high-school-maker.png");
        } if ( scre > 992 && scre < 1200 ) {
            $(".icon").addClass("icon-md");
        } if ( scre > 768 && scre < 992 ) {
            $(".icon").addClass("icon-sm");
        }  if ( scre < 768 ) {
            $(".icon").addClass("icon-xs");
        }
    });
}

$(document).ready(function () {
    // Adicionar classes ao carregar o documento
    addIconClasses();

    $(window).resize(function() {
        // Adicionar sempre que a tela for redimensionada
        addIconClasses();
    });
});