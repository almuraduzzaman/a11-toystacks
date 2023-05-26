import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/useTitle";


const UpdateToyData = () => {
    useTitle('Update Toy');

    const toy = useLoaderData();
    const { _id, toyName, photo, subCategory, price, quantity, rating, description } = toy || {};
    // console.log(toy);


    const { user } = useContext(AuthContext);

    const toySubCategories = [
        "Architecture",
        "Technic",
        "Minifigures"
    ];

    const [selectedToySubCategory, setSelectedToySubCategory] = useState(subCategory);

    const handleChangeSelectedValue = (event) => {
        // console.log(event.target.value);
        setSelectedToySubCategory(event.target.value);
    };

    const handleUpdate = e => {
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

        const updatedToy = { toyName, photo, sellerName, sellerEmail, subCategory, price, quantity, rating, description }


        fetch(`https://a11-toystacks-server.vercel.app/update-toy/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#ab14a3'
                    })
                }
            })
    }

    return (
        <>
            < section className="rounded-lg bg-gray-200 p-8 shadow-lg" >
                <div className="text-center my-9">
                    <h2 className="text-2xl text-[#ab14a3] font-bold">Update Toy Details</h2>
                    <p className="">Use the below form to create a new toy</p>
                </div>
                <div className="md:px-28">
                    <form onSubmit={handleUpdate} className="space-y-7">
                        <div className="flex gap-8">
                            <div className="w-1/2">
                                <label className="font-medium">Toy Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Toy Name"
                                    defaultValue={toyName}
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
                                    defaultValue={photo}
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
                                    defaultValue={price}
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
                                    defaultValue={quantity}
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
                                    defaultValue={rating}
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
                            <textarea name="description" placeholder="Write about your toy..."
                                defaultValue={description}
                                className="w-full rounded-lg border-gray-200 p-3 text-sm" rows="5" required></textarea>
                        </div>



                        <div className="mt-4">
                            <input className=" w-full cursor-pointer rounded-md bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r py-3 px-5 text-base btn border-0" type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </section >
        </>

    );
};

export default UpdateToyData;