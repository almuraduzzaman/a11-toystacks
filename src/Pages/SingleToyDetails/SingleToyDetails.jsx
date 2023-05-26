import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import useTitle from "../../CustomHooks/useTitle";
import Swal from "sweetalert2";
import { BsCashCoin, BsFillBagCheckFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const SingleToyDetails = () => {
    useTitle('Toy Details');
    const { user } = useContext(AuthContext);

    const toy = useLoaderData();
    const { _id, toyName, photo, sellerName, sellerEmail, subCategory, price, quantity, rating, description } = toy || {};
    // console.log(toy);

    const handleBuy = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added to Cart',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <section className="text-gray-600 px-6 md:px-0 overflow-hidden bg-gradient-to-l from-[#e0a7da] to-[#f4dbf1]">
            <div className="py-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img className="lg:w-1/2 w-full lg:h-[500px] h-64 object-cover object-center bg-gray-200 p-10 border-4 rounded-xl" src={photo} />
                    <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">

                        <h1 className="text-gray-900 text-3xl  font-medium mb-1">{toyName}</h1>
                        <p className="">{subCategory}</p>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <Rating className='mr-1' style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="">{description}</p>
                        <p className="mt-3 flex gap-2 items-center text-lg"><BsFillBagCheckFill />{quantity} <span>Items Left</span></p>

                        <div className="flex mt-2 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>

                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <span className=" font-medium text-2xl text-gray-900 flex gap-4 items-center justify-center"><BsCashCoin className="w-8 h-8 mt-2" />${price}</span>
                            <button onClick={handleBuy} className="flex ml-auto text-[#af57a6] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded font-medium">Buy Now</button>
                        </div>

                        <div className="relative text-center mt-4 border-2 p-5 rounded-md bg-gray-200">
                            <div className="absolute top-2 left-3 flex gap-2 items-center text-green-600">
                                <span><BsFillBookmarkStarFill /> </span>
                                <span>Verified Seller</span>
                            </div>
                            {/* <img className="w-10 h-10 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={user.photoURL} /> */}
                            <p className=""></p>
                            <span className="inline-block h-1 w-10 rounded bg-[#e0a7da] mb-2"></span>
                            <h2 className="text-gray-900 font-medium  tracking-wider text-sm">{sellerName}</h2>
                            <p className="text-gray-500">{sellerEmail}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleToyDetails;