(async () => {
    if (window.location.href.includes("/NaNaWeb/GP/Authentication") === false) {
        return;
    }

    var ifmNavigator = (<HTMLIFrameElement>document.getElementById("ifmNavigator")).contentWindow.document;
    var sysManageModule = Array.from(ifmNavigator.getElementsByTagName("p")).find(((el: { innerText: string; }) => el.innerText === "系統管理工具"));
    sysManageModule.click();
    await pause(0.3);

    var enterValidationMode = Array.from(document.getElementsByTagName("a")).find(((el: { innerText: string; }) => el.innerText === "啟動流程測試模式"));
    enterValidationMode.click();
    await pause(0.3);

    var ifmFucntionLocation = (<HTMLIFrameElement>document.getElementById("ifmFucntionLocation")).contentWindow.document;
    var chkFireValidationMode = (<HTMLInputElement>ifmFucntionLocation.getElementsByName("chkFireValidationMode")[0]);
    if (chkFireValidationMode.checked === false) {
        chkFireValidationMode.click();
        await pause(0.3);

        ifmFucntionLocation = (<HTMLIFrameElement>document.getElementById("ifmFucntionLocation")).contentWindow.document;
        var btnChooseUser = (<HTMLInputElement>ifmFucntionLocation.getElementById("btnChooseUser"));
        btnChooseUser.click();
    }
    else {
        chkFireValidationMode.click();
        await pause(1.5);

        ifmNavigator = (<HTMLIFrameElement>document.getElementById("ifmNavigator")).contentWindow.document;
        sysManageModule = Array.from(ifmNavigator.getElementsByTagName("p")).find(((el: { innerText: string; }) => el.innerText === "系統管理工具"));
        sysManageModule.click();
        await pause(0.3);

        var administratorProcessInstList = Array.from(document.getElementsByTagName("a")).find(((el: { innerText: string; }) => el.innerText === "管理流程"));
        administratorProcessInstList.click();
    }
})();

function pause(second: number) {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}