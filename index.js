const http = require('node:http');

const pages = new Map([
  ['/', '<h1>Hello World!</h1><h2>Кирило Чушенко, група 145</h2>'],
  ['/about', '<h1>About us</h1><p>Лабораторна робота №4 з Node.js.</p>'],
  ['/contact', '<h1>Contact us</h1><p>Контакт для зв’язку — Google Classroom курсу Web-розробка.</p>']
]);

const server = http.createServer((request, response) => {
  const path = request.url.split('?')[0];
  const page = pages.get(path);
  response.writeHead(page ? 200 : 404, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<!doctype html><html lang="uk"><meta charset="utf-8"><title>Node.js — ЛР №4</title>' +
    '<nav><a href="/">Головна</a> · <a href="/about">Про нас</a> · <a href="/contact">Контакти</a></nav>' +
    (page || '<h1>404 — Сторінку не знайдено</h1>') + '</html>');
});

server.listen(3000, () => console.log('Server started at http://localhost:3000/'));
