export const signUpTmpl = `
<div class="popup" id="regisration">
  <form class="popup__form">
    <h2 class="popup__title">{{title}}</h2>
    <ul class="popup__fields">
        <li class="popup__field">
          <label class="popup__label" for="email">Почта</label>
          <input id="email" class="popup__input" type="email" placeholder="Введите почту">
        </li>
        <li class="popup__field">
          <label class="popup__label" for="login">Логин</label>
          <input id="login" class="popup__input" type="text" placeholder="Введите логин">
        </li>
        <li class="popup__field">
          <label class="popup__label" for="name">Имя</label>
          <input id="name" class="popup__input" type="text" placeholder="Введите имя">
        </li>
        <li class="popup__field">
          <label class="popup__label" for="lastname">Фамилия</label>
          <input id="lastname" class="popup__input" type="text" placeholder="Введите фамилию">
        </li>
        <li class="popup__field">
          <label class="popup__label" for="tel">Телефон</label>
          <input id="tel" class="popup__input" type="tel" placeholder="+7 (909) 967 30 30">
        </li>
        <li class="popup__field">
          <label class="popup__label" for="password">Пароль</label>
          <input id="password" class="popup__input" type="password" placeholder="Введите пароль">
        </li>
        <li class="popup__field">
          <label class="popup__label" for="passwordend">Пароль (ещё раз)</label>
          <input id="passwordend" class="popup__input" type="password" placeholder="Подтвержите пароль">
        </li>
      </ul>
    <span class="popup__error {{errorclass}}">{{error}}</span>
    <button onclick="{{stringifyFunc submit}}" class="popup__button" type="button">{{button}}</button>
    <a class="popup__link" href="{{url}}">{{link}}</a>
  </form>
</div>`;

export const signInTmpl = `
<div class="popup" id="auth">
  <form class="popup__form">
    <h2 class="popup__title">{{title}}</h2>
    <input id="login" class="input" type="text" placeholder="Логин">
    <input id="password" class="input" type="text" placeholder="Пароль">
    <span class="popup__error {{errorclass}}">{{error}}</span>
    <button onclick="{{stringifyFunc submit}}" class="popup__button" type="button">{{button}}</button>
    <a class="popup__link" href="{{url}}">{{link}}</a>
  </form>
</div>`;