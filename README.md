# Web Player

Веб-приложение будет использоваться конечными пользователями для просмотра фильмов и сериалов с использованием обыкновенного веб-браузера. Предлагаем реализовать концепт **страницы поиска**. Эта страница показывает пользователю список рекомендованных фильмов и сериалов, а также позволяет искать медиа-контент по названию.

## Файлы

В `mock/search_page.png` можно ознакомиться с макетом, подготовленным дизайнером.
В `/api/` находятся файлы, которые имитируют ответы бэкенда.

## API

Единственный метод, который доступен - `GET api/discover`. В ответе перечислены фоновые изображения, которые необходимо ротировать с интервалом 5 секунд - `backgrounds`. Также в ответе перечислены рекомендуемые сериалы (`items`).

## Минимальный функционал

- все пункты в верхнем меню ведут на страницу поиска
- фоновые картинки ротируются с интервалом в 5 секунд
- в списке рекомендуемых сериалов постер должен заменяться ключевым кадром (`keyframe`) при наведении курсора мыши
- строка поиска сужает список рекомендуемых сериалов, поиск осуществляется по названию
- для имитации работы с реальным бэкендом, после изменения значения в строке поиска нужно добавить задержку в 0-1000 мс, прежде чем обновлять список рекомендаций

В рамках тестового задания достаточно реализовать версию для desktop и не заморачиваться с адаптивным лейаутом. Но если получится сделать, чтобы приложение выглядело хорошо также и с мобильных устройств, это будет плюсом.
