const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
// const MenuBuilder = require("./menu");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // show: false,
    webPreferences: {
      webSecurity: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.ts"),
    },
  });
  const splashWindow = new BrowserWindow({
    width: 500,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });
  // splashWindow.loadFile("splash.html");
  // splashWindow.center();
  ipcMain.handle("ping", () => "pong");
  if (app.isPackaged) {
    // App is running in packaged (distribution) version
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  } else {
    // App is running in development version
    mainWindow.loadURL("http://localhost:5173/");
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
  mainWindow.center();

  mainWindow.webContents.on("crashed", (e) => {
    console.log("Renderer process crashed", e);
  });

  mainWindow.webContents.on(
    "did-fail-load",
    (event, errorCode, errorDescription, validatedURL) => {
      console.log(
        `Failed to load ${validatedURL}: ${errorCode} ${errorDescription}`
      );
    }
  );

  // menuBuilder.buildMenu();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
// app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
