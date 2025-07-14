import Image from "next/image";
import React from "react";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function Kurikulum() {
  return (
    <div>
      {/* Header (tidak diubah) */}
      {/* Header (tidak diubah) */}
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
        <div className="flex gap-[74px] pt-[20px] pl-[750px]">
          <Link
            href="/"
            className="text-[15px] font-bold flex items-center gap-1 text-[#1F581A]"
          >
            <span className="text-[15px] font-bold flex items-center gap-1">
              Beranda
              <i className="fa-solid fa-chevron-down text-[12px] mt-[2px]" />
            </span>
          </Link>

          <Dropdown
            title="Profile"
            items={[
              { label: "Visi dan Misi", href: "/visi" },
              { label: "Struktur Organisasi", href: "/strukturOrganisasi" },
              { label: "Sejarah", href: "/sejarah" },
              { label: "Kurikulum", href: "kurikulum" },
              { label: "Penerimaan Siswa Baru", href: "psiswabaru" },
            ]}
          />
          <Dropdown
            title="Layanan"
            items={[
              { label: "Taman Kanak-Kanak", href: "/tk" },
              { label: "Madrasah Ibtidaiyah", href: "/mi" },
              { label: "Madrasah Tsanawiyah", href: "/mts" },
              { label: "Majlis Ta'lim", href: "/majlis" },
            ]}
          />
        </div>
      </nav>

      {/* Judul dengan gaya baru */}
      <section className="bg-gradient-to-r from-[#e5ffe5] via-[#D9D9D9] to-[#f2f2f2] w-full py-12 flex items-center justify-center shadow-inner">
        <div className="text-center">
          <h1 className="text-[48px] md:text-[64px] text-[#247536] font-extrabold tracking-wide drop-shadow-md uppercase">
            Kurikulum Yayasan
          </h1>
          <p className="text-[#377c3b] text-lg mt-3 font-light italic max-w-2xl mx-auto">
            kurikulum yang digunakan oleh Yayasan Pada <br />
            Taman kanak-kanak, Madrasah Ibtidaiyah, dan Madrasah Tsanawiyah
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block w-24 h-2 rounded-full bg-gradient-to-r from-[#247536] to-[#5be584]" />
          </div>
        </div>
      </section>

      {/* Gambar dengan efek */}
      <div className="flex justify-center -mt-10 mb-10 relative z-10">
        <div className="rounded-3xl shadow-lg overflow-hidden border-4 border-[#247536]/20 max-w-4xl w-full bg-white hover:shadow-2xl transition-all duration-300">
          <Image
            className="w-full h-[320px] md:h-[400px] object-cover object-center transition-all duration-500"
            src="/LandingPage.png"
            alt="Sejarah Yayasan"
            width={1500}
            height={200}
          />
        </div>
      </div>

      {/* Isi dengan card dan penekanan pada kata kunci */}
      <div className="px-[16px] md:px-[60px] pt-[30px] pb-16 flex flex-col items-center">
        <article className="bg-[#f8fff8] shadow-md rounded-2xl max-w-3xl mx-auto p-8 border border-[#e5ffe5]">
          {/* TK */}
          <h2 className="text-[#1F581A] text-xl md:text-2xl font-bold mb-4 text-center tracking-wide">
            Taman Kanak-kanak (TK)
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-4 text-justify">
            <span className="font-semibold text-[#35732F]">
              Taman Kanak-kanak
            </span>{" "}
            Kurikulum TK Riadhul Ulum berfokus pada pengembangan karakter,
            akhlak mulia, dan keterampilan dasar anak melalui pendekatan bermain
            sambil belajar.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-2">
            <span className="font-semibold">Muatan kurikulum:</span>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Pengenalan nilai-nilai Islam (doa, adab, hafalan surat pendek)
            </li>
            <li>
              Perkembangan motorik, kognitif, bahasa, dan sosial-emosional
            </li>
            <li>
              Aktivitas kreatif: seni, musik, dan keterampilan hidup sederhana
            </li>
          </ul>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-6 text-justify">
            Kurikulum mengacu pada{" "}
            <span className="italic">Kurikulum Merdeka PAUD</span> dan dipadukan
            dengan muatan keislaman khas yayasan.
          </p>

          {/* MI */}
          <h2 className="text-[#1F581A] text-xl md:text-2xl font-bold mb-4 text-center tracking-wide mt-8">
            Madrasah Ibtidaiyah (MI)
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-2 text-justify">
            MI Riadhul Ulum menerapkan Kurikulum Merdeka yang diperkaya dengan
            kurikulum Madrasah Kementerian Agama RI.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-2">
            <span className="font-semibold">Muatan kurikulum:</span>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Pelajaran umum: Matematika, IPA, IPS, Bahasa Indonesia, Bahasa
              Inggris
            </li>
            <li>
              Pelajaran agama Islam: Al-Qur'an Hadits, Fiqih, Akidah Akhlak,
              SKI, Bahasa Arab
            </li>
          </ul>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light text-justify">
            Kurikulum bertujuan membentuk siswa yang cerdas, berakhlak, dan
            berwawasan luas.
          </p>

          {/* MTs */}
          <h2 className="text-[#1F581A] text-xl md:text-2xl font-bold mb-4 text-center tracking-wide mt-8">
            Madrasah Tsanawiyah (MTs)
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-2 text-justify">
            MTs Riadhul Ulum mengadopsi Kurikulum Merdeka dan kurikulum Madrasah
            Kemenag RI yang berorientasi pada penguatan keilmuan dan karakter
            Islami.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-2">
            <span className="font-semibold">Muatan kurikulum:</span>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Pelajaran umum: Matematika, IPA, IPS, Bahasa Indonesia, Bahasa
              Inggris, TIK
            </li>
            <li>
              Pelajaran Agama: Al-Qur'an Hadits, Fiqih, Akidah Akhlak, SKI,
              Bahasa Arab
            </li>
          </ul>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light text-justify">
            Lulusan diharapkan berilmu pengetahuan, berkarakter, dan siap
            melanjutkan ke jenjang lebih tinggi.
          </p>
        </article>
      </div>

      {/* Footer (tidak diubah) */}
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
