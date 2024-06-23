import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./user.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const User = () => {
  const [adminUsr, setAdminUsers] = useState([]);
  const [adminImg, setAdminImg] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPhone, setAdminPhone] = useState("");
  const [adminId, setAdminId] = useState("");

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/admins");
    setAdminUsers(res?.data);
    console.log(res?.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const GetAdminUsers = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/admins", {
      image: adminImg,
      name: adminName,
      email: adminEmail,
      phone: adminPhone,
    });
    getData();
    setAdminImg(""), setAdminName(""), setAdminEmail(""), setAdminPhone("");
    toast.success("Successfully added a product!", {
      position: toast.POSITION_RIGHT,
    });
  };
  const AdminUpdate = (image, name, email, phone, id) => {
    setAdminImg(image),
      setAdminName(name),
      setAdminEmail(email),
      setAdminPhone(phone),
      setAdminId(id);
  };
  const HandleUpdate = async () => {
    await axios.put(`http://localhost:8080/admins/${adminId}`, {
      image: adminImg,
      name: adminName,
      email: adminEmail,
      phone: adminPhone,
    });
    getData();
    toast.success("Updated product!", { position: toast.POSITION_RIGHT });
  };

  const DeleteData = async (id) => {
    await axios.delete(`http://localhost:8080/admins/${id}`);
    getData();
  };
  return (
    <div className="AdminUsers">
      <ToastContainer />
      <div>
        <form action="" onSubmit={GetAdminUsers}>
          <input className="inpuser"
            type="text"
            value={adminImg}
            onChange={(e) => setAdminImg(e.target.value)}
            required
            placeholder="Image"
          />
          <br />
          <input className="inpuser"
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            required
            placeholder="Name"
          />
          <br />
          <input className="inpuser"
            type="email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <br />
          <input className="inpuser"
            type="text"
            value={adminPhone}
            onChange={(e) => setAdminPhone(e.target.value)}
            required
            placeholder="Phone"
          />
          <br />
          <button className="submituser" type="submit" onClick={HandleUpdate}>
            Submit
          </button>
        </form>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
              <StyledTableCell>Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminUsr.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell>
                  <img className="AdminImg" src={row.image} alt="" />
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>
                  <button
                    className="deleteuser"
                    onClick={() => DeleteData(row._id)}
                  >
                    Delete
                  </button>
                </StyledTableCell>
                <StyledTableCell>
                  <button
                    className="updateuser"
                    onClick={() =>
                      AdminUpdate(
                        row.image,
                        row.name,
                        row.email,
                        row.phone,
                        row._id
                      )
                    }
                  >
                    Update
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default User;
