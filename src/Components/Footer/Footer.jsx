import './Footer.css'
import { Insta, Logo, Phone, Tg, ilinki, youtubeIcon } from '../../assets'
 

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
       <a href="#"> <img className='footer-logo' src={Logo} alt="logo" /></a>
        <div className='footer-lists'>
            <ul className="footer-lists">
                <li className="footer-list">Manzil</li>
                <li className="footer-list">Toshkent shahar, Olmazor tumani, <br /> Qorakhamish 1/4</li>
            </ul>
 
        </div>
        <div className='footer-items'>
            <ul className="footer-item">
                <li className="footer-subline active">Biz bilan bog'laning : <img className='footer-phone' src={Phone} alt="phone" /></li>
                <li className="footer-subline">+998900915567 </li>
                <li className="footer-subline">+998909991435 </li>
                <li className="footer-subline">+998900222049 </li>
                <li className="footer-subline">+998997223839 </li>
                <li className="footer-subline">+998983606533 </li>

                {/* + +998997223839 +998983606533 */}
            </ul>
 
        </div>
        <div className='footer-sublinks'>
               <a href="" className="footer-iconic">Ijtimoiy tarmoqlarimiz : </a>
               <ul className='footer-module'>
    <li><a href="" className="footer-icons"><img src={Insta} className='footer-iconics insta' /></a></li>
    <li><a href="" className="footer-icons"><img src={ilinki} className='footer-iconics link' /></a></li>
</ul>
<ul className='footer-modules'>
    <li><a href="" className="footer-icons"><img src={youtubeIcon} className='footer-iconics you' /></a></li>
    <li><a href="" className="footer-icons"><img src={Tg} className='footer-iconics tel' /></a></li>
</ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
