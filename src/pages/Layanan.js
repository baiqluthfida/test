import Image from "next/image";
import React from "react";
import Dropdown from "@/components/Dropdown";

export default function HomePage() {
  return (
    <div>
      <nav className=" flex pl-3 pr-[60px] bg-[#ffffff]">
        <Image
          className=" w-[59px] h-[52px] m-[10px]"
          src="/logoYayasan.png"
          alt="logo"
          width={1500}
          height={200}
        />
        <div className="flex gap-[30px] pl-[15px]">
          <h1 className="pt-[12px] font-bold">
            YAYASAN RIADHUL ULUM
            <br /> AMPENAN
          </h1>
        </div>
        <div className="flex gap-[74px] pt-[20px] pl-[600px]">
          <a
            className="text-[15px] font-bold text-[#35732F] flex items-center gap-1"
            href=""
          >
            Beranda{" "}
            <i className="fa-solid fa-chevron-down text-[12px] mt-[2px]" />
          </a>

          <a
            className="text-[15px] font-normal text-[#263c72] flex items-center gap-1"
            href=""
          >
            Profil{" "}
            <i className="fa-solid fa-chevron-down text-[12px] mt-[2px]" />
          </a>

          <Dropdown
            title="Akademik"
            items={[
              { label: "Visi dan Misi", href: "#" },
              { label: "Struktur Organisasi", href: "#" },
              { label: "Sejarah", href: "#" },
              { label: "Kurikulum", href: "#" },
              { label: "Penerimaan Siswa Baru", href: "#" },
            ]}
          />

          <Dropdown
            title="Layanan"
            items={[
              { label: "Taman Kanak-Kanak", href: "#" },
              { label: "Madrasah Ibtidaiyah", href: "#" },
              { label: "Madrasah Tsanawiyah", href: "#" },
            ]}
          />
        </div>
      </nav>

      <div className="relative w-full h-[700px]">
        <Image
          className="w-full h-full object-cover"
          src="/LandingPage.png"
          alt="LandingPage"
          layout="fill" // Supaya gambarnya ngisi parent div
        />
        <div className="absolute top-1/2 left-[380px] transform -translate-x-1/2 -translate-y-1/2 text-left text-white">
          <h1 className="text-4xl font-bold leading-snug">
            Selamat Datang di <br /> Website Yayasan Riadhul Ulum
          </h1>
          <p className="text-lg mt-2 leading-relaxed font-extralight">
            pusat pendidikan berbasis nilai-nilai Islam yang berkomitmen
            membentuk generasi cerdas,
            <br /> berakhlak mulia, dan berdaya saing global
          </p>
        </div>
      </div>

      <div className="p-[120px]">
        <div className="flex justify-center gap-[90px]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <img src="/bangku.png" alt="akademik" width={251} height={191} />
              <p className="text-[#35732F] font-bold text-[20px] font-sans pt-1">
                Komunitas &gt;
              </p>
            </div>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <img src="/bangku.png" alt="akademik" width={251} height={191} />
              <p className="text-[#35732F] font-bold text-[20px] font-sans pt-1">
                Akademik &gt;
              </p>
            </div>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <img src="/bangku.png" alt="akademik" width={251} height={191} />
              <p className="text-[#35732F] font-bold text-[20px] font-sans pt-1">
                Tentang Kami &gt;
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="flex gap-[70px] pb-[100px]">
        <div>
          <img src="/bangku.png" alt="bangku" width={652} height={495} />
        </div>

        <div className="pt-9">
          <h2 className="text-[#1F581A] font-bold text-[40px] font-sans pt-1">
            Profil Kami
          </h2>
          <h3 className="text-[#1F581A] font-bold text-[18px] font-sans pt-4 pb-10">
            Yayasan Riadhul Ulum adalah lembaga pendidikan Islam yang
            berkomitmen mencetak <br /> generasi berilmu, berakhlak, dan berdaya
            guna bagi masyarakat.
          </h3>
          <h4 className="text-[#1F581A] text-[16px] font-sans pt-1 pb-[40px]">
            Dengan lingkungan yang kondusif dan metode pembelajaran yang
            menyeluruh, Riadhul Ulum tidak hanya <br /> mendidik dalam aspek
            akademik dan keagamaan, tetapi juga membentuk karakter santri agar
            siap menghadapi <br />
            tantangan zaman Kami percaya bahwa setiap santri memiliki potensi
            luar biasa.
          </h4>
          <button className="bg-[#35732F] text-white w-[150px] h-[50px] rounded-[16px]">
            Selengkapnya &gt;
          </button>
        </div>
      </div>

      <div className="bg-[#AFBFAF] w-[100%] h-[410px] ">
        <h1 className="text-center pt-[100px] text-[#192318] font-bold text-[40px] font-poppins ">
          " Berhenti belajar membuat kita bodoh, <br /> Berhenti kita cepat
          pikun, <br /> Berhenti berdzikir membuat kita lupa diri "
        </h1>
        <p className="text-center text-[#192318] font-thin text-[15px] font-poppins pt-9">
          K.H. Ahmad Mustofa Bisri
        </p>
      </div>

      <div className="pt-10 flex items-center justify-center gap-[50px] pb-10 ">
        <div className="flex-col bg-[#EEEFF3] w-[267px] h-[210px] flex items-start justify-center px-9">
          <h4 className="text-[#1F581A] font-semibold text-[20px]">
            Berita Terkini <br />
            Terkait Yayasan
          </h4>
          <a className="text-[#1F581A] text-[15px] mt-2" href="">
            selengkapnya &gt;
          </a>
        </div>

        <div className="flex-col bg-[#EEEFF3] w-[267px] h-[210px] flex items-start justify-center px-9">
          <h4 className="text-[#1F581A] font-semibold text-[20px]">
            penerimaan Siswa <br />
            Baru 2015
          </h4>
          <a className="text-[#1F581A] text-[15px] mt-2" href="">
            selengkapnya &gt;
          </a>
        </div>

        <div className="flex-col bg-[#EEEFF3] w-[267px] h-[210px] flex items-start justify-center px-9">
          <h4 className="text-[#1F581A] font-semibold text-[20px]">
            Ramadhan <br />
            Festival
          </h4>
          <a className="text-[#1F581A] text-[15px] mt-2" href="">
            selengkapnya &gt;
          </a>
        </div>

        <div className="flex-col bg-[#EEEFF3] w-[267px] h-[210px] flex items-start justify-center px-9">
          <h4 className="text-[#1F581A] font-semibold text-[20px]">
            Acara Pengajian <br />
            Bulanan
          </h4>
          <a className="text-[#1F581A] text-[15px] mt-2" href="">
            selengkapnya &gt;
          </a>
        </div>
      </div>

      <footer>
        <div className="bg-[#3f543f] w-full h-[200px] flex items-center justify-between px-[200px] pt-[100px]">
          <div>
            <h1 className="text-[#ffffff] font-bold pb-3 text-[20px] ">
              Kontak
            </h1>
            <p className="text-[#dbd8d8] font-thin text-[15px]">
              Jalan Ragigenep, Gg Dahlia Sintung, <br /> Kelurahan Banjar,
              Ampenan, Kota <br />
              Mataram, Nusa Tenggara Barat <br /> <br />
              Telepon: 0878-6503-1644 <br /> <br />
              Email : RiadhulUlum@gamil.com <br />
            </p>
          </div>

          <div>
            <p className="text-[#dbd8d8] font-thin text-[15px]">
              Telepon: 0878-6503-1644 <br />
              Email : RiadhulUlum@gamil.com <br />
            </p>
          </div>

          <div>
            <h1 className="text-[#ffffff] font-bold pb-3 text-[20px]">
              Layanan
            </h1>
            <p className="text-[#dbd8d8] font-thin text-[15px]">
              Taman Kanak-Kanak <br />
              Madrasah Ibtidaiyah <br />
              Madrasah Tsanawiyah <br />
              Majelis Taklim
            </p>
          </div>
        </div>

        <div className="bg-[#3f543f] text-white font-bold text-center pt-24 text-[15px] pb-5">
          2020 © YAYASAN RIADHUL ULUM. ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
