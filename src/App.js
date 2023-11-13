import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr4tY8JZI1UpKIhOw5NxyirUnO9U89gHA",
  authDomain: "adam-penno-portfolio-react.firebaseapp.com",
  projectId: "adam-penno-portfolio-react",
  storageBucket: "adam-penno-portfolio-react.appspot.com",
  messagingSenderId: "581065537031",
  appId: "1:581065537031:web:5235f13a40c2bce3ae5ca2",
  measurementId: "G-93MB4TFZ3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;