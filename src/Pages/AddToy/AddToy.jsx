import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../CustomHooks/useTitle";

const AddToy = () => {
    useTitle('Add Toy');

    const { user } = useContext(AuthContext);

    const toySubCategories = [
        "Architecture",
        "Technic",
        "Minifigures"
    ];

    const [selectedToySubCategory, setSelectedToySubCategory] = useState(
        toySubCategories[0]
    );

    const handleChangeSelectedValue = (event) => {
        // console.log(event.target.value);
        setSelectedToySubCategory(event.target.value);
    };

    const handleUpload = e => {
        e.preventDefault();

        const toyName = e.target.toyName.value;
        const photo = e.target.photo.value;
        const sellerName = e.target.sellerName.value;
        const sellerEmail = e.target.sellerEmail.value;
        const subCategory = e.target.subCategory.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;

        const newToy = { toyName, photo, sellerName, sellerEmail, subCategory, price, quantity, rating, description }

        // console.log(newToy);

        fetch(`https://a11-toystacks-server.vercel.app/upload-toy`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.insertedId) {
                    Swal.fire(
                        // 'Good job!',
                        // 'New toy Added!',
                        // 'success'
                        {
                            title: 'Good job!',
                            text: 'New toy Added!',
                            icon: 'success',
                            confirmButtonText: 'Continue',
                            confirmButtonColor: '#ab14a3'
                        }
                    );
                }
            })
    }

    return (
        <>
            < section className="rounded-lg bg-gray-200 p-8 shadow-lg" >
                <div className="text-center my-9">
                    <h2 className="text-2xl text-[#ab14a3] font-bold">Add a New Toy</h2>
                    <p className="">Use the below form to create a new toy</p>
                </div>
                <div className="md:px-28">
                    <form onSubmit={handleUpload} className="space-y-7">
                        <div className="flex gap-8">
                            <div className="w-1/2">
                                <label className="font-medium">Toy Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Toy Name"
                                    type="text"
                                    name="toyName"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Photo URL</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Photo URL"
                                    type="url"
                                    name="photo"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="font-medium">Seller Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Seller Name"
                                    type="text"
                                    name="sellerName"
                                    required
                                    readOnly
                                    value={user?.displayName || ''}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Seller Email</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Seller Email"
                                    type="email"
                                    name="sellerEmail"
                                    required
                                    readOnly
                                    value={user?.email || ''}
                                />
                            </div>
                        </div>


                        <div className="flex gap-6">
                            <div className="form-control w-1/2">
                                <label className="">
                                    <span className="font-medium">Sub-Category</span>
                                </label>
                                <select className="select select-bordered"
                                    name="subCategory"
                                    value={selectedToySubCategory}
                                    onChange={handleChangeSelectedValue}
                                >
                                    {toySubCategories.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Price"
                                    type="number"
                                    name="price"
                                    min='1'
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="font-medium">Available</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Available"
                                    type="number"
                                    name="quantity"
                                    min='1'
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="font-medium">Rating</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Rating"
                                    type="number"
                                    name="rating"
                                    min='1'
                                    max='5'
                                    step='any'
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-medium">Detail description</label>
                            <textarea name="description" placeholder="Write about your toy..." className="w-full rounded-lg border-gray-200 p-3 text-sm" rows="5" required></textarea>
                        </div>



                        <div className="mt-4">
                            <input className=" w-full cursor-pointer rounded-md bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 py-3 px-5 text-base btn border-0" type="submit" value="Upload" />
                        </div>
                    </form>
                </div>
            </section >
        </>
    );
};

export default AddToy;