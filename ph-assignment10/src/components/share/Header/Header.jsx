import React from 'react';
import img from '../../../assets/banner.jpg'


const Header = () => {
    return (
        <div className='container rounded'>
            
            <div className="bg-light banner mt-5">
               <div className='d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center'>
                {/* left side  */}
                <div>
                <h1 className='px-5 pt-5'>Perfect Fit For Recipe <br /> Blogging Website</h1>
                <button className='btn btn-danger ms-5'>Get-Start</button>
                </div>
                {/* right side */}
                <div >
                    <img src={img} alt="" className='w-100 '/>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Header;