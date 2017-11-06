$(document).ready(function () {
    $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');

        if ($(this).find('.btn-primary').length>0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        if ($(this).find('.btn-danger').length>0) {
            $(this).find('.btn').toggleClass('btn-danger');
        }
        if ($(this).find('.btn-success').length>0) {
            $(this).find('.btn').toggleClass('btn-success');
        }
        if ($(this).find('.btn-info').length>0) {
            $(this).find('.btn').toggleClass('btn-info');
        }
        if ($(this).find('.btn-warning').length>0) {
            $(this).find('.btn').toggleClass('btn-warning');
        }
        $(this).find('.btn').toggleClass('btn-default');

    });
    $('form').submit(function(){
        var radioValue = $("input[name='options']:checked").val();
        if(radioValue){
            alert("You selected - " + radioValue);
        }
        return false;
    });
});