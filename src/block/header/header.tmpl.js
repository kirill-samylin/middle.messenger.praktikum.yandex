export const headerTmpl = `
<header class="header">
    <nav class="header__menu">
      {{#each links}}
        <a class="header__link {{this.active}}" href="{{this.link}}">{{this.text}}</a>
      {{/each}}
    </nav>
    <div class="header__profile">
      <p class="profile__name">{{firstname}} {{lastname}}</p>
      <img class="profile__ava" src="{{avatar}}" alt="{{firstname}}">
    </div>
  </header>`;