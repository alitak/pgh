$(function () {
    // NPM modules
    require('leaflet');
    window.cookies = require('js-cookie');

    // custom modules
    require('../named_functions');

    // local modules

    /*
     * COMMON STUFF
     **/
    // bootstrap tooltip initialize
    $('body').tooltip({selector: '[data-toggle="tooltip"]'});

    window.data_changed = false;

    function unloadPage() {
        if (window.data_changed) {
            return "Nem mentett módosítások vannak az oldalon. Az Ok gombra kattintás után a művelet nem visszavonható!";
        }
    }
    window.onbeforeunload = unloadPage;

    // delete button with confirm/hidden form
    $(".delete-data").click(function () {
        swal({
            title: "Biztos?",
            // text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                var form = document.createElement("form");
                form.method = "POST";
                form.action = $(this).data("url");
                var csrf_input = document.createElement("input");
                csrf_input.value = $('meta[name=csrf-token]').attr("content");
                csrf_input.name = "_token";
                form.appendChild(csrf_input);
                var method_input = document.createElement("input");
                method_input.value = 'delete';
                method_input.name = "_method";
                form.appendChild(method_input);
                document.body.appendChild(form);
                form.submit();
            }
        });
        return false;
    });

    // bootstrap custom file input
    $(".main").on("change", ".custom-file input[type=file]", function () {
        $(this).siblings("label").html($(this).val().replace('C:\\fakepath\\', ''));
    });

});
