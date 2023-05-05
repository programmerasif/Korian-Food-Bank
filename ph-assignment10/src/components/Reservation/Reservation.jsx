import React from 'react';
import { FcBookmark, FcCheckmark } from 'react-icons/fc';

const Reservation = () => {
    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-center text-danger mt-5 mb-5'>OUR BOOKING POLICY <FcBookmark/> </h1>
            <hr />
            <div className='row  justify-content-center align-items-center'>
                {/* lefe side */}
                <div className='col-md-6 col-sm-12 p-4 mb-5'>
                    <h1>
                    Online <br /> Reservation
                    </h1>
                    <hr />
                    <p className='fs-5'>Our solution for reservation let you combine your current reservation method whether it is on paper on spreadsheet. You have a choice to move it to our system or keep them both. It's hybrid. You have full control of everything: opening and off hours, acceptable party size, and etc.</p>
                    <p className=''> <FcCheckmark /> Availability management</p>
                    <p> <FcCheckmark /> Multi-branch supported</p>
                    <p> <FcCheckmark /> Confirmation email template</p>
                    <p><FcCheckmark /> OpenTable support</p>
                    <button className='btn btn-danger'>VIEW EXAMPLE</button>
                </div>
            {/* right side  */}
          <div className='col-md-6 col-sm-12'>
          <div className='shadow-lg p-5  bg-body rounded '>
            <h3>    reservation</h3>
            <p>Booking At</p>
            <div > <input type="text"  placeholder='Name' className='form-control mb-5'/> </div>

            <div className='d-flex justify-content-between align-items-center gap-3 mb-4'>
            <span><input type="email" placeholder='Email' className='form-control px-5'/></span>
            <span><input type="number" placeholder='Phone' className='form-control px-5'/></span>
            </div>

            <div className='row gap-3 mb-4'>
                <span className='col-sm-12 col-md-4'><input type="text"  className='border-0 border-bottom' placeholder='Date'/></span>
                <span className='col-sm-12 col-md-4'><input type="text"  className='border-0 border-bottom' placeholder='Time'/></span>
                <span className='col-sm-12 col-md-4'><input type="text"  className='border-0 border-bottom' placeholder='Table'/></span>
            </div>
            <button className='btn btn-danger'>Reserve A Table</button>
           
            </div>

            <div className='d-sm-none d-md-block  d-flex justify-content-between align-items-center gap-3 text-start p-5 bg-opacity-25 bg-secondary text-white'>
                <h3>CALL NOW :</h3> <h1>+880-17-215-***-48</h1></div>
          </div>
            
            </div>
        </div>
    );
};

export default Reservation;