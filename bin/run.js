let CurrentObjectStatesProcess = require('../obj/src/container/CurrentObjectStatesProcess').CurrentObjectStatesProcess;

try {
    new CurrentObjectStatesProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
