import { AboutImage1, AboutImage2, AboutImage3, AboutImage4 } from '../../assets';
import './About.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

const About = () => {
  // Har bir kartaning alohida "counterOn" holatini yaratish
  const [counterOn1, setCounterOn1] = useState(false);
  const [counterOn2, setCounterOn2] = useState(false);
  const [counterOn3, setCounterOn3] = useState(false);
  const [counterOn4, setCounterOn4] = useState(false);

  return (
    <div className='about'   id='about' >
      <div className='container'>
        <div className="about-card">
          <img className='about-images' src={AboutImage1} alt="" />
          <ScrollTrigger
            onEnter={() => setCounterOn1(true)}
            onExit={() => setCounterOn1(false)}
            key={counterOn1 ? 1 : 0}
          >
            {counterOn1 && (
              <span>
                <h4 className='about-text'>
                  <CountUp start={0} end={25} duration={2} separator="" />
                </h4>
              </span>
            )}
          </ScrollTrigger>
          <p className='about-paragraph'>Yillik tajriba</p>
        </div>

        <div className="about-card">
          <img className='about-images' src={AboutImage2} alt="" />
          <ScrollTrigger
            onEnter={() => setCounterOn2(true)}
            onExit={() => setCounterOn2(false)}
            key={counterOn2 ? 1 : 0}
          >
            {counterOn2 && (
              <span>
                <h4 className='about-text'>
                  <CountUp start={0} end={1000} duration={2} separator="" />
                  +
                </h4>
              </span>
            )}
          </ScrollTrigger>
          <p className='about-paragraph'>Xursand mijozlar</p>
        </div>

        <div className="about-card">
          <img className='about-images' src={AboutImage3} alt="" />
          <ScrollTrigger
            onEnter={() => setCounterOn3(true)}
            onExit={() => setCounterOn3(false)}
            key={counterOn3 ? 1 : 0}
          >
            {counterOn3 && (
              <span>
                <h4 className='about-text'>
                  <CountUp start={0} end={100} duration={2} separator="" />
                  +
                </h4>
              </span>
            )}
          </ScrollTrigger>
          <p className='about-paragraph'>Texnik mutaxasis</p>
        </div>

        <div className="about-card">
          <img className='about-images' src={AboutImage4} alt="" />
          <ScrollTrigger
            onEnter={() => setCounterOn4(true)}
            onExit={() => setCounterOn4(false)}
            key={counterOn4 ? 1 : 0}
          >
            {counterOn4 && (
              <span>
                <h4 className='about-text'>
                  <CountUp start={0} end={1200} duration={2} separator="" />
                  +
                </h4>
              </span>
            )}
          </ScrollTrigger>
          <p className='about-paragraph'>Ochilgan qulflar</p>
        </div>
      </div>
    </div>
  );
};

export default About;
