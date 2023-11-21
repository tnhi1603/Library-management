// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcX7_hiolrMGcKfgQb5YVxS9Ey6i8KcQ4",
  authDomain: "library-a19b0.firebaseapp.com",
  projectId: "library-a19b0",
  storageBucket: "library-a19b0.appspot.com",
  messagingSenderId: "312331179208",
  appId: "1:312331179208:web:bc044b18a56431db1281fd",
  measurementId: "G-ZC3TLDV2JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Function to handle user signup
function signup() {
  var email = document.getElementById('signupEmailInput').innerHTML;
  var password = document.getElementById('signupPasswordInput').innerHTML;

  // Use the Auth module from the v9 modular syntax
  const auth = getAuth(firebaseApp);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Lấy thông tin người dùng sau khi đăng ký
      var user = userCredential.user;

      // Chuyển hướng đến trang chủ sau khi đăng ký thành công
      window.location.href = 'trang_chu.html';
    })
    .catch((error) => {
      document.getElementById('errorMessage').innerHTML = error.message;
    });
}