const { app, BrowserWindow } = require("electron");
let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        },
        autoHideMenuBar: true
    });

    mainWindow.loadFile("index.html");
})