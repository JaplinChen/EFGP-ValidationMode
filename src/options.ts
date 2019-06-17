document.getElementById("save").addEventListener("click", function () {
    var defaultCondition = (<HTMLInputElement>document.querySelector("input[name=defaultCondition]:checked")).value;
    var defaultConditionValue = (<HTMLInputElement>document.getElementById("defaultConditionValue")).value;

    chrome.storage.local.set({
        __defaultCondition: defaultCondition,
        __defaultConditionValue: defaultConditionValue
    }, function () {
        alert("儲存完成");
        window.open("", "_self", "");
        window.close();
    });
});

chrome.storage.local.get(
    ["__defaultCondition", "__defaultConditionValue"]
    , function (result) {
        if (result.__defaultCondition !== undefined) {
            (<HTMLInputElement>document.querySelector("input[value=" + result.__defaultCondition + "]")).checked = true;
            (<HTMLInputElement>document.getElementById("defaultConditionValue")).value = result.__defaultConditionValue;
        }
    });