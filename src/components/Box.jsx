import React from 'react'
import { Link } from 'react-router-dom';



import './Box.css'
const Box = (props) => {
  const title=props.title;
  const des=props.des;
  const imageurl=props.imageurl;
  const url=props.url;
  const author=props.author;
  const date=props.date;
  const source=props.source;
  return (
    <div className='news-box'>
      <img src={imageurl} alt="" />
      <span className='batch'>{source}</span>
      <h1 className='text-lg ml-2 mt-1 font-semibold'>{title}</h1>
      <p className=' ml-2 mb-2'>{des}</p>
      <p className=' ml-2 mb-2'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</p>
     

    </div>
  )
}

export default Box
