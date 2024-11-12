import Image from "next/image"
import Img2 from "@/assets/img/avatarbridge.png"

export default function Page2 (){
    return(
        <section>
            <div>
                <Image src={Img2} alt="img-section 2" />
            </div>
        </section>
    )
}