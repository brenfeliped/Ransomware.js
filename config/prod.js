const path = require("path")
const extensions = require('./extensions')

const devConfig = {
  remoteServer: "http://yourdomain:3333",
  extensions,
  symetricKeyPath: path(__dirname, "..", "secret.key"),
  privateKeyPath: path.join(__dirname, "..", "private.key"),
  passphasePath: path.join(__dirname, "..", "passphrase.key")
};

module.exports = devConfig;