import Will from "../img/william.png";
import Tiang from "../img/tiang.png";
import Zoom from "react-reveal/Zoom";
import Title from "../components/title/title";
import Title2 from "../components/title/title2";
import Content from "../components/content/content";
import Content2 from "../components/content/content2";
import Content3 from "../components/content/content3";

const MyCv = () => {
  return (
    <div>
      <Zoom>
        <div className="flex shadow-sm shadow-black">
          <div className="flex flex-col items-center bg-[#323B4C] text-white w-36 h-[550px]">
            <img src={Will} className="rounded-full w-30 h-24 mt-4" />
            <div className="ml-6 mt-4">
              <Title title="Contact" />
              <Content text1="Phone" text2="081215217271" />
              <Content text1="Email" text2="pedagang100@gmail.com" />
              <Content text1="Address" text2="JL.Konsolidasi No.117" />
            </div>
            <div className="ml-6 mt-3">
              <Title title="Education" />
              <Content2 text1="2018-2021" text3="Sma Negeri 1 Tobelo" />
              <Content2
                text1="2021-Present"
                text2="Informatics Major"
                text3="Universitas Klabat"
              />
            </div>
            <div className="ml-6 mt-3">
              <Title title="Skills" />
              <ul className="text-[6px] mt-2">
                <Content text1="- Web Development Front-End" />
                <Content text1="- Team Work" />
                <Content text1="- Design Graphic" />
                <Content text1="- Video Edition" />
                <Content text1="- Lighting Designer" />
                <Content text1="- Process Flows" />
              </ul>
            </div>
            <div className="ml-6 mt-3">
              <Title title="Language" />
              <Content text1="English" />
              <Content text1="Indonesia" />
            </div>
          </div>
          <div className="bg-white w-64 h-[550px] text-black">
            <div className="mt-6 ml-4">
              <p className="text-xl font-bold font-serif">Goeyana William</p>
              <p className="text-[10px] -mt-1">Mahasiswa Informatika</p>
            </div>
            <div className="mt-12 ml-4">
              <p className="font-bold">Experience</p>
              <hr className="w-[240px] bg-black" />
            </div>
            <img src={Tiang} className="absolute h-[340px] ml-2 mt-2" />
            <div className="ml-7 mt-4 leading-3">
              <Title2
                year="2022-Sekarang"
                organization="Lumen development Team | Unklab"
                role="Magang Front-End Developer"
              />
              <p className="text-[6px] ml-2">
                -Terlibat aktif dalam pembuatan proyek website/web app bersama
                tim <br />
                -Membuat tampilan web application untuk dining di Unklab Dine
                <br />
                -Membuat tampilan web application untuk ujian Fakultas
                Kependidikan Unklab,FKIP Exam System.
              </p>
            </div>
            <div className="ml-7 mt-9 leading-3">
              <Title2
                year="2022-Sekarang"
                organization="Google Developer Student Club | Unklab"
                role="Core Team Artificial Intelligence"
              />
              <p className="text-[6px] ml-2">
                -Mengajarkan kepada anggota tentang Artificial Intelligence
                <br />
                -Menyusun pembahasan yang akan diajarkan <br />
                -Terlibat dalam rapat mingguan dan memberikan pendapat
              </p>
            </div>
            <div className="ml-7 mt-11 leading-3">
              <Title2
                year="2022"
                organization="Harvest Pro | Manado"
                role="Lighting Crew"
              />
              <p className="text-[6px] ml-2">
                -Membantu mengatur peralatan <br />
                -Mengatur lampu panggung,lampu efek dan lampu pencahayaan <br />
                -Mengoperasikan lampu sorot selama acara <br />
                -Mengelola jalur kabel pada acara
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};
export default MyCv;
