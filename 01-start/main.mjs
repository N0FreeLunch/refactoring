import fs from 'fs';
let invoices = JSON.parse(fs.readFileSync('./invoices.json', 'utf-8'));
let play = JSON.parse(fs.readFileSync('./play.json', 'utf-8'));
import payment from './payment.mjs'

console.log(payment(invoices, play));
