var fs = require('fs');
var xlsx = require('node-xlsx').default;
var info = require('./info');

var columns = ['key', 'value'];
var dataRows = Object.values(info).map(item => Object.values(item))
 
const data = [columns, ...dataRows];
const options = {'!cols': [{ wch: 50 }, { wch: 50 } ]};

var buffer = xlsx.build([{name: "mySheetName", data: data}], options); // Returns a buffer

fs.writeFileSync('data.xlsx', buffer, 'binary');