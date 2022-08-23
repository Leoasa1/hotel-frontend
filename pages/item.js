import React from 'react'
import RoomCard from "../components/roomCard/RoomCard.js"
import RoomInfo from '../components/roominfo/RoomInfo.js'

function item({ item }) {
  console.log(item)
  return (
    <div>
      <div className='container mx-auto inter p-5'>
        <RoomCard />

        <div className='my-20'>

        <RoomInfo/>


        </div>

      </div>
    </div>
  )
}

export default item