import React, { useEffect, useState } from 'react';
import img from '../../../assets/banner.jpg'
import SafeList from '../../SafeList/SafeList';
import TopRatedFooe from '../../TopRatedFood/TopRatedFooe';
import { FaHotjar } from 'react-icons/fa';
import CoustomarRivew from '../../CoustomarRivew/CoustomarRivew';



const Header = () => {
    const [chefList, setChefLis] = useState([])
    useEffect(() => {
        fetch(`https://server-6jg7-programmerasif.vercel.app/chefsList`)
            .then(res => res.json())
            .then(data => setChefLis(data.chefs))
    }, [])
    return (
        <>
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
                            <img src={img} alt="" className='w-100 ' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5 py-5'>
                <div>
                    <h3 className='text-danger text-center'>OUR CHEFs <FaHotjar /></h3>
                    <hr />
                    <div className='row'>
                        {
                            chefList.map(chef => <div className='col-md-4 col-sm-12 gap-3 mt-3'><SafeList chef={chef}  key={chef.id}/></div>)
                        }
                    </div>
                </div>
               <div>
               <TopRatedFooe />
               </div>
               <div>
                <CoustomarRivew />
               </div>
            </div>
            
        </>
    );
};

export default Header;