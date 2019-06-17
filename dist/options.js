document.getElementById("save").addEventListener("click", function () {
    var defaultCondition = document.querySelector("input[name=defaultCondition]:checked").value;
    var defaultConditionValue = document.getElementById("defaultConditionValue").value;
    chrome.storage.local.set({
        __defaultCondition: defaultCondition,
        __defaultConditionValue: defaultConditionValue
    }, function () {
        alert("儲存完成");
        window.open("", "_self", "");
        window.close();
    });
});
chrome.storage.local.get(["__defaultCondition", "__defaultConditionValue"], function (result) {
    if (result.__defaultCondition !== undefined) {
        document.querySelector("input[value=" + result.__defaultCondition + "]").checked = true;
        document.getElementById("defaultConditionValue").value = result.__defaultConditionValue;
    }
});
