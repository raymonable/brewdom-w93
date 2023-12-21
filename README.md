# brewdom

### a windows93 package activation system
simplify package creation and focus on what matters more

![YEAH!!! brewdom](https://github.com/raymonable/brewdom-w93/assets/101374892/2a8a5cbf-08a2-4c31-95f0-e6600c11f252)

## installation

run the following in your terminal or devtools
```js
fetch("https://cdn.jsdelivr.net/gh/raymonable/brewdom-w93@"+(window.bdbranch || "main")+"/installer.js")
    .then(_ => _.text())
    .then(_ => eval(_));
```

## usage

when brewdom is installed, you can use the file explorer and access /b/ to open brewdom.</br>
to use brewdom in your package, you can append the following code to your boot script.

```js
if(!window.homebrew)window.homebrew=[];window.homebrew.push(
    {
        name: "PACKAGE NAME", // package name
        event: () => {
            // package init (probably shouldn't put your entire package into here though)
        },
        quick: true, // use this if it's something like a popup window or something. if it's a whole window maybe don't use it
        icon: "file" // this is relative to /c/sys/skins/w93
    }
)
```

brewdom can also work in your installer.</br>
append the brewdom installer code (that is above) to the *very end* of your installation script.</br>
your boot files **must** be put into the /a/boot folder before the brewdom installer is run or it will malfunction.

if you use brewdom in your package it's very, **very** recommended that it's mentioned in the README.</br>
also, feel free to put a GitHub Issue in this repository and we can add your package to the honorable mentions.

## packages using brewdom

[wallpaper-brewdom](https://github.com/raymonable/wallpaper-brewdom/tree/main) by raymond (me)
