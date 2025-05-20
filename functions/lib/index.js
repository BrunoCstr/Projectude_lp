"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require('firebase-functions');
const next = require('next');
const path = require('path');
// production → NODE_ENV=production no deploy
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev,
    // aponta para a pasta .next gerada pelo `next build`
    conf: { distDir: path.join(__dirname, '../.next') }
});
const handle = app.getRequestHandler();
exports.nextServer = functions.https.onRequest(async (req, res) => {
    await app.prepare();
    return handle(req, res);
});
//# sourceMappingURL=index.js.map