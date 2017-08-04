$.fn.mapSelect = function(mapTo, map) {
    $(this).change(function() {
        var selectedItem = $(this).find(":selected").val();
        console.log(selectedItem);
        // $(mapTo).find('[value^=]').remove();
        $(mapTo).empty();
        $(mapTo).selectpicker("refresh");
        $.each(map, function( index, value ) {
            console.log("I : "+selectedItem+" V : "+value[0]+ " ->"+(selectedItem == value[0]));
            if(selectedItem == value[0]) {
                $(mapTo).append("<option>" + value[1] + "</option>");
            }
        });
        $(mapTo).selectpicker("refresh");

    });
};