export const chatMessageTmpl: string = `
<div class="chat__communication">
  <ul class="chat__intervals">
    {{#each intervals}}
      <li class="chat__interval">
        <p class="chat__time">{{this.date}}</p>
        <ul class="chat__messages">
          {{#each this.messages}}
            <li class="chat_message">
              <img class="profile__ava" src="{{this.avatar}}" alt="{{this.firstname}}">
              <div class="chat__info">
                <div class="chat__user">
                  <p class="chat__name">{{this.firstname}} {{this.lastname}}</p>
                  <p class="chat__clock">{{this.time}}</p>
                </div>
                <p class="chat__text">{{this.text}}</p>
              </div>
            </li>
          {{/each}}
        </ul>
      </li>
    {{/each}}
  </ul>
</div>
`;