import './Forms.css'
const Forms = () => {
  return (
    <div className='form'>
      <div className='container'>
        <div className="form-left">
            <h3
             className='form-title'>Biz bilan bog'laning</h3>
            <label >Ismingizni Kiriting</label>
            <input type="text" className='form-input' />
            <label htmlFor="">Telefon raqamingizni kiriting</label>
            <input type="text " className='form-number' />
            <button>Yuborish</button>
        </div>
      </div>
    </div>
  )
}

export default Forms
