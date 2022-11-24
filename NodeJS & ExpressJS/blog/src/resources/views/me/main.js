document.addEventListener('DOMContentLoaded', () => {
    $('#delete-course-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var id = button.data('id');
    });
});
