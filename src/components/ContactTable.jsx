import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import EditContact from "./Contact/EditContact";
import { Dialog } from "@mui/material";
import DeleteContact from "./Contact/DeleteContact";

const CustomButton = ({ children, icon, color, onClick }) => (
  <Button
    startIcon={icon}
    variant="contained"
    color={color}
    onClick={onClick}
    sx={{
      height: "fit-content",
      padding: "2px 5px",
      fontSize: "13px",
      textTransform: "capitalize",
    }}
  >
    {children}
  </Button>
);

const ContactTable = () => {
  const [openForm, setOpenForm] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [deletedContact, setDeletedContact] = useState(null);

  const [contacts, setContacts] = useState([]);

  const handleClose = () => {
    setOpenForm(null);
    setSelectedContact(null);
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:7000/api/v1/contact");
        setContacts(res.data.contacts);
        console.log("this is get response", res.data.contacts);
      } catch (err) {
        console.log("this is error", err.response?.data);
      }
    };

    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setOpenForm("edit");
  };
  
  const handleDelete = (deleteId) => {
    setDeletedContact(deleteId)
    setOpenForm("delete");
  };
  return (
    <>
      <TableContainer sx={{ background: "white", borderRadius: "8px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="contact table">
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "3px solid #F8F8FF",
                fontSize: 2,
                fontWeight: 700,
              }}
            >
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email ID</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Subscription Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  borderBottom: "3px solid #F8F8FF",
                }}
              >
                <TableCell component="th" scope="row" sx={{ color: "#7B8594" }}>
                  {row.firstname}
                </TableCell>
                <TableCell sx={{ color: "#7B8594" }}>{row.lastname}</TableCell>
                <TableCell sx={{ color: "#7B8594" }}>{row.phoneNumber}</TableCell>
                <TableCell sx={{ color: "#7B8594" }}>{row.email}</TableCell>
                <TableCell sx={{ color: "#7B8594" }}>{row.createdAt.slice(0, row.createdAt.indexOf("T"))}</TableCell>
                <TableCell
                  sx={{
                    color: row.subscription === "Subscribed" ? "green" : "red",
                    fontWeight: 500,
                  }}
                >
                  {row.subscription}
                </TableCell>
                <TableCell>
                  <Stack direction="row" gap={2}>
                    <CustomButton
                      icon={<EditIcon />}
                      color="primary"
                      onClick={() => handleEdit(row)}
                    >
                      Edit
                    </CustomButton>
                    <CustomButton 
                      icon={<DeleteIcon />} 
                      color="error"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </CustomButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={openForm !== null}
        onClose={handleClose}
        disableEscapeKeyDown
        disableBackdropClick
      >
        {openForm === "edit" && (
          <EditContact onClose={handleClose} data={selectedContact} />
        )}
        {openForm === "delete" && (
          <DeleteContact onClose={handleClose} data={deletedContact}/>
        )}
      </Dialog>
    </>
  );
};

export default ContactTable;
