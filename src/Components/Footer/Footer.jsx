import './Footer.css'
import { Logo } from '../../assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <img className='footer-logo' src={Logo} alt="logo" />
        <div className='footer-lists'>
            <ul className="footer-lists">
                <li className="footer-list">Manzil</li>
                <li className="footer-list">ds</li>
                <li className="footer-list">fds</li>
            </ul>
            <ul className="footer-lists">
                <li className="footer-list">f</li>
                <li className="footer-list">f</li>
                <li className="footer-list">f</li>
            </ul>
            <ul className="footer-lists">
                <li className="footer-list">f</li>
                <li className="footer-list">f</li>
                <li className="footer-list">f</li>
            </ul>
        </div>
        <div className='footer-items'>
            <ul className="footer-item">
                <li className="footer-subline">kontakt</li>
                <li className="footer-subline"></li>
                <li className="footer-subline"></li>
            </ul>
            <ul className="footer-item">
                <li className="footer-subline"></li>
                <li className="footer-subline"></li>
                <li className="footer-subline"></li>
            </ul>
            <ul className="footer-item">
                <li className="footer-subline"></li>
                <li className="footer-subline"></li>
                <li className="footer-subline"></li>
            </ul>
        </div>
        <div className='footer-sublinks'>
            <ul>
                <li><a href="" className="footer-icons">links</a></li>
                <li><a href="" className="footer-icons">f</a></li>
                <li><a href="" className="footer-icons">f</a></li>
                <li><a href="" className="footer-icons"></a></li>
                <li><a href="" className="footer-icons"></a></li>
                <li><a href="" className="footer-icons"></a></li>
            </ul>
            <p>para</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
