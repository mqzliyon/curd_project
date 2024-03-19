import React, {useEffect, useState} from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {green, red} from "@mui/material/colors";
import axios from "axios";
import DeleteUserComponent from "../UserManage/DeleteUserComponent.jsx";
import toast from "react-hot-toast";





const Table = ({updateUser,onHandleDelete}) => {
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:8080/api/read')
                .then(response => {
                    const data = response.data;
                    if (data.success) {
                        // toast.success(data.status);
                    }
                    setData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };
        fetchData();
    }, [data]);








    return (
      <>
          <div className="container">
              <div className="table-wrapper">
                  <div className="table-title">
                      <div className="row">
                          <div className="col-sm-6">
                              <h2>Manage <b>Employees</b></h2>
                          </div>
                          <div className="col-sm-6">
                              <a href="#" className="btn btn-success" data-bs-toggle="modal"
                                 data-bs-target="#addEmployeeModal">
                                  <PersonAddAlt1Icon/> <span>Add New Employee</span>
                              </a>
                          </div>
                      </div>
                  </div>
                  <table className="table table-striped table-hover">
                      <thead>

                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>

                      {data.data?.map((elem,index)=>{
                        return (
                            <tr key={index}>
                                <td></td>
                                <td>{elem.name}</td>
                                <td>{elem.fatherName}</td>
                                <td>{elem.email}</td>
                                <td>{elem.phone}</td>
                                <td>
                                    <a href="#" className="edit cursor-pointer" data-bs-toggle="modal"
                                       data-bs-target="#editEmployeeModal" onClick={()=>updateUser(elem._id)}>
                                        {/*<i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>*/}
                                        <EditNoteIcon fontSize='large' sx={{color: green[500]}}/>
                                    </a>
                                    <a href="#" className="delete cursor-pointer" data-bs-toggle="modal"
                                       data-bs-target="#deleteEmployeeModal" onClick={()=>onHandleDelete(elem._id)}>
                                        <PersonRemoveIcon fontSize='large' sx={{color: red[500]}}/>
                                    </a>
                                    {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                </td>
                            </tr>
                        )
                      })}
                      </tbody>
                  </table>
              </div>
          </div>
      </>


  )
}

export default Table