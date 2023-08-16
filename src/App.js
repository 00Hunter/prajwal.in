import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <span className="big-bold-text">Prajawal Gupta</span>
      <div className='abtme-div'>
        <span className="abtme">Hey! I am a Final Year BTech CSE student. I like to create things!!!</span>
      </div>
      <p className="white-text">
        {/* ... */}
      </p>
      <div className="box-stacks">
        <div className="box-stack">
          <div className="box">
            <button className="box-button" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.CheckPoint")}>Google Play</button>
          </div>
          <div className="box">
            <button className="box-button" onClick={() => window.open("https://github.com/00Hunter")}>GitHub</button>
          </div>
        </div>
        <div className="box-stack">
          <div className="box">
            <button className="box-button" onClick={() => window.open("https://linkedin.com/in/prajwal-gupta-8583a2243")}>LinkedIn</button>
          </div>
          <div className="box">
            <button className="box-button" onClick={() => window.open("https://instagram.com/prajwal_003_gupta?igshid=MzNlNGNkZWQ4Mg==")}>Instagram</button>
          </div>
        </div>
      </div>
      {/* <div > */}
      <button  className="combined-box" onClick={() => window.open("https://drive.google.com/file/d/15sD8Dshj2X_LXMZa1NzO7CslwrVJqYde/view?usp=sharing")}>Find Out More </ button>
      {/* </div> */}
      <div className="video-container">
        {/* <video className="side-video" controls height="500">
          <source uri="./vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default App;
