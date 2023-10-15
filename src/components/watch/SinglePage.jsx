import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { homeData, recommended } from "../../dummyData";
import { Upcoming } from "../header/upcoming/Upcoming";
import './style.css'

export const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
        setItem(item)
    }
  }, [id])
  const[rec, setrec] = useState(recommended)

  return <>{item? (
    <>
      <section className="singlePage">
        <div className="singleHeading">
            <h1>{item.name}</h1>
            <span> | {item.time} | </span> <span>HD</span>
        </div>
        <div className="container">
            <video src={item.video} controls></video>
            <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, dolores at nihil in unde dolore magni aliquid quod quaerat et facilis animi, dignissimos veritatis? Laboriosam suscipit consectetur molestias laborum numquam accusantium perspiciatis, repudiandae vel inventore fugiat voluptas assumenda facilis perferendis ipsum expedita nostrum doloremque nisi magni autem obcaecati, iste consequatur.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, dolores at nihil in unde dolore magni aliquid quod quaerat et facilis animi, dignissimos veritatis? Laboriosam suscipit consectetur molestias laborum numquam accusantium perspiciatis, repudiandae vel inventore fugiat voluptas assumenda facilis perferendis ipsum expedita nostrum doloremque nisi magni autem obcaecati, iste consequatur.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, dolores at nihil in unde dolore magni aliquid quod quaerat et facilis animi, dignissimos veritatis? Laboriosam suscipit consectetur molestias laborum numquam accusantium perspiciatis, repudiandae vel inventore fugiat voluptas assumenda facilis perferendis ipsum expedita nostrum doloremque nisi magni autem obcaecati, iste consequatur.</p>
            </div>
            <div className="social">
                <h3>Share : </h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" />
                <img src="https://img.icons8.com/fluency/color/48/000000/twitter-circled.png" alt="" />
                <img src="https://img.icons8.com/fluency/color/48/000000/linkedin-circled.png" alt="" />
            </div>
        </div>
      </section>
      < Upcoming items={rec} title='Recommended Movies' />
    </>

  ):null}</>;
};
