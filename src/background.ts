chrome.browserAction.onClicked.addListener(function (activeTab) {
        chrome.tabs.executeScript(activeTab.id, { file: "enterValidationMode.js" });
});

chrome.storage.local.get(
        ["__defaultCondition", "__defaultConditionValue"]
        , function (result) {
                if (result.__defaultCondition === undefined) {
                        alert("請設定[資料查詢視窗]的預設條件及設定值");
                        window.open("options.html");
                }
        });