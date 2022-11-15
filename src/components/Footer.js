import React from 'react'
import logo from '.././images/herologo.png'
import {BsTelephoneFill} from 'react-icons/bs'
import email from '.././images/email-icone.png'
import map from '.././images/map-icone.png'
import phone from '.././images/phone-icone.png'
import { MdMarkEmailUnread } from 'react-icons/md'

const footer = () => {
    return (

<div>
        <div className="pl-[15%] pr-[15%] bg-[#F8F8FB]">
        <div className="pt-[80px]">
            <div className='w-[728px]'>
                <img src={logo} alt="logo" />
                <p className="text-[18px] font-normal leading-[30px] pt-[24px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            </div>

            <div className="flex pt-[60px] ">
                <div className="bg-white flex flex-col w-[444px] h-[434px]">
                    <div className="flex gap-3">
                        <img src={phone} alt="phone" className="pl-12 pt-12" />
                        <div className="flex flex-col justify-center gap-1 pt-12">
                            <h1 className='text-[12px] font-normal text-[#7B7B7B] '>Ring til os</h1>
                            <p className="text-[#333333] font-medium text-[18px]">+45 7070 4000</p>                        
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <img src={email} alt="phone" className="pl-12 pt-[32px]" />
                        <div className="flex flex-col justify-center gap-1 pt-[32px]">
                            <h1 className='text-[12px] font-normal text-[#7B7B7B] '>Send en mail</h1>
                            <p className="text-[#333333] font-medium text-[18px]">4000@dinmaegler.com</p>                        
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <img src={map} alt="phone" className="pl-12 pt-[32px]" />
                        <div className="flex flex-col justify-center gap-1 pt-[32px]">
                            <h1 className='text-[12px] font-normal text-[#7B7B7B] '>Butik</h1>
                            <p className="text-[#333333] font-medium text-[18px]">Stændertorvet 78, 4000 Roskilde</p>                        
                        </div>
                    </div>
                    <div className='pl-12 pt-[30px]'>
                        <h1 className="text-left text-[#333333] text-[18px] font-normal leading-[30px]">Din Mægler Roskilde, er din <br />  boligibutik i lokalområdet.</h1>
                    </div>
                </div>

                <div className="pl-[12%]" >
                    <h1 className='text-[24px] font-medium leading-[32px]'>Quick Links</h1>
                    <p className='text-[18px] text-[#333333] font-normal pt-3 leading-10'> <a href="#">Boliger til salg</a>  <br /> <a href="#">Mæglere</a>  <br /> <a href="#">Kontakt os</a>  <br /> <a href="#">Log ind / bliv bruger</a></p>
                </div>
            </div>
        </div>

        <div className="text-[#7B7B7B] flex flex-col pl-[56%] pb-20">
            <h4 className="text-[12px] font-normal">Medlem af </h4>
            <h1 className="text-[38px] font-[700] ">DMS</h1>
            <h3 className="text-[16px] font-normal">Dansk Mægler Sammenslutning</h3>
        </div>
    </div>

    <div className="bg-[#162A41] w-[100%] pt-[30px] pb-[30px]">
            <h1 className="text-[18px] text-white font-normal text-center">Layout By Jit Banik 2020</h1>
        </div>
</div>



)
}

export default footer