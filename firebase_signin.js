// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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

document.getElementById('SIsubmit').addEventListener('click', signin);

// Function to handle user login
function signin(event) {
  
  event.preventDefault();
  var email = document.getElementById('signInmail').value;
  var password = document.getElementById('signInpassword').value;

  // Use the Auth module from the v9 modular syntax
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Lấy thông tin người dùng sau khi đăng nhập
      var user = userCredential.user;

      // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
      // window.location.href = 'trang_chu.html';
      alert('Successfully signed in');
      window.location.href = 'trang_chu.html';
    })
    .catch((error) => {
      console.error(error.message);
      alert('Failed to sign in ' + error.message);
      document.getElementById('errorMessage').innerHTML = error.message;
    });
}
