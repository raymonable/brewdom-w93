/*

brewdom installer
this works standalone too i think

written by raymond @ 12/20/23
v1.0.1

*/

var generateTempScript = () => {
    var current = [];
    if (window.homebrew)
        window.homebrew.forEach(item => {
            current.push(`"${item.name}"`);
        })
    localStorage["boot/brewdom-tmp.js"] = 
        `localStorage.removeItem("boot/brewdom-tmp.js");$explorer.refresh();var _=[${current.join(",")}];
        setTimeout(() => {
        var __=[];if(window.homebrew!=null){__ = window.homebrew.filter(item => {return !_.includes(item.name)})};
        if(__[0]!=null){$alert("installed '"+__.map(_ => {return _.name}).join(",")+"'.</br>open /b/ drive to access the new package.")}}, 50)`;
};

fetch(`https://cdn.jsdelivr.net/gh/raymonable/brewdom-w93@${window.bdbranch || "main"}/boot.js`)
    .then(_ => _.text())
    .then(bootScript => {
        localStorage["boot/brewdom.js"] = bootScript;
        generateTempScript();
        location.reload();
    })
