import html from "../core.js";
import { connect } from "../store.js";

const TodoItem = ({ todo, index, editIndex }) => {
  // console.log(todo)

  return html`
    <!-- <li class="completed editing"> -->
    <li
      class="${todo.completed && "completed"} 
      ${editIndex === index && "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})
            // console.log(1)
            // khi check vào button dispatch 1 action
          "
        />
        <label ondblclick="dispatch('startEdit', ${index})"
          >${todo.title}</label
        >
        <button
          class="destroy"
          onclick="dispatch('destroy', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim())"
        onblur="dispatch('endEdit', this.value.trim())"
      />
    </li>
  `;

  /** Có thể truyền `editIndex` từ `TodoList.js`
   * ở đây tự gọi đến `connect()` và tự truyền `editIndex`
   * Logic: nếu `editIndex` bằng `index` hiện tại thì add thêm class `editing`
   * => ${editIndex === index && "editing"}"
   *
   * /////////////////// onkeyup ///////////////////
   * // bắt sự kiện khi đang 'editing' 
   * mà nhấn 'enter' * thì 'endEdit' & lấy value của input (this.value)
   * 
   * /////////////////// onkeyup ///////////////////
   * khi `blur` ra ngoài cũng tự `endEdit`
   */
};

export default connect()(TodoItem);
