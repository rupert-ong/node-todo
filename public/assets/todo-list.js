$(document).ready(function () {

  $('form').on('submit', function () {
    var item = $('form input');
    var todo = { item: item.val() };

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function (data) {
        location.reload();
      }
    });

    return false;
  });

  $('li').on('click', function () {
    var data = { id: $(this).data('id') };
    $.ajax({
      type: 'DELETE',
      url: '/todo/',
      data: data,
      success: function (data) {
        location.reload();
      }
    });
  });
});
