'use client'
import { addDataToFirebase } from "@/components/firebase/initialFirebase";
import { useState } from "react"


export default function AddData() {
    const [data, setData]= useState({
        name:{nameOne:'',nameTwo:'',namaLengkap:{nameOne:'',nameTwo:''}},
        date:{akad:{date:'',day:'',month:'',time:''},resepsi:{date:'',day:'',month:'',time:''},all:'',years:''},
        location:{akad:{link:'', location:''},resepsi:{link:'', location:''}},
        gift:{one:{nameBank:'',rek:'',an:''},two:{nameBank:'',rek:'',an:''},tree:{nameBank:'',rek:'',an:''}},
        parent:{nameOne:'',nameTwo:''},
        sosmed:{mens:{ig:'',facebook:''},grils:{ig:'',facebook:''}},
        expresion:''

    })
    console.log(data);
    

  const updateNestedState = (path, value) => {
    setData(prevData => {
      const keys = path.split(".");
      const lastKey = keys.pop();
      const deepObject = keys.reduce((acc, key) => acc[key] = { ...acc[key] }, prevData);
      deepObject[lastKey] = value;
      return { ...prevData };
    });
  };
    const handleChange = e => {
        const { name, value } = e.target;
        updateNestedState(name, value);
      };

      const [id, setId] = useState('')
    const handleSend = async (e) => {
        e.preventDefault()

        await addDataToFirebase(id,data)

        
    }
    return(
        <section className="min-h-screen bg-slate-400 p-5">
            <div>
                <h3 className="text-center text-2xl font-serif italic">Add Date to template  start-1</h3>
                <input className="p-2 rounded-md outline-none mt-10" placeholder="Buat id" onChange={(e) => setId(e.target.value)} required />
                <form onSubmit={handleSend}  className="mb-10">
                    <label className="text-xl italic font-bold">Nama</label>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="name.nameOne" placeholder="Nama" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="name.nameTwo" placeholder="Nama" />

                    <label className="text-xl italic font-bold">Nama Lengkap</label>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="name.nameLengkap.nameOne" placeholder="Nama Lengkap"/>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="name.nameLengkap.nameTwo" placeholder="Nama Lengkap"/>

                    <label className="text-xl italic font-bold">Nama Orang Tua</label>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="parent.nameOne" placeholder="Nama Ortu " />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="parent.nameTwo" placeholder="Nama Ortu " />

                    <label className="text-xl italic font-bold">Date</label>
                    <p>Akad</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.akad.date" placeholder="Tanggal ex.02" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.akad.day" placeholder="Hari ex.Minggu" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.akad.month" placeholder="Bulan ex.Nov" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.akad.time" placeholder="Waktu ex.02.00" />
                    <p>Resepsi</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.resepsi.date" placeholder="Tanggal ex.02" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.resepsi.day" placeholder="Hari ex.Minggu" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.resepsi.month" placeholder="Bulan ex.Nov" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.resepsi.time" placeholder="Waktu ex.02.00" />
                    <p>tgl-bln-thn</p>
                    <input type="date" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.all" placeholder="" />
                    <p>Tahun</p>
                    <input type="number" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="date.years" placeholder="Tahun ex.2025" />

                    <label className="text-xl italic font-bold">Location</label>
                    <p>Akad</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="location.akad.link" placeholder="link" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="location.akad.location" placeholder="jl.Sudirman" />
                    <p>Resepsi</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="location.resepsi.link" placeholder="link" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="location.resepsi.location" placeholder="jl.Sudirman" />

                    <label className="text-xl italic font-bold">Gift</label>
                    <p>01</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.one.nameBank" placeholder="Nama Bank" />
                    <input type="number" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.one.rek" placeholder="Nomor Rekening" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.one.an" placeholder="a.n" />
                    <p>02</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.two.nameBank" placeholder="Nama Bank" />
                    <input type="number" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.two.rek" placeholder="Nomor Rekening" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.two.an" placeholder="a.n" />
                    <p>03</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.tree.nameBank" placeholder="Nama Bank" />
                    <input type="number" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.tree.rek" placeholder="Nomor Rekening" />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="gift.tree.an" placeholder="a.n" />


                    <label className="text-xl italic font-bold">Link Sosmed</label>   
                    <p>mens</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="sosmed.mens.ig" placeholder="Link Instagram " />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="sosmed.mens.facebook" placeholder="Link Facebook " />
                    <p>grils</p>
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="sosmed.grils.ig" placeholder="Link Instagram " />
                    <input type="text" className="p-2  rounded-md outline-none w-full mb-2" onChange={handleChange} name="sosmed.grils.facebook" placeholder="Link Facebook " />
                    <button type="submit" className="bg-green-500 p-2 w-full rounded-md border my-10">Add to Firebase</button>
                </form>
            </div>
        </section>
    )
}