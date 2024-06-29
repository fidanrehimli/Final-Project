import React, { useEffect, useState } from "react";
import "./reservation.css";
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import axios from "axios";
const Reservation = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  const getTicketData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/reservations");
      const reservations = res.data;
      const updatedReservations = await Promise.all(
        reservations.map(async (item) => {
          if (item.ticketId) {
            const ticketResponse = await axios.get(
              `http://localhost:8080/products/${item.ticketId}`
            );
            item.ticketTitle = ticketResponse.data.title;
          }
          return item;
        })
      );
      setTickets(updatedReservations);
    } catch (error) {
      console.error("Error fetching ticket data:", error);
    }
  };

  useEffect(() => {
    getTicketData();
  }, []);

  return <div>
     <Box
        display="flex"
        justifyContent="center"
        mt={5}
      >
      <TableContainer component={Paper} sx={{ width: "90%" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Country</TableCell>
            <TableCell >Action</TableCell>
            <TableCell >Buttons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.ticketTitle}</TableCell>
              <TableCell >{row.confirmed ? "Yes" :"No"}</TableCell>
              <TableCell><button onClick={()=>navigate(`${row._id}`)} className='view'>View</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  </div>;

};

export default Reservation;
