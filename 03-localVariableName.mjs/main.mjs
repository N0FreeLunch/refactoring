import fs from 'fs';
let invoices = JSON.parse(fs.readFileSync('../01-start/invoices.json', 'utf-8'));
let play = JSON.parse(fs.readFileSync('../01-start/play.json', 'utf-8'));
import payment from './payment.mjs'

console.log(payment(invoices, play));
