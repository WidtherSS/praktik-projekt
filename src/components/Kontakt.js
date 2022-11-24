import React from 'react';
import email from '.././images/email-icone.png'
import map from '.././images/map-icone.png'
import phone from '.././images/phone-icone.png'
import googlemap from '.././images/map-image.png'

const Kontakt = () => {

  return (
    <div>
    <div className="pt-[10%] pl-[15%] pr-[15%] ">
      <img src="" alt="" />
      <div>

      </div>
      <section>
      <h2 className="font-medium text-[30px] text-[#2A2C30]">Vi sidder klar til at besvare dine spørgsmål</h2>
      <p className="font-normal text-[18px] ">Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. <br /> Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>

      <div className="flex gap-[1.2rem] justify-between pt-[32px]">


        <form className="flex flex-col border-2 w-[62%]">
          <div className="flex justify-around pr-[4%] pl-[4%] pt-[20px]">
          <div>
          <h1 className="pb-[8px] font-normal text-[18px] text-[#333333] ">Navn</h1>
          <input className=" border w-[267px] h-[40px]" type="text" name="name" placeholder="    Indtast dit navn" required/>                        
          </div>
          <div > 
            <h1 className="pb-[8px] font-normal text-[18px] text-[#333333] ">Email</h1>
          <input className=" border w-[267px] h-[40px]"  type="email" name="email" placeholder="    Indtast din email" required/>            
          </div>            
          </div>
          <div className="pr-[5%] pl-[5%]" >
            <h1 className="pb-[8px] pt-[20px] font-normal text-[18px] text-[#333333] ">Emne</h1>
          <input className=" border w-full h-[40px]"  type="text" name="email" placeholder="    Indtast emne" required/>            
          </div>            
          <div className="pr-[5%] pl-[5%]">
            <h1 className="pb-[8px] pt-[20px] font-normal text-[18px] text-[#333333]  ">Besked</h1>
          <textarea className="  border w-full " name="message" rows="7" placeholder="    Indtast din besked... " required/>            
          </div>
          <div className="pr-[5%] pl-[5%] flex gap-2 pt-[20px] pb-[32px]">
          <input type="checkbox" id="news" name="news" value="news" />
          <h2>Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</h2>
          </div>
          <div className="pl-[5%] pt-[10px] pb-[20px]">
          <button className="w-[150px] h-[60px] font-medium text-[18px] bg-[#162A41] text-white 
                              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" type="submit">Send Besked</button>            
          </div>
        </form>

          {/*END OF CONTACT OPTEIONS*/}

        <div className=" box-border	w-[455px] border-2 flex flex-col justify-around text-center items-center">
          <article className="flex flex-col justify-center items-center pt-[50px]">
          <img src={phone} alt="phone" className="h-[50px] w-[50px]"/>
            <h4 className="font-medium text-[#2A2C30] text-xl pt-[12px] leading-8">Ring til os</h4>
            <h5 className="font-normal text-[#333333] p-[16px] text-lg">++45 7070 4000</h5>
          </article>
          <hr  className="w-[80%] pt-[45px] "/>
          <article className="flex flex-col justify-center items-center">
            <img src={email} alt="phone" className="h-[50px] w-[50px]" />
            <h4 className="font-medium text-[#2A2C30] text-xl pt-[12px] leading-8">send en mail</h4>
            <h5 className="font-normal text-[#333333] p-[16px] text-lg">4000@dinmaegler.dk</h5>
          </article>
          <hr  className="w-[80%] pt-[45px]"/>
          <article className="flex flex-col justify-center items-center pb-[50px]">
          <img src={map} alt="phone" className="h-[50px] w-[50px]"/>
            <h4 className="font-medium text-[#2A2C30] text-xl pt-[12px] leading-8">Besøg butikken</h4>
            <h5 className="font-normal text-[#333333] p-[16px] text-lg">Stændertorvet 78,</h5>
            <h5 className="font-normal text-[#333333] text-lg">4000 Roskilde</h5>
          </article>
        </div>
      </div>
    </section>
    </div>    
    <section className="pt-[5%]">
      <img src={googlemap} alt=""  className="max-w-full h-auto"/>
    </section>  
    </div>

  )
}

export default Kontakt