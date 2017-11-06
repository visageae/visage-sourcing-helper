/**
 * Created by Oshan on 10/27/2017.
 */

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


function populateForm(formData) {
    var form = $("#submissionForm");
    var name = form.find("#name").val(formData.name).trigger('input').trigger('change');
    name[0].dispatchEvent(new Event("input", { bubbles: true }));
    var linkedInProfile = form.find("#linkedInProfile").val(formData.linkedInProfile).trigger('input').trigger('change');
    linkedInProfile[0].dispatchEvent(new Event("input", { bubbles: true }));
    var jobTitle = form.find("#jobTitle").val(formData.currentJobTitle).trigger('input').trigger('change');
    jobTitle[0].dispatchEvent(new Event("input", { bubbles: true }));
    var employer = form.find("#employer").val(formData.currentEmployer).trigger('input').trigger('change');
    employer[0].dispatchEvent(new Event("input", { bubbles: true }));
    var cor = form.find("#fl-input-60").val(formData.countryOfResidence).trigger('input').trigger('change');
    cor[0].dispatchEvent(new Event("input", { bubbles: true }));
    var city = form.find("#city").val(formData.city).trigger('input').trigger('change');
    city[0].dispatchEvent(new Event("input", { bubbles: true }));
    console.log(formData);
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == 'populate-form') {
        populateForm(request.formData);

    }
});

$(document).ready(function () {
   
});






