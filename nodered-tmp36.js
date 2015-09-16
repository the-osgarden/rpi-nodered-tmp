var tmp36 = require('tmp36');

module.exports = function(RED) {
    function piNoderedTmp(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            var t = new tmp36();
            msg.temp = t.temperature();
            console.log(msg);
            node.send(msg);
        });
    }
    RED.nodes.registerType("pi-nodered-tmp",piNoderedTmp);
}