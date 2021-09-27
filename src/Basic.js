import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import blue from "./logo/blue.png";
import green from "./logo/green.png";
import pink from "./logo/pink.png";
import yellow from "./logo/yellow.png";
import o from "./logo/o.png";
import p from "./logo/p.png";
import t from "./logo/t.png";
import i from "./logo/i.png";
import n from "./logo/n.png";
import a from "./logo/a.png";
// import z from "./logo/!.png";
import star from "./logo/star.png";

const Basic = () => {

    const [language, setlanguage] = useState('English')

    const [up, setup] = useState(false)
    const [show, setshow] = useState(false)
    const handleupdown = () => {
        setup(!up)
        setshow(!show)
        setlanguage('English')
    }
    const handlehindi = () => {
        setlanguage('Hindi')
        setshow(!show)
    }
    const handlemarathi = () => {
        setlanguage('Marathi')
        setshow(!show)

    }
    const handlebengali = () => {
        setlanguage('Bengali')
        setshow(!show)
    }
    const InitialValues = {
            Name: "",
            Designation: "",
            Language: language  
    }

    const SignupSchema = Yup.object().shape({
        Name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Enter name"),
        Designation: Yup.number()
            .typeError("Enter valid number")
        .min(0, "Enter valid number")
        .required("Enter valid number"),
    });

    console.log(language)
    const CustomInputComponent = (props) => (

        
            <div className="dropdown" {...props}>
                <button className={show ? "btn dropdown-toggle select show" : "btn dropdown-toggle select" }type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleupdown}>
                    {!show ? language : "English"}
                    {" "}
                    {up ? <i className="fas fa-chevron-up fa"></i> : <i className="fas fa-chevron-down fa"></i>}
                    
                </button>
                <ul className={show ? "dropdown-menu show " : "dropdown-menu"} aria-labelledby="dropdownMenuButton1">
                    <li><button className="dropdown-item btn bg-transparent first-option" type="button" onClick={handlehindi}>Hindi</button></li>
                    <li><button className="dropdown-item btn  bg-transparent" type="button" onClick={handlemarathi}>Marathi</button></li>
                    <li><button className="dropdown-item btn bg-transparent " type="button" onClick={handlebengali}>Bengali</button></li>
                </ul>
            </div>
      
    );
    return (
        <>
        <div className="main-container">
            <div className="logo-container">
                <div className="logo-box">
                    <div className="logo">
                        <div className="logo-up">
                            <img src={yellow} alt="" />
                            <img src={pink} alt="" />
                        </div>
                        <div className="logo-dwn">
                            <img src={green} alt="" />
                            <img src={blue} alt="" />
                        </div>
                    </div>
                    <div className="logo-text">
                        <img src={o} alt="" />
                        <img src={p} alt="" />
                        <img src={t} alt="" />
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={i} alt="" />
                        </div>
                        <img src={o} alt="" />
                        <img src={n} alt="" />
                        <img src={a} alt="" />
                    </div>
                </div>
            </div>
            <Formik
                initialValues={InitialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                    console.log(language)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="main-form">
                            <div className="inner-container">
                                <p className="form-text">Name</p>
                                {errors.Name && touched.Name ? <p className="error">  {errors.Name}</p> :
                                    <div className="else"></div>}
                                <Field name="Name" placeholder="Enter Full Name" />
                            </div>
                            <div className="inner-container">
                                <p className="form-text">Designation</p>

                                {errors.Designation && touched.Designation ? (
                                    <p className="error">{errors.Designation}</p>
                                ) : <div className="else"></div>}
                                <Field name="Designation" placeholder="Enter Position" />
                            </div>
                            <div className="inner-container">
                                <p className="form-text form-text-for-language">Language</p>
                                <Field as={CustomInputComponent} name="Language" />

                            </div>
                        </div>
                  <button type="submit" className="login-btn"> Login &nbsp;<i className="fas fa-chevron-right"></i> </button>
                                             </Form>
                )}
            </Formik>
            
            </div>
            </>
    );

};

export default Basic;
