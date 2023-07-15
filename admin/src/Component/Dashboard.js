import React, {useState, useEffect} from "react";
import '../style/style.css';
import axios from 'axios';
// import {Link} from 'react-router-dom';

const Dashboard = () =>{

    const [users, setUsersData] = useState([]);

    useEffect (() =>{
        fetchData();
    },[])

    const fetchData = async () => {
        try{
        const response = await axios.get("http://localhost:4000/dashboard");
        setUsersData(response.data);
        console.log(response.data)
        }
        catch(error) { console.log(error)};
      };

    const deleteHandle = (id) => {
        const confirmed = window.confirm("Do you really want to delete?");

        if(confirmed){
        axios.delete(`http://localhost:4000/dashboard/${id}`)
        .then(() => {
            fetchData();
        })
        .catch(err => console.log(err));
        }
    }

    return(
        <>
            <div className="container">
                <h1 className="text-center mt-5" style={{color:"#6C0505",fontFamily:"Montserrat"}}>Contact Us Details</h1>
                <div className="table-container">
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr className="col-md-6">
                                <th className="text-center" style={{fontFamily:"Montserrat", color:"#6C0505"}}>Name</th>
                                <th className="text-center" style={{fontFamily:"Montserrat", color:"#6C0505"}}>Email</th>
                                <th className="text-center" style={{fontFamily:"Montserrat", color:"#6C0505"}}>Phone</th>
                                <th className="text-center" style={{fontFamily:"Montserrat", color:"#6C0505"}}>Business</th>
                                <th className="text-center" style={{fontFamily:"Montserrat", color:"#6C0505"}}>Year</th>
                                <th className="text-center" style={{fontFamily:"Montserrat", color:"#6C0505"}}>Sales</th>
                                <th className="text-center" style={{fontFamily:"Montserrat", color:"#6C0505"}}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr key={user._id}>
                                        <td className="text-center fw-bold text-uppercase" style={{fontFamily:"Cabin", color:""}}>{user.name}</td>
                                        <td className="text-center fw-bold text-uppercase" style={{fontFamily:"Cabin", color:""}}>{user.email}</td>
                                        <td className="text-center fw-bold text-uppercase" style={{fontFamily:"Cabin", color:""}}>{user.phone}</td>
                                        <td className="text-center fw-bold text-uppercase" style={{fontFamily:"Cabin", color:""}}>{user.proof}</td>
                                        <td className="text-center fw-bold text-uppercase" style={{fontFamily:"Cabin", color:""}}>{user.business}</td>
                                        <td className="text-center fw-bold text-uppercase" style={{fontFamily:"Cabin", color:""}}>{user.sales}</td>
                                        <td className="text-center fw-bold text-uppercase" style={{fontFamily:"Cabin", color:""}} onClick={() => deleteHandle(user._id)}><i className="fa-solid fa-trash" role="button"></i></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Dashboard