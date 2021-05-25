import fs from 'fs';
let invoices = JSON.parse(fs.readFileSync('../01-start/invoices.json', 'utf-8'));
let play = JSON.parse(fs.readFileSync('../01-start/play.json', 'utf-8'));
import statement from './statement.mjs'

console.log(statement(invoices, play));
