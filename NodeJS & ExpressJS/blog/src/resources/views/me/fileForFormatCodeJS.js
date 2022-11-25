//Lắng nghe Event khi DOM đc tải xong => call mới đc gọi
document.addEventListener('DOMContentLoaded', () => {
    var courseId;
    var deleteForm = document.forms['delete-course-form'];
    var btnDeleteCourse = document.getElementById('btn-delete-course');
    //console.log(btnDeleteCourse);

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
});
