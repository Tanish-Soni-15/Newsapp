import React from 'react'
import Loading from './Loading';
import Box from './Box';
import { useEffect, useState } from 'react'
const Myapp = (props) => {
  const [news, setnews] = useState([]);
  const [page, setpage] = useState(1);
  const [totalnews, settotalnews] = useState([]);
  const [loading, setloading] = useState(true);
  document.title=`WORLDNEWS - ${props.category.toUpperCase()}`;
  async function renderdata() {
    let a = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a9bee3a9f7d4f12a0d5a1664b26d48f&page=${page}&pageSize=${props.pageSize}`);
    // let a =await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6a9bee3a9f7d4f12a0d5a1664b26d48f');
    console.log(a);
    let b = await a.json();
    console.log(b);
    setnews(b.articles);
    settotalnews(b.totalResults);
    setloading(false);
   
  }
  function handlenextbtn() {
    console.log("Next")
    setloading(true);
    setpage(page + 1);

  }
  function handleprebtn() {
    console.log("previous")
    setloading(true)
    setpage(page - 1)

  }
  useEffect(() => {
    renderdata();
  }, [page])
  return (
    <div className="News-container flex justify-center flex-wrap w-5/6 mx-auto">
      <h1 className='heading m-2 text-3xl mt-36 mb-7'>{`WORLDNEWS - Top ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines`}</h1>
      {loading && <div className="w-full h-full flex justify-center items-center">
        <Loading />
      </div>
      }
      <div className="flex justify-between  flex-wrap gap-7 ">
        {!loading && news && news.map(element => {
          return <Box key={element.url} title={element.title ? element.title.slice(0, 30) + "..." : ""} des={element.description ? element.description.slice(0, 150) + "..." : ""} imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        })}
      </div>
      <div className="btns w-full flex justify-between my-4">
        <button disabled={page <= 1} onClick={handleprebtn} className='btn2 ml-2 my-button'>&larr; Previous</button>
        <button disabled={page >= Math.ceil(totalnews / props.pageSize)} onClick={handlenextbtn} className='btn2 ml-2 pl-4 pr-4 my-button'>Next &rarr;</button>

      </div>
    </div>
  )
}
export default Myapp    
