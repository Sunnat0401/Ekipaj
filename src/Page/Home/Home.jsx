import React from 'react'
import './Home.css'
import { HomeImage } from '../../assets'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
          <div className='home-left'>
          <h1 className='home-title'>
  <span className='home-subline'>E</span>kipaj xizmatiga xush kelibsiz!
</h1>
                <p className='home-subtitle'>Ishonchlilik va tajriba har qanday obro'li qulfochi xizmatining asosidir. Professional qulfochilar turli xil qulf turlarini hal qilish uchun zarur bo'lgan bilim va ko'nikmalarga ega. An'anaviy mexanik qulflardan tortib, zamonaviy aqlli qulflargacha, ularning tajribasi har bir muammoni aniqlik va e'tibor bilan hal qilishni kafolatlaydi. 24/7 davomida mavjudlik katta afzallikdir. Qulf bilan bog'liq favqulodda vaziyatlar odatdagi ish vaqtiga bo'ysunmaydi; ular kun yoki tunning istalgan vaqtida yuz berishi mumkin. Kecha-kunduz ishlaydigan qulfochi xizmati har qanday vaqtda yordam berishga tayyor bo'lib, mijozga xotirjamlikni ta'minlaydi.</p>
                <button className='home-btn'><a href="#" className='home-anchor'>Bog'lanish</a></button>
          </div>
          <img className='home-Image' src={HomeImage} alt="image" />
      </div>
    </div>
  )
}

export default Home
