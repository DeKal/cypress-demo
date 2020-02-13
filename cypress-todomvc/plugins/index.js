module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, args) => {
    // browser will look something like this
    // {
    //   name: 'chrome',
    //   displayName: 'Chrome',
    //   version: '63.0.3239.108',
    //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //   majorVersion: '63'
    // }

    if (browser.name === "chrome") {
      args.push("--start-fullscreen")
      args.push('--proxy-bypass-list=<-loopback>')
      
      // whatever you return here becomes the new args
      return args
    }

    if (browser.name === "electron") {
      // `args` is a `BrowserWindow` options object
      // https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
      args["fullscreen"] = true

      // whatever you return here becomes the new args
      return args
    }
  }),
  
  on('task', {
    loadFromDB() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(
          "Helloo World !!!"
        ), 2000)
      })
    }
  })
}
