import React from 'react';


const Kontakt = () => {

  return (
    <div className="pt-[10%]">
      <img src="" alt="" />
      <div>

      </div>
      <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="w-[58%] grid grid-col-[30% 58%] gap-[12%]">
        <div className="flex flex-col gap-[1.2rem]">
          <article className="bg-green-500 p-[1.2rem] text-center ">
            <h4>Email</h4>
            <h5>adamchatila2020@gmail.com</h5>
            <a href="mailto:adamchatila2020@gmail.com" target="_blank" rel = "noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">

            <h4>Messanger</h4>
            <h5>Adam Chatila</h5>
            <a href="https://m.me/adam.chatila.54" target="_blank" rel = "noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">
            <h4>Whatsapp</h4>
            <h5>+4528732176</h5>
            <a href="https://api.whatsapp.com/send?phone=+4528732176" target="_blank" rel = "noreferrer" >Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTEIONS*/}
        <form>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Kontakt