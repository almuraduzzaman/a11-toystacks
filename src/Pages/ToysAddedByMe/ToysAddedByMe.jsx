import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../CustomHooks/useTitle";
import { FaArrowDown, FaArrowUp, FaEdit, FaTrashAlt } from "react-icons/fa";


const ToysAddedByMe = () => {
    useTitle('My Toys');

    const [allToys, setAllToys] = useState([]);
    const [control, setControl] = useState(false);
    const [sortDirection, setSortDirection] = useState('');
    // console.log(sortDirection);

    const { user } = useContext(AuthContext);

    const URL = `https://a11-toystacks-server.vercel.app/toys-by-email?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [control, URL])


    const handleSortDesc = (sortDirection) => {
        setSortDirection(sortDirection);
        fetch(`https://a11-toystacks-server.vercel.app/toys-by-email-desc?sellerEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    };


    const handleSortAsc = (sortDirection) => {
        setSortDirection(sortDirection);
        fetch(`https://a11-toystacks-server.vercel.app/toys-by-email-asc?sellerEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    };

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ab14a3',
            cancelButtonColor: '#f280ec',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://a11-toystacks-server.vercel.app/delete-toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data?.deletedCount > 0) {
                            Swal.fire(
                                // 'Deleted!',
                                // 'Your toy has been deleted.',
                                // 'success',
                                {
                                    title: 'Deleted!',
                                    text: 'Your toy has been deleted.',
                                    icon: 'success',
                                    confirmButtonText: 'Continue',
                                    confirmButtonColor: '#ab14a3'
                                }

                            )
                            setControl(!control);
                        }
                    })
            }
        })

    }


    return (
        <>
            <div className="flex justify-center gap-4 mt-10">
                <button onClick={() => handleSortDesc('desc')} disabled={sortDirection === 'desc'} className="btn mx-auto border-0 bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 px-4 py-2 rounded-md">
                    <span className="mr-2">Sort Price</span> <span><FaArrowDown /></span>
                </button>
                <button onClick={() => handleSortAsc('asc')} disabled={sortDirection === 'asc'} className="btn mx-auto border-0 bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 px-4 py-2 rounded-md">
                    <span className="mr-2">Sort Price</span> <span><FaArrowUp /></span>
                </button>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys && allToys.map((toy, idx) => {
                                return (
                                    <tr key={toy?._id}>
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
                                        <td className="flex items-center gap-4"><Link className="btn btn-outline hover:bg-[#eac3e8] border-0" to={`/update_toy_data/${toy?._id}`}><FaEdit className="w-5 h-10 text-[#ab14a3]" /></Link>
                                            <button onClick={() => handleDelete(toy?._id)} className="btn btn-outline border-0 hover:bg-red-100"><FaTrashAlt className="w-5 h-10 text-red-500" /></button>
                                        </td>
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

export default ToysAddedByMe;