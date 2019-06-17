var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(this, void 0, void 0, function* () {
    if (window.location.href.includes("/NaNaWeb/GP/Authentication") === false) {
        return;
    }
    var ifmNavigator = document.getElementById("ifmNavigator").contentWindow.document;
    var sysManageModule = Array.from(ifmNavigator.getElementsByTagName("p")).find(((el) => el.innerText === "系統管理工具"));
    sysManageModule.click();
    yield pause(0.3);
    var enterValidationMode = Array.from(document.getElementsByTagName("a")).find(((el) => el.innerText === "啟動流程測試模式"));
    enterValidationMode.click();
    yield pause(0.3);
    var ifmFucntionLocation = document.getElementById("ifmFucntionLocation").contentWindow.document;
    var chkFireValidationMode = ifmFucntionLocation.getElementsByName("chkFireValidationMode")[0];
    if (chkFireValidationMode.checked === false) {
        chkFireValidationMode.click();
        yield pause(0.3);
        ifmFucntionLocation = document.getElementById("ifmFucntionLocation").contentWindow.document;
        var btnChooseUser = ifmFucntionLocation.getElementById("btnChooseUser");
        btnChooseUser.click();
    }
    else {
        chkFireValidationMode.click();
        yield pause(1.5);
        ifmNavigator = document.getElementById("ifmNavigator").contentWindow.document;
        sysManageModule = Array.from(ifmNavigator.getElementsByTagName("p")).find(((el) => el.innerText === "系統管理工具"));
        sysManageModule.click();
        yield pause(0.3);
        var administratorProcessInstList = Array.from(document.getElementsByTagName("a")).find(((el) => el.innerText === "管理流程"));
        administratorProcessInstList.click();
    }
}))();
function pause(second) {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}
