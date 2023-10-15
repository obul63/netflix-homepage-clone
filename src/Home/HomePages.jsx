import React, {useState} from 'react'
import { Homes } from '../components/header/homes/Homes'
import { Upcoming } from '../components/header/upcoming/Upcoming'
import  { latest, recommended, upcome }  from '../dummyData'
import { Trending } from '../components/header/trending/Trending'

export const HomePages = () => {
  const[items, setItems] = useState(upcome)
  const[item, setItem] = useState(latest)
  const[rec, setrec] = useState(recommended)
    return (
        <>
          <Homes />
          <Upcoming items={items} title='Upcoming Movies' />
          <Upcoming items={item} title='Latest Movies' />
          <Trending />
          <Upcoming items={rec} title='Recommended Movies' />
        </>
    )
}


