import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import user from '../../user.svg'
import email from '../../email.svg'
import candado from '../../candado.svg'
import cake from '../../cake.svg'

const UsersForm = ({getUsers, userSelected, deselecUser}) => {

  const initialValues ={
    firt_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
  }

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    }else {
      reset(initialValues);
    }
  }, [userSelected]);

  const submit = (data) => {
    if(userSelected){
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/` , data)
        .then(() => {
          getUsers();
          deselecUser();
        })
        .catch((error) => console.log(error));
    } else {
        axios.post('https://users-crud1.herokuapp.com/users/', data)
          .then(() => {
            getUsers()
            deselecUser()
          })
          .catch((error) => console.log(error));
      }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <label htmlFor="first_name"><img src={user} alt="" className="icons"/></label>
        <input {...register("first_name")} type="text" id="first_name" className="name"/> <input {...register("last_name")} type="text" id="last_name" className="name"/>
      </div>
      <div className="input-container">
        <label htmlFor="email"><img src={email} alt="" className="icons"/></label>
        <input {...register("email")} type="text" id="email" className="info"/>
      </div>
      <div className="input-container">
        <label htmlFor="password"><img src={candado} alt="" className="icons"/></label>
        <input {...register("password")} type="text" id="password" className="info"/>
      </div>
      <div className="input-container">
        <label htmlFor="birthday"><img src={cake} alt="" className="icons"/></label>
        <input {...register("birthday")} type="date" id="birthday" className="info"/>
      </div>
      <button className="up">Uploap </button>
    </form>
  );
};

export default UsersForm;