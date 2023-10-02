import html from "../core.js";
import { connect } from "../store.js";

const Footer = ({ todos, filter, filters }) => {
  return html`
    <footer class="footer">
      <span class="todo-count">
        <strong>
        ${todos.filter(filters.active).length}
        <!-- dùng 'filter' lọc theo điều kiện active & đếm ra số item đang active -->
        </strong> item left
      </span>
      <ul class="filters">
        ${Object.keys(filters).map(type => html`
          <li>
            <a class="${filter === type && 'selected'}" href="#"
              onclick="
              dispatch('switchFilter', '${type}')
              // console.log(typeof type)
              //'type' là String
              "
            >
              ${type[0].toUpperCase() + type.slice(1)}
            </a> 
          </li>
      `)}
        
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  `;
    /** Object.keys(filters).map()
     * Lặp qua `filter` sử dụng Object.key() để lấy ra `key`
     * 
     * //Viết hao chữ cái đầu bằng JS
     * type[0].toUpperCase(): lấy ra phần tử đầu và viết Hoa
     * 
     * // Nối chuỗi
     * type.slice(1)type.slice(1): nối cắt đi chữ cái đầu
     * 
     * // hiển thị trạng thái hiện tại
     * nếu như `filter` trong `reducer` mà bằng với `type (filters)` trong `Footer` => thêm class `selected`
     */
};

export default connect()(Footer);
