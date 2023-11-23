// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxSUgNPvToIUGldmsUXgGQXF10aSSH2Hs",
  authDomain: "webapplication-19930.firebaseapp.com",
  databaseURL: "https://webapplication-19930-default-rtdb.firebaseio.com",
  projectId: "webapplication-19930",
  storageBucket: "webapplication-19930.appspot.com",
  messagingSenderId: "240590364295",
  appId: "1:240590364295:web:072e52f18a04f146c12222",
  measurementId: "G-BJXFDHBEBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app); 

document.getElementById('submit').addEventListener('click', signup);

// Function to handle user signup
function signup() {
  var email = document.getElementById('signupEmailInput').value;
  var password = document.getElementById('signupPasswordInput').value;
  var username = document.getElementById('user').value;
  var repassword = document.getElementById('re-password').value;

  // Kiểm tra username và repassword không được null
  if (!username || !repassword) {
    alert('Username and repassword cannot be null');
    return;
  }

  // Kiểm tra repassword phải giống với password
  if (repassword !== password) {
    alert('Password and repassword do not match');
    return;
  }
  
  // Use the Auth module from the v9 modular syntax
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Lấy thông tin người dùng sau khi đăng ký
      var user = userCredential.user;

      // Lưu thông tin người dùng vào Realtime Database
      saveUserDataToDatabase(username, email, password);

      // Chuyển hướng đến trang chủ sau khi đăng ký thành công
      // window.location.href = 'trang_chu.html';
      alert('Successfully signed up');
    })
    .catch((error) => {
      console.error(error.message);
      alert('Failed to sign up ' + error.message);
      document.getElementById('errorMessage').innerHTML = error.message;
    });
}

// Function to save user data to the Realtime Database
function saveUserDataToDatabase(username, email, password) {
  const userRef = ref(database, 'users/' + email.replace('.',','));
  set(userRef, {
    username: username,
    password: password,
    email: email
    // Add other user data you want to save
  });
}
