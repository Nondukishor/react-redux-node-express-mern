"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.log("Backend running on http://localhost:", app_1.default.get('port'), app_1.default.get('env'));
});
exports.default = server;
//# sourceMappingURL=server.js.map