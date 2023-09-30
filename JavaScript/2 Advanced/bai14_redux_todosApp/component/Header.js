import html from "../core.js";

const Header = () => {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?" 
        autofocus
        onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())
          //console.log(event.keyCode) //lấy ra ketCode input from keyboard
          /** Nếu key nhấn xuống là Enter(keycode là 13)
           * thì sẽ dispatch()
           * dispatch('add', this.value.trim()))
           * dispatch với action là add
           * và value là this.value (ở dây là input.value)
           * và trim() để lại bỏ khoảng trắng 2 bên 
          */
        "
      >
    </header>
  `;
};

export default Header;
