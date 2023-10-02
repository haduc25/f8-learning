import html from "../core.js";
import { connect } from "../store.js";
import TodoItem from "./TodoItem.js";

const TodoList = ({ todos, filter, filters }) => {
  // console.log(props) // todos: Array(3)}
  // console.log(todos)
  console.log(filters); //{all: ƒ, active: ƒ, completed: ƒ}

  return html`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox"
      onchange="dispatch('toggleAll', this.checked) // this.checked): lấy ra trạng thái check của input "
      ${todos.every(filters.completed) && "checked"} /** * check tất cả 'todos'
      là 'completed' thì thêm 'attribute' là 'checked' */ />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.filter(filters[filter]).map(
          (todo, index) => TodoItem({ todo, index }) //truyền `todo` vào 1 object đẩy qua `TodoItem`
        )}
      </ul>
    </section>
  `;
  /** render theo điều kiện lọc
   * và value của `filter` lại trùng vs key của `filters` trong `reducer`
   * vậy nên(có thể dùng value của `filter` lấy ra function bên trong `filters`)
   * khi lấy ra chỉ cần `filters[filter]`
   * => cuối cùng dùng method `Array.filter()` để lọc qua
   * Before: ${todos.map((todo, index) => TodoItem({ todo, index }) )}
   * After: ${todos.filter(filters[filter]).map((todo, index) =>TodoItem({ todo, index }))}
   */
};

export default connect()(TodoList); // không cần phải viết ra `connector`
/** export default connect()(TodoList);
 * cú pháp gọi hàm 2 lần
 * là trong `connect` lại trả về 1 hàm mới
 * vì `connect` return lại 1 hàm nên để gọi hàm đó chúng ta có () thứ 2 (có thể là nhiều cặp ngoặc tùy vào số lượng hàm lồng nhau trong hàm gốc)
 */