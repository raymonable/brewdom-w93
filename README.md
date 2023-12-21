# brewdom

### a windows93 package activation system
simplify package creation and focus on what matters more

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
append the following code to the VERY END of your installation script.</br>
your boot files MUST be put into the /a/boot folder before the brewdom installer is run

```js
fetch("https://cdn.jsdelivr.net/gh/raymonable/brewdom-w93@latest/installer.js")
    .then(_ => _.text())
    .then(_ => eval(_));
```
