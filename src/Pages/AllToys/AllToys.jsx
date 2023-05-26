import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../CustomHooks/useTitle";
import { FaRegEye } from "react-icons/fa";


const AllToys = () => {
    useTitle('All Toys');

    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState('');
    // console.log(searchText);


    useEffect(() => {
        fetch('https://a11-toystacks-server.vercel.app/all-toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    const handleSearch = () => {
        fetch(`https://a11-toystacks-server.vercel.app/getToysByName/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAllToys(data);
            });
    };

    return (
        <>
            <div className="form-control mt-10">
                <div className="input-group flex justify-center">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search by Toy name…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto md:flex justify-center mt-10">
                <table className="table table-compact w-[80%]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys && allToys.map((toy, idx) => {
                                return (
                                    <tr key={toy._id}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy?.photo} alt="toy image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-normal">{toy?.sellerName}</td>
                                        <td className="font-medium whitespace-normal">{toy?.toyName}</td>
                                        <td>{toy?.subCategory}</td>
                                        <td>${toy?.price}</td>
                                        <td className="font-medium">{toy?.quantity}</td>
                                        <td ><Link className="btn btn-outline hover:bg-[#eac3e8] border-0" to={`/single_toy_details/${toy._id}`}><FaRegEye className="w-5 h-10 text-[#ab14a3]" /></Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllToys;