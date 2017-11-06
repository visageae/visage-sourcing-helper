function sendFormData(formData) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "populate-form", formData: formData}, function (info) {
        });
    });
}

chrome.commands.onCommand.addListener(function (command) {

    if( command == "paste-profile-data") {
        var formData = {
            name: "Jeff Weiner",
            linkedInProfile: "https://www.linkedin.com/in/jeffweiner08/",
            currentJobTitle: "CEO",
            currentEmployer: "LinkedIn",
            countryOfResidence: "",
            city : "San Francisco Bay Area"
        };
        sendFormData(formData);
    }


});




