export const chatListTmpl = `
<ul class="chat__list">
  {{#each list}}
    <li class="chat__item">
      <a class="chat__link" href="{{this.link}}">
        <div class="chat__author">
          <img class="profile__ava" src="{{this.user.avatar}}" alt="{{this.user.firstname}}">
          <div class="chat__user-info">
            <p class="chat__user-name">{{this.user.firstname}} {{this.user.lastname}}</p>
            <p class="chat__user-message">{{this.lastmessage}}</p>
          </div>
        </div>
        <div class="chat__message-info">
          <p class="chat__date">{{this.time}}</p>
          {{#if this.missed}}
            <span class="chat__missed">{{this.missed}}</span>
          {{/if}}
        </div>
      </a>
    </li>
  {{/each}}
</ul>
`;