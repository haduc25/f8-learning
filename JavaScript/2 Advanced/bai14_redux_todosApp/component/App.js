import html from "../core.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";


const App = () => {
  return html`
    <section class="todoapp">
        ${Header()} <!-- Gọi đến function Header -->
        ${TodoList()} <!-- Gọi đến function TodoList -->
        ${Footer()}
    </section>
  `;
};

export default App;
