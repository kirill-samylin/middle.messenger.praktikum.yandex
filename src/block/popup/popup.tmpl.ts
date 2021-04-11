export const signUpTmpl:string = `
<div class="popup" id="regisration">
  <form class="popup__form" method="post">
    <h2 class="popup__title">{{title}}</h2>
    <ul class="popup__fields">
        <li class="popup__field">
          <label class="popup__label" for="email">Почта</label>
          <input id="email" class="popup__input" type="email" placeholder="Введите почту" required> 
          <span class="popup__error" id="error-email"></span>
        </li>
        <li class="popup__field">
          <label class="popup__label" for="login">Логин</label>
          <input id="login" class="popup__input" type="text" placeholder="Введите логин" minlength="6" maxlength="18" required>
          <span class="popup__error" id="error-login"></span>
        </li>
        <li class="popup__field">
          <label class="popup__label" for="name">Имя</label>
          <input id="name" class="popup__input" type="text" placeholder="Введите имя" minlength="2" maxlength="18" required>
          <span class="popup__error" id="error-name"></span>
        </li>
        <li class="popup__field">
          <label class="popup__label" for="lastname">Фамилия</label>
          <input id="lastname" class="popup__input" type="text" placeholder="Введите фамилию" minlength="2" maxlength="18" required>
          <span class="popup__error" id="error-lastname"></span>
        </li>
        <li class="popup__field">
          <label class="popup__label" for="tel">Телефон</label>
          <input id="tel" class="popup__input" type="tel" placeholder="+7 (909) 967 30 30" required data-msg="Введите правельный формат">
          <span class="popup__error" id="error-tel"></span>
        </li>
        <li class="popup__field">
          <label class="popup__label" for="password">Пароль</label>
          <input id="password" class="popup__input" type="password" placeholder="Введите пароль" minlength="6" maxlength="18" required>
          <span class="popup__error" id="error-password"></span>
        </li>
        <li class="popup__field">
          <label class="popup__label" for="passwordend">Пароль (ещё раз)</label>
          <input id="passwordend" class="popup__input" type="password" placeholder="Подтвержите пароль" required data-msg="Пароли не совпадают">
          <span class="popup__error" id="error-passwordend"></span>
        </li>
      </ul>
    <span class="popup__error {{errorclass}}">{{error}}</span>
    <button id="button-form" class="popup__button popup__button_disabled" type="submit" disabled>{{button}}</button>
    <a class="popup__link" href="{{url}}">{{link}}</a>
  </form>
</div>`;

export const signInTmpl:string = `
<div class="popup" id="auth">
  <form class="popup__form">
    <h2 class="popup__title">{{title}}</h2>
    <input id="login" class="input" type="text" placeholder="Логин" minlength="6" maxlength="18" required>
    <span class="popup__error" id="error-login"></span>
    <input id="password" class="input" type="text" placeholder="Пароль" minlength="6" maxlength="18" required>
    <span class="popup__error" id="error-password"></span>
    <span class="popup__error {{errorclass}}">{{error}}</span>
    <button id="button-form" class="popup__button popup__button_disabled" type="submit" disabled>{{button}}</button>
    <a class="popup__link" href="{{url}}">{{link}}</a>
  </form>
</div>`;