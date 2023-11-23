import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { MdCallEnd } from "react-icons/md";




export default function SocialIcons() {
  return (
    <aside className="flex gap-5">
        <Link href='https://www.linkedin.com' target="blank">
        <BsLinkedin />
        </Link>
        <Link href='tel: +23490388925821'>
        <MdCallEnd />
        </Link>
        <SiGmail />
        
        <IoLogoGithub />
        <GrInstagram />



    </aside>
  )
}
