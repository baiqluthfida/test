import Image from "next/image";
import React from "react";

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

          <a
            className="text-[15px] font-normal text-[#263c72] flex items-center gap-1"
            href=""
          >
            Akademik{" "}
            <i className="fa-solid fa-chevron-down text-[12px] mt-[2px]" />
          </a>

          <a
            className="text-[15px] font-normal text-[#263c72] flex items-center gap-1"
            href=""
          >
            Layanan{" "}
            <i className="fa-solid fa-chevron-down text-[12px] mt-[2px]" />
          </a>
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
            sekolah baldgd adhadgaud adsgfsnsbcsub usfiwgfw sfvasfshb sfbsiisb
            sisbdbd <br /> svyfgsif sivSIGsoboBCUO SUIsgiUSG SIISVI
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

      <div className="bg-[#AFBFAF] w-[100%] h-[410px] "></div>

      <div className="pt-10 flex items-center justify-center gap-[50px] pb-10 ">
        <div className="bg-[#EEEFF3] w-[267px] h-[210px] text-[#1F581A] font-bold text-[40px]  flex items-center justify-center">
          Kabar Terkini
        </div>

        <div className="bg-[#EEEFF3] w-[267px] h-[210px] text-[#1F581A] font-bold text-[40px]  flex items-center justify-center">
          Kabar Terkini
        </div>

        <div className="bg-[#EEEFF3] w-[267px] h-[210px] text-[#1F581A] font-bold text-[40px]  flex items-center justify-center">
          Kabar Terkini
        </div>

        <div className="bg-[#EEEFF3] w-[267px] h-[210px] text-[#1F581A] font-bold text-[40px]  flex items-center justify-center">
          Kabar Terkini
        </div>
      </div>
    </div>
  );
}
