document.addEventListener('DOMContentLoaded', function() {
    var formValidation = document.getElementById('formValidation');
    
    formValidation.addEventListener('submit', function(event) {
      var mail = document.getElementById('mail');
      var password = document.getElementById('password');
      
      var mailValue = mail.value;
      var passwordValue = password.value;
      
      // Xử lý quy tắc kiểm tra
      var errors = {};
  
      if (!mailValue) {
        errors['mail'] = 'Vui lòng nhập Email';
      } else if (!isValidEmail(mailValue)) {
        errors['mail'] = 'Email sai định dạng (name@domain.com)';
      }
  
      if (passwordValue.length < 5) {
        errors['password'] = 'Mật khẩu cần ít nhất 5 ký tự';
      }
  
      // Hiển thị thông báo lỗi
      displayErrors(errors);
  
      // Nếu không có lỗi, submit form
      if (Object.keys(errors).length === 0) {
        formValidation.submit();
      }
  
      event.preventDefault(); // Ngăn chặn gửi form mặc định để xử lý bằng JavaScript
    });
  
    // Hàm kiểm tra định dạng email
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Hàm hiển thị thông báo lỗi
    function displayErrors(errors) {
      for (var field in errors) {
        var errorMessage = errors[field];
        var errorElement = document.getElementById(field + '-error');
  
        if (errorElement) {
          errorElement.innerHTML = errorMessage;
        }
      }
    }
  });
  