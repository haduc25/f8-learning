//Lắng nghe Event khi DOM đc tải xong => call mới đc gọi
document.addEventListener('DOMContentLoaded', () => {
    var courseId;
    //var containerForm = document.forms['container-form'];
    var containerForm = $('form[name="container-form"]'); //jQuery
    //console.log(containerForm);
    var deleteForm = document.forms['delete-course-form'];
    //console.log(deleteForm);
    var btnDeleteCourse = document.getElementById('btn-delete-course');
    //console.log(btnDeleteCourse);

    var checkboxAll = $('#checkbox-all');
    //console.log(checkboxAll);
    var courseItemCheckbox = $('input[name="courseIds[]"]'); //select cả input
    //console.log(courseItemCheckbox)

    var checkAllSubmitBtn = $('.check-all-submit-btn');
    //console.log(checkAllSubmitBtn)

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
        renderCheckAllSubmitBtn();
    });

    // Course item checkbox changed
    courseItemCheckbox.change(function (event) {
        //console.log(123)
        var lengthOfCheckboxIsChecked = $('input[name="courseIds[]"]:checked').length; //length of checkbox is checked in list courseIds[]
        var isCheckedAll = courseItemCheckbox.length === lengthOfCheckboxIsChecked; //length of checkbox
        //console.log(isCheckedAll);

        checkboxAll.prop('checked', isCheckedAll); // nếu isCheckedAll = fasle => checkboxAll = fasle => ngược lại
        renderCheckAllSubmitBtn();
    });

    /*// Check all submit button clicked
        checkAllSubmitBtn.click(function (event) {
            //console.log(213);
            event.preventDefault();

            var isSubmittable = !$(this).hasClass('disabled'); //nếu không có class disabled => true / ngược lại nếu có class disabled => false
            //console.log(isSubmittable)
            if (isSubmittable) {
                containerForm.submit();
            }
        });
        */

    // Case 1:
    /**
        // Check all submit button submit / bỏ submit = js => submit = html
        containerForm.on('submit', function (event) {
            var isSubmittable = checkAllSubmitBtn.hasClass('disabled'); //nếu có class disabled => true / ngược lại nếu không có class disabled => fasle | đã bỏ phủ định (!) not
            if (isSubmittable) {
                //nếu = true => có class disabled => k đủ đk submit => bỏ hành vi mặc định
                event.preventDefault();
            }
        })
        */

    // Re-render check all submit button
    function renderCheckAllSubmitBtn() {
        var checkedCount = $('input[name="courseIds[]"]:checked').length;
        //console.log(checkedCount);

        //case 1
        /**
            if (checkedCount > 0) {
                checkAllSubmitBtn.removeClass('disabled');
            } else {
                checkAllSubmitBtn.addClass('disabled');
            }
            */

        //case 2
        if (checkedCount > 0) {
            checkAllSubmitBtn.attr('disabled', false); //removeClass
        } else {
            checkAllSubmitBtn.attr('disabled', true); //addClass
        }
    }
});
