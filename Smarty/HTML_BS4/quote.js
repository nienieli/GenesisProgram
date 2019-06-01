$(document).ready(function () {
    $("#quote_resApt").hide();
    $("#quote_resBsm").hide();
    $("#quote_resFlr").hide();
    $("#quote_comBss").hide();
    $("#quote_comPar").hide();
    $("#quote_comLif").hide();
    $("#quote_corTen").hide();
    $("#quote_corFlr").hide();
    $("#quote_hybAct").hide();
});

// Setting the functions for the click buttons
    $("#residential").on("click", function () {
        $("#quote_resApt, #quote_resBsm, #quote_resFlr").show(); 
        $("#quote_comBss, #quote_comPar,#quote_comLif, #quote_corTen, #quote_corFlr, #quote_hybAct").hide();
    });


    $("#commercial").on("click", function () {
        $("#quote_comBss, #quote_resFlr, #quote_resBsm, #quote_comPar, #quote_comLif").show();
        $("#quote_resApt, #quote_corTen, #quote_hybAct, #quote_corFlr").hide();
    }); 

    $("#corporate").on("click", function () {
        $("#quote_corTen, #quote_resFlr, #quote_resBsm, #quote_comPar, #quote_corFlr").show();
        $("#quote_resApt, #quote_comBss, #quote_comLif, #quote_hybAct").hide();
});

    $("#hybrid").on("click", function () {
        $("#quote_comPar, #quote_comBss, #quote_resBsm, #quote_resFlr, #quote_hybAct").show();
        $("#quote_resApt, #quote_comLif, #quote_corTen, #quote_corFlr").hide();
});
