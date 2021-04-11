export const profileTmpl: string = `
<section class="profile">
  <img class="profile__avatar" src="{{avatar}}" alt="">
  <h1 class="profile__title">{{firstname}} {{lastname}}</h1>
  <ul class="profile__list">
    <li class="profile__item">
      <label class="profile__label">Почта</label>
      <input class="profile__input" type="text" value="{{email}}" disabled>
    </li>
    <li class="profile__item">
      <label class="profile__label">Логин</label>
      <input class="profile__input" type="text" value="{{login}}" disabled>
    </li>
    <li class="profile__item">
      <label class="profile__label">Имя</label>
      <input class="profile__input" type="text" value="{{firstname}}" disabled>
    </li>
    <li class="profile__item">
      <label class="profile__label">Фамилия</label>
      <input class="profile__input" type="text" value="{{lastname}}" disabled>
    </li>
    <li class="profile__item">
      <label class="profile__label">Имя в чате</label>
      <input class="profile__input" type="text" value="{{firstname}} {{lastname}}" disabled>
    </li>
    <li class="profile__item">
      <label class="profile__label">Телефон</label>
      <input class="profile__input" type="text" value="{{tel}}" disabled>
    </li>
  </ul>
  <ul class="profile__list">
    <li class="profile__item">
      <a class="profile__link" href="#">Изменить данные</a>
    </li>
    <li class="profile__item">
      <a class="profile__link" href="#">Изменить пароль</a>
    </li>
  </ul>
</section>`;