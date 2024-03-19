import React, {useState} from 'react'
import Table from './Table'
import AddUser from "../UserManage/AddUser.jsx";
import UpdateUser from "../UserManage/UpdateUser.jsx";
import DeleteUserComponent from "../UserManage/DeleteUserComponent.jsx";
import axios from "axios";
import toast from "react-hot-toast";


const UserTable = () => {
  const [value, setValue] = useState({
    name: '',
    fatherName: '',
    email: '',
    phone: '',
  });
  const [updateId, setUpdateId] = useState();
  // const [delete_id, set_delete_id] = useState();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateUser = await axios.put(`http://localhost:8080/api/update/${updateId}`, value);
      const response = updateUser.data;
      if (response.success) {
        toast.success(response.message);
      }
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const updateUser = (id) => {
    setUpdateId(id);
  };

  // const DeleteUser = (id)=>{
  //   set_delete_id(id);
  // }

  const handleDelete = async (deleteId) => {
    try {
      console.log(deleteId)
      const delete_data = await axios.delete(`http://localhost:8080/api/delete/${deleteId}`);
      const response = delete_data.data;
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Table updateUser={updateUser} onHandleDelete={handleDelete}/>
      <AddUser/>
      <UpdateUser value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/*<DeleteUserComponent handleDelete={handleDelete}/>*/}
      <DeleteUserComponent onHandleDelete={handleDelete} /> {/* Updated component name */}
    </>
  )
}

export default UserTable