import html from "../core.js";
import { connect } from "../store.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";


const App = ({ todos }) => {
  return html`
    <section class="todoapp">
        ${Header()} <!-- Gọi đến function Header -->
        ${todos.length > 0 && TodoList()} <!-- Check nếu có todos mới Gọi đến function TodoList -->
        ${todos.length > 0 && Footer()}
    </section>
  `;
};

export default connect()(App);
