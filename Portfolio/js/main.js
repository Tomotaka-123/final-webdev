/* prevent command injection */
/* if else statement */
$('form').submit(function(event) {
    event.preventDefault();
    var name = $('.input-text').val();
    if (name.match(/^[a-zA-Z0-9]+$/)) {
      $(this).unbind('submit').submit();
    } else {
      alert("Invalid characters in the input!");
    }
  });

/* prevent XSS */
$('form').submit(function(event) {
    event.preventDefault();
    var name = $('.input-text').val();
    var sanitized_name = sanitizeInput(name);
    $('.input-text').val(sanitized_name);
    $(this).unbind('submit').submit();
  });
  
  function sanitizeInput(input) {
    return $('<div>').text(input).html();
  }



