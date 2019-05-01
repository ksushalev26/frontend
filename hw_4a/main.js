$(function() {
  var placeholderFirstName = 'Enter your first name';
  var placeholderLastName = 'Enter your last name';
  var placeholderPassword = 'Enter your password';
  var id = 1;
  
  
  $('input[name=firstName]').focus(function() {
    if ($(this).val() === placeholderFirstName) {
      $(this).val('');
    }
  });
  
  $('input[name=firstName]').blur(function() {
    if (!$(this).val()) {
      $(this).val(placeholderFirstName);
    }
  });
  
  $('input[name=lastName]').focus(function() {
    if ($(this).val() === placeholderLastName) {
      $(this).val('');
    }
  });
  
  $('input[name=lastName]').blur(function() {
    if (!$(this).val()) {
      $(this).val(placeholderLastName);
    }
  });
  
  $('input[name=password]').focus(function() {
    if ($(this).val() === placeholderPassword) {
      $(this).val('');
      $('input[name=password]').attr('type', 'password');
    }
  });
  
  $('input[name=password]').blur(function() {
    if (!$(this).val()) {
      $('input[name=password]').attr('type', 'text');
      $(this).val(placeholderPassword);
    }
  });
  
  $('form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    
    var obj = {};
    data.forEach(function(input) {
      obj[input.name] = input.value;
    })
    console.log(obj);
    
    $('.red').remove();
    
        
    if (!obj.firstName.length || obj.firstName === placeholderFirstName) {
      $('<div class="red">required</div>').insertAfter('div#firstName');      
    }
    
    if (!obj.lastName.length || obj.lastName === placeholderLastName) {
      $('<div class="red">required</div>').insertAfter('div#lastName');      
    }
    
    if (!obj.password.length || obj.password === placeholderPassword) {
      $('<div class="red">required</div>').insertAfter('div#password');      
    }
    
    if (obj.password.length > 0 && obj.password.length < 8 ) {
      $('<div class="red">min length - 8 chars</div>').insertAfter('div#password');      
    }
    
    if (!obj.firstName.length || obj.firstName === placeholderFirstName || !obj.lastName.length || obj.lastName === placeholderLastName ||!obj.password.length || obj.password === placeholderPassword || obj.password.length > 0 && obj.password.length < 8) {
      return;
    }
    
    $('input:eq(0)').val('');
    $('input:eq(1)').val('');
    $('input:eq(2)').val('');
    
    $('tbody').append('<tr><td>' + id++ + '</td><td>' + obj.firstName + '</td><td>' + obj.lastName + '</td><td>' + obj.password + '</td><td><input type="checkbox"></td></tr>');
    
    
  
    if (obj.firstName && obj.lastName && obj.password) {
      
      console.log('hello')
      $('<input type="checkbox">').change(function() {
        //$(this).val();
        $(this).attr('checked');
    })
    }
    
  });
  
});