import React, { Component, useState, Fragment } from 'react'
import Layout from '../core/Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { isAuth } from '../auth/helpers';


const Student = () => {

    const [values, setValues] = useState({
        subjects: []

        
     });
 
    const {subjects  } = values;
 





    React.useEffect(() => {
        setValues({ ...values});
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/user/student/subjects`,
            data: {
                id: isAuth()._id,
            },
            headers:{
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }}).then(function (response) {
                setValues(values => ({...values, subjects: response.data.listSubject}))
                console.log(response.data.listSubject);
            }).catch(function (error) {
                console.log(error);
                toast.error('Error getting your subjects');
            })



    }, [])

    const generateSubjectCards = (event) => {
        return(







            subjects && subjects.map((item,index) => { return  (
                <Fragment key={index}>
    

                <div className="card mb-5 ">
                <div className="card-header text-center h3">{item.subjectName}</div>
                <div className="card-body">
                    <div className="row">
        
                    <div className="col mb-4"> 
   
                        <a href={`${process.env.REACT_APP_JITSI}/${item.subjectName}?jwt=${item.token}`}>Link here</a>
                        

                    </div>
        
                    <div className="col mb-4"> 
                    
                    </div>
                    
                    </div>
        

                </div>
                </div>
                </Fragment>)
            })
 
        )
    }


    return(






        <Layout>
            <ToastContainer/>
            <div className="container mt-4 mb-4">
            <div className="row mb-4">
                <div className="col">
                    <h1>Student Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                {subjects && generateSubjectCards()}
                </div>
                </div>
            </div>
            
        </Layout>
    )
}


export default Student;