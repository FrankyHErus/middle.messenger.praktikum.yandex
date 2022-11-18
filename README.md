Данный веб-проект - мессенджер. Подключен parcel, используется трансформер для handlebars, все стили написаны при помощи scss. 

Является SPA, подключен TypeScript. Код проходит проверки ESLint (наследуются правила Airbnb), также одключен Stylelint.

Команды для запуска:
    
    "build": "parcel build index.html --no-cache"
    (собирает проект через parcel, запсукается на http://localhost:1234/)

    "start": "node ./server.js"
    (запускает проект при помощи express сервера на http://localhost:3000)

Ссылка на дизайн в Figma:
https://www.figma.com/file/KMFGI1h7pylLzD8G0NITfr/Chat-Design

Также сайт задеплоен в Netlify:
https://deploy-preview-5--ubiquitous-bonbon-eba96b.netlify.app/
