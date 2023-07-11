import React from 'react'

import PhotoLerian from '../images/lerian.jpg'
import HtmlCertificate from '../certificates/html.jpg'
import JavascriptCertificate from '../certificates/javascript.jpg'
import WebCertificate from '../certificates/web.jpg'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {

  const options = {
    responsive: {
      0: {
        items: 3
      },
      640: {
        items: 4
      },
      768: {
        items: 5
      },
      1024: {
        items: 6
      }
    }
  }

  return (
    <div className='bg-slate-900'>
      <nav className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
          <div className="text-slate-200 space-x-2">
            <a href={`/blog`} className="border border-slate-700 hover:bg-slate-200 px-3 py-2 rounded-lg text-slate-200 hover:text-slate-800"><i className="fa-solid fa-newspaper mr-2" />
            <span className="text-sm">Dev Blog</span></a>
            <a href="mailto:kanglerian@gmail.com" className="border border-slate-700 hover:bg-slate-200 px-3 py-2 rounded-lg text-slate-200 hover:text-slate-800"><i className="fa-solid fa-envelope mr-2" />
            <span className="text-sm">kanglerian@gmail.com</span></a>
          </div>
          <div className="flex flex-wrap justify-center items-center text-slate-200 text-sm">
            <a href="https://www.linkedin.com/in/kanglerian/" className="transition ease-in-out duration-200 hover:bg-slate-700 px-4 py-2 rounded-lg"><i className="fa-brands fa-linkedin fa-1x mr-1" /> LinkedIn</a>
            <a href="https://github.com/kanglerian" className="transition ease-in-out duration-200 hover:bg-slate-700 px-4 py-2 rounded-lg"><i className="fa-brands fa-github fa-1x mr-1" /> Github</a>
            <a href="https://instagram.com/kanglerian" className="transition ease-in-out duration-200 hover:bg-slate-700 px-4 py-2 rounded-lg"><i className="fa-brands fa-instagram fa-1x mr-1" /> Instagram</a>
            <a href="https://youtube.com/kanglerian" className="transition ease-in-out duration-200 hover:bg-slate-700 px-4 py-2 rounded-lg"><i className="fa-brands fa-youtube fa-1x mr-1" /> Youtube</a>
          </div>
        </div>
      </nav>

      <header className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={PhotoLerian} alt="Lerian Febriana, A.Md.Kom" className="rounded-full h-32" />
          <h4 className="text-slate-200">Hi, I'm Lerian Febriana, A.Md.Kom 👋</h4>
          <div className="text-slate-200 text-center">
            <h1 className="text-4xl font-reguler leading-normal"><b>Write Code</b> for Website as<br />Full-Stack Developer with <b>JavaScript</b>.</h1>
          </div>
          {/* <div className="flex items-center justify-center gap-2">
            <a href={a305ece9b0} className="border border-slate-600 px-5 py-3 text-sm text-slate-200" download="UTS-FE-MI21A.pdf">Download Soal UTS MI21A <i class="fa-solid fa-download ml-2"></i></a>
            <a href={b9a8f85f9611384c} className="border border-slate-600 px-5 py-3 text-sm text-slate-200" download="UTS-FE-MI21B.pdf">Download Soal UTS MI21B <i class="fa-solid fa-download ml-2"></i></a>
          </div> */}
        </div>
      </header>

      <section className="bg-slate-800 px-4 py-10">
        <div className="container mx-auto ">
          <OwlCarousel className='owl-theme text-white text-center' autoplay loop margin={10} dots={false} responsive={options.responsive}>
            <div class='item'>
              <i class="fa-brands fa-html5 fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-css3-alt fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-js fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-node-js fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-react fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-php fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-laravel fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-bootstrap fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-sass fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-git-alt fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-github fa-6x"></i>
            </div>
            <div class="item">
              <i class="fa-brands fa-cpanel fa-6x"></i>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-10">
          <div className="text-center space-y-3">
            <h2 className="text-xl text-slate-200">Kami memiliki prinsip agar bekerja sesuai dengan keahlian dan memiliki semangat untuk terus belajar.</h2>
            <p className="text-base text-slate-200 italic">“Jika satu urusan diserahkan kepada bukan ahlinya, maka tunggulah Kiamat tiba.”<br />(HR. Bukhari: 6015)</p>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2 text-slate-200">
              <div className="p-4 border border-slate-700 space-y-4">
                <div className="h-24 mb-5" />
                <span><i className="fa-solid fa-mobile-screen-button fa-2x mr-2" /><i className="fa-solid fa-display fa-2x" /></span>
                <h2 className="font-bold">Web &amp; Mobile App</h2>
                <p className="text-sm font-light text-slate-400">Membuat aplikasi berbasis Website dan Android menggunakan JavaScript dengan NodeJS. Memiliki passion di bidang tersebut, dan ingin berkembang menjadi seorang ahli.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2 text-slate-200">
              <div className="p-4 border border-slate-700 space-y-4">
                <div className="h-24 mb-5" />
                <span><i className="fa-solid fa-laptop-code fa-2x" /></span>
                <h2 className="font-bold">Junior Instructor</h2>
                <p className="text-sm font-light text-slate-400">Menjadi pengajar untuk pembelajaran Front End Development secara Online &amp; Offline. Di Politeknik LP3I Kampus Tasikmalaya dan Youtube Channel Lerian Febriana.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2 text-slate-200">
              <div className="p-4 border border-slate-700 space-y-4">
                <div className="h-24 mb-5" />
                <span><i className="fa-solid fa-screwdriver-wrench fa-2x" /></span>
                <h2 className="font-bold">IT Support</h2>
                <p className="text-sm font-light text-slate-400">Melakukan maintenance dan instalasi secara berkala Operating System Windows, Linux dan MacOS untuk Lab Komputer LP3I. Berpengalaman lebih dari 3 tahun di bidang IT Support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="bg-slate-800 border-2 border-slate-900">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <img src={HtmlCertificate} alt="Lerian - HTML5 Sertifikat" className="transition ease duration-400 md:hover:scale-105" />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <img src={JavascriptCertificate} alt="Lerian - JavaScript Sertifikat" className="transition ease duration-400 md:hover:scale-105" />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <img src={WebCertificate} alt="Lerian - Web Development Sertifikat" className="transition ease duration-400 md:hover:scale-105" />
              </div>
            </div>
          </div>
        </section>
        <footer className="container mx-auto px-4 py-2">
          <hr className="mb-3 border-slate-800" />
          <p className="text-slate-400 text-center text-xs">Copyright © 2023 Lerian Febriana, A.Md.Kom</p>
        </footer>
      </div>
    </div>
  )
}

export default Home