class NecroErr extends Error {
    constructor(message){
        super("");
        this.name = "NECROCSS_ERROR";
        this.message = `NecroCSS Error: ${message}`;
    }
}

class UnidentifiedPluginError extends NecroErr {
  constructor(pluginName) {
    super(`Unexpected Plugin found: ${pluginName}`);
    this.name = "UNIDENTIFIED_PLUGIN_ERROR";
  }
}

module.exports = { NecroErr , UnidentifiedPluginError };
