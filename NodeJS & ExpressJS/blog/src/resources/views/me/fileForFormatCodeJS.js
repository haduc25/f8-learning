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
    // Checkbox all changed
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

    // Course item checkbox changed
    courseItemCheckbox.change(function (event) {
        //console.log(123)
        var lengthOfCheckboxInList = $('input[name="courseIds[]"]:checked').length; //length of checkbox is checked in list courseIds[]
        var isCheckedAll = courseItemCheckbox.length === lengthOfCheckboxInList; //length of checkbox
        //console.log(isCheckedAll);

        checkboxAll.prop('checked', isCheckedAll); // nếu isCheckedAll = fasle => checkboxAll = fasle => ngược lại
    });
});
