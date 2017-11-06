
var sendMessage = function(message, callback) {
    chrome.runtime.sendMessage(message, callback);
};

function sendFormData(formData) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "populate-form", formData: formData}, function (info) {
        });
    });
}



$(document).ready(function () {
   $("#paste-btn").click(function () {
       var formData = {
           name: "Jeff Weiner",
           linkedInProfile: "https://www.linkedin.com/in/jeffweiner08/",
           currentJobTitle: "CEO",
           currentEmployer: "LinkedIn",
           countryOfResidence: "",
           city : "San Francisco Bay Area"
       };
       sendFormData(formData);
   }) 

});
