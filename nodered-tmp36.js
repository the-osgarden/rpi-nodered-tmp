var tmp36 = require('tmp36');
module.exports = function(RED) {
    function piNoderedTmp(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            var t = new tmp36({
                address: 120,
                base: 48,
                pin: 2,
                voltage: 3.3,
                interval: 300,
                samples: 20,
            });
            msg.temp = t.temperature();
            console.log(msg);
            node.send(msg);
        });
    }
    RED.nodes.registerType("pi-nodered-tmp", piNoderedTmp);
}