import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, input, setInput, prevPrompt, resultData, loading } = useContext(Context);

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Naseer.</span></p>
          <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reiciendis!</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reiciendis!</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reiciendis!</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, reiciendis!</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="responses-container">
          {prevPrompt.map((prompt, index) => (
            <div className="response-box" key={index}>
              <p className="user-input">You: {prompt}</p>
              {resultData[index] && <p>Gemini: {resultData[index]}</p>}
            </div>
          ))}
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              type="text" 
              placeholder='Enter a Prompt Here' 
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent(input)} src={assets.send_icon} alt="" />
            </div>
          </div>
          {loading && <p>Loading...</p>}
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
