import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"
import Form from "../form/Form";


const NewContactForm = ({ onClose }) => {

  const GetApi = async (data) => {
    try {
      console.log("get api is also fired")
      const response = await axios.post("http://localhost:7000/api/v1/contact/", data);
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error("Error adding contact:", error.response);
    }
  };

  return (
    <Form ApiFunction={GetApi} onClose={onClose} title="Add new contact" />
  );
};

export default NewContactForm;
