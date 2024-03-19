import React, {useState} from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
export default function AddUser(){
    const [value,setValue] = useState({
        name:"",
        fatherName:"",
        email:"",
        phone:""
    })

    const handleChange = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const addUser = await axios.post('http://localhost:8080/api/create',value)
            const response = addUser.data;
            if (response.success){
                toast.success(response.status)

            }
            console.log(response);
        }catch (e) {
            console.log(e);
        }
        console.log(value)
    }

    return(
        <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Add Employee</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true"
                                    >&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name='name' value={value.name} onChange={handleChange} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Father Name</label>
                                <input type="text"  name='fatherName' value={value.fatherName} onChange={handleChange} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name='email' value={value.email} onChange={handleChange} className="form-control" required/>

                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" name='phone' value={value.phone} onChange={handleChange} className="form-control" required/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel"/>
                            <input type="submit" className="btn btn-primary" value="Add" data-bs-dismiss="modal"/>
                            {/*<button type="submit">Add</button>*/}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}