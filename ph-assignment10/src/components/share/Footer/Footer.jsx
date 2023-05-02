import React from 'react';
import { FcApproval,FcCallback } from "react-icons/fc";

const Footer = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row text-white bg-black p-5 text-start">
                    <div className="col-sm-12 col-md-6">
                        <h3>ABOUT</h3>
                        <p>Visit our exclusive restaurent for once then it will be your regular destination for party and celebration.</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h3>Contact <FcCallback /></h3>
                        <p><FcApproval /> Facbook : www.facebook/deshi-food-bank.com</p>
                        <p><FcApproval /> Email :deshi-food-bank@gmail.com</p>
                        <p><FcApproval /> Phone : 017xxxxx01</p>
                    </div>
                    <p>Copyright ©2023 All rights reserved | This website is developed by Asif</p>
                    <div className="col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;