// File: responseHelper.js

'use strict';

module.exports.sendJSONResponse = function (values, res) {
    try {
        var data = {
            'status': 200,
            'values': values
        };
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
