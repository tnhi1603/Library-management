document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formValidation');

    form.addEventListener('submit', function(event) {
        // Ngăn chặn hành vi mặc định của form
        event.preventDefault();

        // Gọi hàm kiểm tra
        if (validateForm()) {
            // Nếu hàm kiểm tra trả về true, thực hiện hành động submit
            form.submit();
        }
    });

    function validateForm() {
        // Lấy các trường input và các giá trị
        var user = document.getElementById('user').value;
        var mail = document.getElementById('signupEmailInput').value;
        var password = document.getElementById('signupPasswordInput').value;
        var rePassword = document.getElementById('re-password').value;

        // Kiểm tra các điều kiện và hiển thị thông báo lỗi nếu cần
        var userError = validateUser(user);
        var mailError = validateEmail(mail);
        var passwordError = validatePassword(password);
        var rePasswordError = validateRePassword(password, rePassword);

        // Hiển thị thông báo lỗi (nếu có)
        displayError('user', userError);
        displayError('mail', mailError);
        displayError('password', passwordError);
        displayError('re-password', rePasswordError);

        // Kiểm tra xem có lỗi không
        return !(userError || mailError || passwordError || rePasswordError);
    }

    function validateUser(user) {
        // Kiểm tra độ dài tên tài khoản
        return user.length < 4 ? 'Tên không hợp lệ (Tối thiểu 4 ký tự)' : '';
    }

    function validateEmail(mail) {
        // Kiểm tra định dạng email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) ? '' : 'Email sai định dạng (name@domain.com)';
    }

    function validatePassword(password) {
        // Kiểm tra độ dài mật khẩu
        return password.length >= 5 ? '' : 'Mật khẩu cần ít nhất 5 ký tự';
    }

    function validateRePassword(password, rePassword) {
        // Kiểm tra xác nhận mật khẩu
        return password === rePassword ? '' : 'Mật khẩu không trùng khớp';
    }

    function displayError(field, error) {
        // Hiển thị thông báo lỗi dưới mỗi trường input
        var errorElement = document.getElementById(field + '-error');
        if (error) {
            errorElement.textContent = error;
        } else {
            errorElement.textContent = '';
        }
    }
});
