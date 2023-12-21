/* 

brewdom
a windows93 v2 homebrew launcher

written by raymond @ 12/20/23 
v1.0.0

*/

le._apps["b"].exec = () => {
    var b = document.querySelector("*[data-exe='b'].ui_selected");
    if (!!b)
    {
        var n = b.closest(".ui_window");
        var a = n.getBoundingClientRect();
        var w = $window({
            title: "brewdom (/b/)",
            html: `
            <div class="ui_explorer_container">
                <div class="skin_inset_deep skin_light ui_explorer ui_explorer--icons ui_explorer--not_workspace ui_explorer--nav ui_explorer--not_local">

                </div>
            </div>`,
            top: a.top,
            left: a.left,
            width: a.width - 10,
            height: a.height - 30,
            animationIn: "none",
            icon: "/c/sys/skins/w93/devices/floppyB.gif",
            onclose: () => {
                console.log("closed")
                $window.destroy(n.getAttribute("data-window-id"));
            }
        });
        n.style.display = "none";

        var e = w.el.body.querySelector(".ui_explorer");
        if (homebrew != null)
            homebrew.forEach(item => {
                if (item.name != null && item.event != null) {
                    var i = document.createElement("div");
                    i.classList = "ui_icon ui_icon__file";
                    i.innerHTML = `
                        <img width="32" height="32" src="/c/sys/skins/w93/${item.icon ? item.icon + ".png" : "install.png"}">
                        <span>${item.name}</span>
                    `;
                    i.addEventListener("click", () => {
                        if (item.event)
                            item.event();
                        w.destroy();
                        if (item.quick)
                            n.style.display = "";
                        if (!item.quick)
                            $window.destroy(n.getAttribute("data-window-id"));
                    })
                    e.appendChild(i);
                }
            });
    }
}
