export const chatNavTmpl: string = `
<nav class="chat__nav">
  {{#if chatlist}}
    <input class="chat__search" type="text" placeholder="Поиск">
    <button class="chat__button chat__button_add" type="button"></button>
  {{else}}
    <a class="chat__back" href="index.html">Назад</a>
    <h3 class="chat__title">{{chatname}}</h3>
    <div class="chat__block">
      <button class="chat__button chat__button_edit" type="button"></button>
      <img class="profile__ava" src="{{chatava}}" alt="{{chatname}}">
    </div>
  {{/if}}
</nav>`;