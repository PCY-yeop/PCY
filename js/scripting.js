$(document).ready(function(){
    var panelName = '';
    $("header input[type='button']").click(function(){
        panelName = "#" + $(this).attr("data-panel");
        $(panelName).addClass("active");
        console.log(panelName);
    });
    $("[data-value='close']").click(function(){
        $(panelName).removeClass("active");
    });
});