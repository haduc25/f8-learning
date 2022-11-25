//Lắng nghe Event khi DOM đc tải xong => call mới đc gọi
document.addEventListener('DOMContentLoaded', () => {
    var courseId;
    var deleteForm = document.forms['delete-course-form'];
    var btnDeleteCourse = document.getElementById('btn-delete-course');
    //console.log(btnDeleteCourse);

    var checkboxAll = $('#checkbox-all');
    //console.log(checkboxAll);
    var courseItemCheckbox = $('input[name="courseIds[]"]'); //select cả input
    //console.log(courseItemCheckbox)

    //When dialog confirm clicked
    $('#delete-course-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        //var id = button.data('id');
        courseId = button.data('id');
        //console.log(id)
    });

    //When delete course btn clicked
    btnDeleteCourse.onclick = () => {
        //alert('welcome to hell - ' + courseId)

        deleteForm.action = '/courses/' + courseId + '?_method=DELETE';
        deleteForm.submit();
    };

    // Lắng nghe Event khi DOM onchange => jQuery
    // Checkbox all clicked
    checkboxAll.change(function (event) {
        //console.log(Math.random());
        //console.log($(this).prop('checked'));

        var isCheckedAll = $(this).prop('checked');
        //Shorten:
        courseItemCheckbox.prop('checked', isCheckedAll);
        /** // đã rút gọn lại bên trên
                if (isCheckedAll) {
                    courseItemCheckbox.prop('checked', isCheckedAll);
                }else{
                    courseItemCheckbox.prop('checked', isCheckedAll);
                }
            */
    });
});
