import React from 'react'
import Form from '../form/Form'
import axios from "axios"

const EditContact = ({onClose, data}) => {
    console.log("this is edit id", data._id)
    const id = data._id
    
    const EditApi = async (data) => {
        try {
          console.log("get api is also fired");
          const response = await axios.put(`http://localhost:7000/api/v1/contact/${id}`, data);
          console.log(response.data);
          onClose();
        } catch (error) {
          console.error("Error adding contact:", error.response.data);
        }
      };
    
      console.log("edit component is loaded");
  return (
    <Form ApiFunction={EditApi} onClose={onClose} title="Edit contact" data={data}/>
  )
}

export default EditContact