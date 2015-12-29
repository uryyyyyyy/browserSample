if (typeof module === "object" && module.exports) {
    window.$ = window.jQuery = module.exports;
    module.exports = {};
}

$(function(){
    $("#btn01").click(function(){
        alert('ほげほげ');
    });
});
