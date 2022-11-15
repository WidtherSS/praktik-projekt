import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {IoIosSend} from 'react-icons/io'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import logo from '.././images/herologo.png'

const Nav = () => {
  return (
    <div className="relative z-50">
      <div className="fixed top-0 left-0 right-0">
                <div className="bg-[#162a41] w-full h-11  flex text-white89 justify-between">
            <div className="flex gap-4 ml-[20%] pt-2">
              <h2 className=" flex items-center text-[18px] text-white gap-1"> <IoIosSend/> 4000@dinmaegler.com</h2>
              <h2 className="text-[18px] flex items-center text-white  gap-1"> <BsFillTelephoneFill/> +45 7070 4000</h2>
            </div>
            <h2 className="mr-[12%] pt-2 text-[18px] text-white  flex items-center gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"> <BsFillPersonFill/> <a href="#"> Log ind</a></h2>
        </div>
        <nav className="flex justify-center items-center gap-[20%] pt-5 pb-5 bg-white">
            <div><img  src={logo} alt="" className="brightness-{10} h-[49px] w-[296px] ] "/></div>
            <div className="flex gap-6">
                <a className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"  href="/boligersalg">Boliger til salg</a>
                <a className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"  href="/mæglere">Mæglere</a>
                <a className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"  href="/favoritter">Mine favoritter</a>
                <Link className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"  to="/kontakt">Kontakt os</Link>
            </div>
            <Outlet/>
        </nav>
      </div>
    </div>
  )
}

export default Nav