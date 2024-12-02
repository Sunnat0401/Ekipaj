import { Door1, Door2, Door3, Door4, Door5, Door6, DoorIcon1, DoorIcon2, DoorIcon3, DoorIcon4, DoorIcon5, DoorIcon6 } from '../../assets'
import './Services.css'
const Services = () => {
  return (
    <div className='services ' id='service'>
      <div className='container'>
        <div className='services-card'>
            <img className='services-image' src={Door1} alt="image" />
                <h2 className='services-title'>Eshik qulfini ochish</h2>
                <p className='services-paragraph'>
                Uyingiz xavfsizligi birinchi o'rinda turadi va bu xavfsizlikning asosiy elementlaridan biri eshik qulflarini to'g'ri o'rnatishdir.
                </p>
                <div className='service-group'>
<button className='services-button'>
  <a href="#contact" className="services-anchor">Ko'proq bilish</a>
</button>

                    <div className='service-icons'><img src={DoorIcon1} alt="icon" className='services-icon' /></div>
                </div>
        </div>
        <div className='services-card'>
            <img className='services-image' src={Door2} alt="image" />
                <h2 className='services-title'>Murvat qulfi</h2>
                <p className='services-paragraph'>
                Uyingizni himoya qilish haqida gap ketganda, siz ko'rishingiz mumkin bo'lgan eng samarali choralardan biri bu yuqori sifatli qulflarni o'rnatishdir.
                </p>
                <div className='service-group'>
<button className='services-button'>
  <a href="#contact" className="services-anchor">Ko'proq bilish</a>
</button>

                    <div className='service-icons'><img src={DoorIcon2} alt="icon" className='services-icon' /></div>
                </div>
        </div>
        <div className='services-card'>
            <img className='services-image' src={Door3} alt="image" />
                <h2 className='services-title'>Xavfsizlik tizimi</h2>
                <p className='services-paragraph'>
                Bizning aqlli uy xavfsizlik tizimlari uzluksiz himoyani ta'minlash uchun eng yangi texnologiyalarni birlashtiradi.                 </p>
                <div className='service-group'>
<button className='services-button'>
  <a href="#contact" className="services-anchor">Ko'proq bilish</a>
</button>

                    <div className='service-icons'><img src={DoorIcon3} alt="icon" className='services-icon' /></div>
                </div>
        </div>
        <div className='services-card'>
            <img className='services-image' src={Door4} alt="image" />
                <h2 className='services-title'>Avtomobil eshigi qulfi</h2>
                <p className='services-paragraph'>
                Bizning avtomobil xavfsizligi bo'yicha mutaxassislarimiz avtomobil eshiklari qulflari  haqida chuqur bilimga ega.                </p>
                <div className='service-group'>
<button className='services-button'>
  <a href="#contact" className="services-anchor">Ko'proq bilish</a>
</button>

                    <div className='service-icons'><img src={DoorIcon4} alt="icon" className='services-icon' /></div>
                </div>
        </div>
        <div className='services-card'>
            <img className='services-image' src={Door5} alt="image" />
                <h2 className='services-title'>Kalitlarni Tiklash</h2>
                <p className='services-paragraph'>
                Our experienced technicians are skilled in the art of key duplication. They understand the intricacies of different key types.                </p>
                <div className='service-group'>
<button className='services-button'>
  <a href="#contact" className="services-anchor">Ko'proq bilish</a>
</button>

                    <div className='service-icons'><img src={DoorIcon5} alt="icon" className='services-icon' /></div>
                </div>
        </div>
        <div className='services-card'>
            <img className='services-image' src={Door6} alt="image" />
                <h2 className='services-title'>Xavfsiz qulf</h2>
                <p className='services-paragraph'>
                Xavfsiz qulflar sizning qimmatbaho narsalaringizni xavfsiz saqlashda hal qiluvchi rol o'ynaydi. An'anaviy kombinatsiyalangan .                </p>
                <div className='service-group'>
<button className='services-button'>
  <a href="#contact" className="services-anchor">Ko'proq bilish</a>
</button>

                    <div className='service-icons'><img src={DoorIcon6} alt="icon" className='services-icon' /></div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Services
