const electron = require("electron");
const { app, BrowserWindow } = electron;

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("dist/index.html");
});

app.on("window-all-closed", () => {
  app.quit();
});
