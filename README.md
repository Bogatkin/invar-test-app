# Test app

Приложение сделано на основе react-boilerplate и использует react-dnd 

У меня немного не хватило времени и терпения, чтобы покрыть тестами Drag-n-Drop часть.
React-DnD не очень подружился с Jest из коробки и тесты компонентов заваливаются. Это можно пофиксить, но нужно немного времени.

## Demo
https://arcane-dawn-76223.herokuapp.com/

## Start app
Run `npm i` to install dependencies

Run `npm run start` to start app. App will be available at `http://localhost:3000`

## Run tests

`npm run test`

## ToDo

Если бы было больше времени на выполнение тестового задания, можно сделать:

- Сохранять состояние досок в localStorage
- Убрать мигание при добавлении элемента
- Пофиксить фон круглого элемента при перетаскивании
- Нормально покрыть тестами
