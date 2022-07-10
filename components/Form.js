export default function Form() {
  return (
    <section className='form__container'>
      <div className='form__title__container'>
        <h3>QUESTION? </h3>
        <h3>WE ARE HERE TO HELP!</h3>
      </div>
      <form className='form'>
        <div className='form__first__row'>
          <div className='input__group'>
            <label>Name</label>
            <input type='text' placeholder='' />
          </div>

          <div className='input__group'>
            <label>Email</label>
            <input type='email' placeholder='' />
          </div>
        </div>

        <div className='input__group'>
          <label>Message</label>
          <textarea rows='5' placeholder=''></textarea>
        </div>

        <button className='form__btn'>SEND</button>
      </form>
    </section>
  );
}
