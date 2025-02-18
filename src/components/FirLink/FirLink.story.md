# FirLink

Компонент `FirLink` представляет собой кастомную ссылку, которая оборачивает стандартный HTML-элемент `<a>` и предоставляет возможность настройки через свойства.

## Использование

```vue
<script setup lang="ts">
import FirLink from './FirLink.vue';
</script>

<template>
  <FirLink href="https://example.com">
    Перейти на Example.com
  </FirLink>
</template>
```

## Свойства (Props)

|Свойство|Тип|Обязательно|По умолчанию|Описание|
|-|-|-|-|-|
| href | string | Нет | '' | URL-адрес, на который будет вести ссылка. |
| Другие атрибуты | — | Нет | — | Поддерживаются все стандартные атрибуты HTML-элемента <a>, такие как target, rel, title и другие. |

## Слоты
**По умолчанию (default)**<br/>
Содержимое, которое будет отображаться внутри ссылки.

## Стилизация
Компонент использует класс fir-link__root для стилизации корневого элемента. Вы можете переопределить стили, используя этот класс в вашем CSS.
```css
.fir-link__root {
  color: blue;
  text-decoration: none;
}

.fir-link__root:hover {
  text-decoration: underline;
}
```