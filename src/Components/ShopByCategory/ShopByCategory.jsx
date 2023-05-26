import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const ShopByCategory = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleCheckUser = () => {
        if (!user) {
            Swal.fire(
                {
                    title: 'Login First!',
                    text: 'You have to log in first to view details.',
                    icon: 'warning',
                    confirmButtonText: 'Continue',
                    confirmButtonColor: '#ab14a3'
                },
                navigate(from, { replace: true })
            )
        }
    }

    const [activeTab, setActiveTab] = useState("Architecture");
    const [toyBySubCategory, setToyBySubCategory] = useState([]);
    // console.log(toyBySubCategory);
    // const { toyName, photo, sellerName, sellerEmail, subCategory, price, quantity, rating, description } = toyBySubCategory || {};


    useEffect(() => {
        fetch(`https://a11-toystacks-server.vercel.app/toys_by_category/${activeTab}`)
            .then(res => res.json())
            .then(data => setToyBySubCategory(data))
    }, [activeTab])

    const handleSubCategory = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className=' lg:mx-32 mt-10 bg-gradient-to-l from-[#e0a7da] to-[#f4dbf1] text-gray-600 rounded-lg'>
            <Tabs>
                <TabList className='bg-gradient-to-l from-[#9b5b94] to-[#dec5db] text-gray-50 rounded-lg text-lg text-center'>
                    <Tab onClick={() => (handleSubCategory("Architecture"))} >Architecture</Tab>
                    <Tab onClick={() => (handleSubCategory("Technic"))}>Technic</Tab>
                    <Tab onClick={() => (handleSubCategory("Minifigures"))}>Minifigures</Tab>
                </TabList>

                <TabPanel>
                    <section className="text-gray-600 grid md:grid-cols-2 py-10 gap-8 mx-8 md:mx-24">
                        {
                            toyBySubCategory.map(toy => <div key={toy._id} className="card glass w-full bg-base-100 shadow-xl">
                                <figure className='h-64 p-6 md:p-0 md:pt-6 '><img className='w-fit h-full' src={toy.photo} /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">{toy.toyName}</h2>
                                    <div className="flex mt-6 justify-around items-center py-5 border-b-2 border-t-2 border-gray-200 mb-5">
                                        <span className="font-medium text-2xl text-gray-900">${toy.price}</span>
                                        <div className='flex flex-col items-center'>
                                            <p>Ratings: {toy.rating}</p>
                                            <Rating className='' style={{ maxWidth: 100 }} value={toy.rating} readOnly />
                                        </div>
                                    </div>

                                    <Link onClick={handleCheckUser} className="btn bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 border-0 normal-case" to={`/single_toy_details/${toy._id}`}>View Details</Link>

                                </div>
                            </div>)
                        }
                    </section>
                </TabPanel>

                <TabPanel>
                    <section className="text-gray-600 grid md:grid-cols-2 py-10 gap-8 mx-6 md:mx-24">
                        {
                            toyBySubCategory.map(toy => <div key={toy._id} className="card glass w-full bg-base-100 shadow-xl">
                                <figure className='h-64 p-6 md:p-0 md:pt-6 '><img className='w-fit h-full' src={toy.photo} /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">{toy.toyName}</h2>
                                    <div className="flex mt-6 justify-around items-center py-5 border-b-2 border-t-2 border-gray-200 mb-5">
                                        <span className="font-medium text-2xl text-gray-900">${toy.price}</span>
                                        <div className='flex flex-col items-center'>
                                            <p>Ratings: {toy.rating}</p>
                                            <Rating className='' style={{ maxWidth: 100 }} value={toy.rating} readOnly />
                                        </div>
                                    </div>

                                    <Link onClick={handleCheckUser} className="btn bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 border-0 normal-case" to={`/single_toy_details/${toy._id}`}>View Details</Link>
                                </div>
                            </div>)
                        }
                    </section>
                </TabPanel>

                <TabPanel>
                    <section className="text-gray-600 grid md:grid-cols-2 py-10 gap-8 mx-6 md:mx-24">
                        {
                            toyBySubCategory.map(toy => <div key={toy._id} className="card glass w-full bg-base-100 shadow-xl">
                                <figure className='h-64 p-6 md:p-0 md:pt-6 '><img className='w-fit h-full' src={toy.photo} /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">{toy.toyName}</h2>
                                    <div className="flex mt-6 justify-around items-center py-5 border-b-2 border-t-2 border-gray-200 mb-5">
                                        <span className="font-medium text-2xl text-gray-900">${toy.price}</span>
                                        <div className='flex flex-col items-center'>
                                            <p>Ratings: {toy.rating}</p>
                                            <Rating className='' style={{ maxWidth: 100 }} value={toy.rating} readOnly />
                                        </div>
                                    </div>

                                    <Link onClick={handleCheckUser} className="btn bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 border-0 normal-case" to={`/single_toy_details/${toy._id}`}>View Details</Link>
                                </div>
                            </div>)
                        }
                    </section>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ShopByCategory;