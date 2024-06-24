import React from 'react'
import "./reservation.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Reservation = () => {
    const navigate = useNavigate([])

    const GetTicketData = async()=>{
        try{
            const res = await axios.get("")
        }
    }
  return (
    <div>

    </div>
  )
}

export default Reservation