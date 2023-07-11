import React, { useState, useEffect } from 'react'
import PhotoLerian from '../images/profile.jpeg'
import axios from 'axios'

const Article = () => {
  const [articles, setArticle] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getArticles = async () => {
    await axios.get(`https://api.politekniklp3i-tasikmalaya.ac.id:4115/list`)
      .then((res) => {
        setArticle(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="bg-white md:pt-20">
      <header className="max-w-3xl container mx-auto p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={'/blog'} className="text-gray-800">
              <i className="fa-solid fa-chevron-left" />
            </a>
            <a href={`/`}><img src={PhotoLerian} className="inline-block w-16 rounded-full" alt="Lerian Febriana, A.Md.Kom" /></a>
            <div>
              <h2 className="font-bold text-slate-800 text-base">Lerian Febriana, A.Md.Kom</h2>
              <h3 className="text-sm md:text-base text-slate-700">Software Developer 🇮🇩</h3>
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-3xl text-slate-900 text-base container mx-auto rounded-xl p-5">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Cara Hosting di cPanel</h2>
        <div className="flex gap-2 mb-3">
          <span className="text-xs border border-slate-300 text-slate-500 px-2 py-1 rounded-md"><i className="fa-solid fa-calendar-day mr-1" /> 23 April 2023</span>
          <span className="text-xs bg bg-sky-300 text-sky-700 px-2 py-1 rounded-md">Programming</span>
        </div>
        <div className="mt-8 text-slate-700 leading-loose">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>
    </div>
  )
}

export default Article