if (window.opener.location.href.includes("/NaNaWeb/GP/WMS/ValidateProcess/ValidateProcessMain")
    && window.location.href.includes("/NaNaWeb/GP/OpenWin/SingleDataChooser?hdnMethod=initDataChooser&hdnServiceName=User&hdnServiceType=SingleDataChooser&hdnOtherArguments=")) {
    var ddlConditionName = document.getElementById("ddlConditionName");
    var txtConditionValue = document.getElementById("txtConditionValue");
    var btnStartQuerying = document.getElementById("btnStartQuerying");
    chrome.storage.local.get(["__defaultCondition", "__defaultConditionValue"], function (result) {
        if (result.__defaultCondition !== undefined) {
            ddlConditionName.value = result.__defaultCondition;
            txtConditionValue.value = result.__defaultConditionValue;
            setTimeout(() => {
                btnStartQuerying.click();
                localStorage.setItem("firstTime", "Y");
            }, 500);
        }
    });
}
