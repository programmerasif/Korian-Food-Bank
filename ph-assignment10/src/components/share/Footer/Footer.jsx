import React from 'react';
import { FcApproval,FcCallback } from "react-icons/fc";

const Footer = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row text-white bg-black pt-5 pb-2 px-5 text-start">
                    
                    <div className="col-sm-12 col-md-6">
                        <h3>Contact <FcCallback /></h3>
                        <p><FcApproval /> Facbook : www.facebook/korean-food-bank.com</p>
                        <p><FcApproval /> Email :korean-food-bank@gmail.com</p>
                        <p><FcApproval /> Phone : 017xxxxx01</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h3>ABOUT</h3>
                        <p>Visit our exclusive restaurent for once then it will be your regular destination for party and celebration.</p>
                    </div>
                    <p className='text-center'>Copyright ©2023 All rights reserved | This website is developed by Asif</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;