// File: controller.js

'use strict';

const response = require('./res');
const connection = require('./koneksi');

// Menyatakan fungsi index sebagai properti dari module.exports
module.exports.index = function(req, res) {
    response.ok("Aplikasi REST API BERJALAN", res);
};
