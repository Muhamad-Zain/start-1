'use client'
import { GiLinkedRings } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { GrLocationPin } from "react-icons/gr";
import { FaPeopleRoof, FaGift } from "react-icons/fa6";
import { RiBankCardFill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { MdFileCopy } from "react-icons/md";


import style from './style.module.css'
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import AnimatedSection from "@/animation/animateToUp/animate";
import AnimateSee from "@/animation/animateSee/page";


export default function Page6({data, propsid}) {
    const [load, setLoad] = useState(false)
    const [load2, setLoad2] = useState(false)
    const [load3, setLoad3] = useState(false)
    const [gift, setGift] = useState(false)

    const buttonCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            if (text === data?.gift?.one?.rek ) {
                setLoad(true)
                setTimeout(() => {
                    setLoad(false)
                }, 2000);
            } else if(text === data?.gift?.two?.rek){
                setLoad2(true)
                setTimeout(() => {
                    setLoad2(false)
                }, 2000);
            } else if(text === data?.gift?.tree?.rek){
                setLoad3(true)
                setTimeout(() => {
                   setLoad3(false) 
                }, 2000);
            }

        } catch (error) {
            
        }
    }

    const handleGift = () => {
        setGift(!gift)
    }

    return(
        <section className={style.bg}>
            <AnimatedSection>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative my-20'>
                <AnimateSee>
                <GiLinkedRings  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>AKAD NIKAH</h3>
                <div className='flex justify-center items-center italic text-white text-3xl w-[90%] mx-auto text-center'>
                    {/* Hari */}
                    <p className='w-[30%] text-xl p-1'>{data?.date?.akad?.day}</p>
                    <div className='border-x-2 text-center px-4 w-[30%] '>
                        {/* Tanggal */}
                        <p>{data?.date?.akad?.date}</p>
                        {/* Bulan  */}
                        <p className='text-xl'>{data?.date?.akad?.mount}</p>
                    </div>
                    {/* Tahun  */}
                    <p  className='w-[30%] p-1 text-xl '>{data?.date?.years}</p>
                </div>
                <div className='text-center text-white text-sm w-2/3 m-auto my-10'>
                    <p>Pukul : {data?.date?.akad?.time} -selesai</p>
                    <ImLocation2  className=' my-5 m-auto'/>
                    <p className='font-bold my-2'>Bertempat di:</p>
                    <p className='text-sm'>{data?.location?.akad?.location}</p>
                    <Link href={`${data?.location?.akad?.link}`} className="bg-black flex justify-center items-center border-white border rounded-lg w-3/4 m-auto p-2 my-10 " >
                        <GrLocationPin />
                        Open Location
                    </Link>
                </div>
                </AnimateSee>
            </div>
            </AnimatedSection>
            <AnimatedSection>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative my-32'>
                <AnimateSee>
                <FaPeopleRoof  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>RESEPSI</h3>
                <div className='flex justify-center items-center italic text-white text-3xl w-[90%] mx-auto text-center'>
                    <p className='w-[30%] text-xl p-1'>{data?.date?.resepsi?.day}</p>
                    <div className='border-x-2 text-center px-4 w-[30%] '>
                        <p>{data?.date?.resepsi?.date}</p>
                        <p className='text-xl'>{data?.date?.resepsi?.mount}</p>
                    </div>
                    <p  className='w-[30%] p-1 text-xl'>{data?.date?.years}</p>
                </div>
                <div className='text-center text-white text-sm w-2/3 m-auto my-10'>
                    <p>Pukul : {data?.date?.resepsi?.time} -selesai</p>
                    <ImLocation2  className='my-5 m-auto'/>
                    <p className='font-bold my-2'>Bertempat di:</p>
                    <p className=''>{data?.location?.resepsi?.location}</p>
                    <Link href={`${data?.location?.resepsi?.link}`}className="bg-black flex justify-center items-center border-white border rounded-lg w-3/4 m-auto p-2 my-10 " >
                        <GrLocationPin />
                        Open Location
                    </Link>
                </div>
                </AnimateSee>
            </div>
            </AnimatedSection>
            <div id={propsid}>
            <AnimatedSection>
            {data?.gift?.one === data?.gift?.one ? (

            <div className='w-[90%] m-auto bg-black bg-opacity-70 rounded-3xl border-4 border-double  z-10 relative my-32'>
                <AnimateSee>
                    <div  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full text-lg p-8 -mt-14'>
                    <FaGift className='text-3xl m-auto' />
                    </div>
                    <h3 className='text-center font-sans text-white text-3xl mt-10 mb-2'>WEDDING GIFT</h3>
                    <div className="flex justify-center">
                    <button 
                        onClick={handleGift}
                        className='bg-black text-white border py-2 px-4 rounded-full'>Open Gift
                    </button>
                    </div>
                    <div className={`${gift ? ' max-h-[200rem] opacity-100' : ' max-h-0 opacity-0 '} transition-all duration-500 ease-in-out  overflow-hidden w-full flex flex-wrap justify-around py-5`}>

                    <div className='text-center text-white w-2/3 m-auto my-10'>
                        <p>Bagi Keluarga dan Sahabat yang ingin menirimkan hadiah, silakan menirimkannya lewat :</p>
                    </div>
                    { data?.gift?.one === data?.gift?.one ? (
                        <div className='w-[90%] m-auto text-white p-2' >
                        <div className=" bg-white bg-opacity-95 border-4 border-double border-slate-950 rounded-xl ">
                            <div className="flex items-center pl-5 p-2 pb-3 font-bold italic">
                                <BiSolidBank className=" text-black text-4xl " />
                                <h3 className="pl-2 text-3xl text-slate-950">{data?.gift?.one?.nameBank}</h3>
                            </div>
                            <div className="m-auto p-2">
                                <p className="text-slate-900 text-sm italic flex justify-around">{data?.gift?.one.rek}<span> a. n. {data?.gift?.one?.an}</span></p>
                                <button 
                                    onClick={() => buttonCopy(data?.gift?.one?.rek)}
                                    disabled={load? true : false}
                                    className='w-full py-1 bg-black bg-opacity-80 rounded-lg border flex justify-center items-center'>
                                    <MdFileCopy className='mr-2' />
                                    {load ? 'succes' : 'salin'}
                                </button>
                            </div>
                        </div>
                    </div>
                    ): null}
                    { data?.gift?.two === data?.gift?.two ? (
                        <div className='w-[90%] m-auto text-white p-2' >
                        <div className=" bg-white bg-opacity-95 border-4 border-double border-slate-950 rounded-xl ">
                            <div className="flex items-center pl-5 p-2 pb-3 font-bold italic">
                                <BiSolidBank className=" text-black text-4xl " />
                                <h3 className="pl-2 text-3xl text-slate-950">{data?.gift?.two?.nameBank}</h3>
                            </div>
                            <div className="m-auto p-2">
                                <p className="text-slate-900 text-sm italic flex justify-around">{data?.gift?.two.rek}<span> a. n. {data?.gift?.two?.an}</span></p>
                                <button 
                                    onClick={() => buttonCopy(data?.gift?.two?.rek)}
                                    disabled={load2 ? true : false}
                                    className='w-full py-1 bg-black bg-opacity-80 rounded-lg border flex justify-center items-center'>
                                    <MdFileCopy className='mr-2' />
                                    {load2 ? 'succes' : 'salin'}
                                </button>
                            </div>
                        </div>
                    </div>
                    ): null}
                    { data?.gift?.one === data?.gift?.tree ? (
                        <div className='w-[90%] m-auto text-white p-2' >
                        <div className=" bg-white bg-opacity-95 border-4 border-double border-slate-950 rounded-xl ">
                            <div className="flex items-center pl-5 p-2 pb-3 font-bold italic">
                                <BiSolidBank className=" text-black text-4xl " />
                                <h3 className="pl-2 text-3xl text-slate-950">{data?.gift?.tree?.nameBank}</h3>
                            </div>
                            <div className="m-auto p-2">
                                <p className="text-slate-700 text-sm italic flex justify-around">{data?.gift?.tree.rek}<span> a. n. {data?.gift?.tree?.an}</span></p>
                                <button 
                                    onClick={() => buttonCopy(data?.gift?.tree?.rek)}
                                    disabled={load3 ? true : false}
                                    className='w-full py-1 bg-black bg-opacity-80 rounded-lg border flex justify-center items-center'>
                                    <MdFileCopy className='mr-2' />
                                    {load3 ? 'succes' : 'salin'}
                                </button>
                            </div>
                        </div>
                    </div>
                    ): null}
                    </div>
                </AnimateSee>
            </div>
                    ) : null
                }
            </AnimatedSection>
            </div>
        </section>
    )
}
Page6.propTypes = {
    data: PropTypes.string.isRequired,
    propsid: PropTypes.string
}