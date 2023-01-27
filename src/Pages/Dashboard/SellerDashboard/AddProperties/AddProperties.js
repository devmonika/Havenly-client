import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddProperties = () => {
    const [isUploading, setIsUpLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [imageUrl1, setImageUrl1] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");

    // catch input value by using useRef hook
    const photoRef1 = useRef();
    const photoRef2 = useRef();
    const photoRef3 = useRef();
    const addressRef = useRef();
    const categoryRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();
    const yearRef = useRef();
    const zipRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const sqftRef = useRef();
    const bedroomsRef = useRef();
    const bathroomsRef = useRef();
    const statusRef = useRef();
    const contactRef = useRef();

    // Handle Image Upload (image upload by api in imgBB)
    const imageUploadHandler = (event, setImg) => {
        // console.log(event.target.files[0]);

        const imageData = new FormData();
        imageData.set("key", "5fe8f21565e313f421a85537d88c8f49");
        imageData.append("image", event.target.files[0]);
        imageData.append("image", event.target.files[1]);
        imageData.append("image", event.target.files[2]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // handle add property and save at the database
    const handleAddProduct = async (e) => {
        e.preventDefault();

        const property = {
            img1: imageUrl1,
            img2: imageUrl2,
            img3: imageUrl3,
            address: addressRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value,
            country: countryRef.current.value,
            city: cityRef.current.value,
            year: yearRef.current.value,
            zip: zipRef.current.value,
            price: priceRef.current.value,
            sqft: sqftRef.current.value,
            bedrooms: bedroomsRef.current.value,
            bathrooms: bathroomsRef.current.value,
            status: statusRef.current.value,
            contact: contactRef.current.value,
        };

        console.log(property, "this is property");

        // add property info at mongodb
        try {
            setMessage("");
            const url = "https://havenly-server1.vercel.app/properties";
            const option = {
                method: "POST",
                body: JSON.stringify(property),
                headers: {
                    'content-type': 'application/json',
                },
            };
            const response = await fetch(url, option);
            const data = await response.json();
            if (data) {
                setMessage("Your property added into database successfully.");
                toast.success('Your property added successfully');
                addressRef.current.value = "";
                categoryRef.current.value = "";
                descriptionRef.current.value = "";
                countryRef.current.value = "";
                cityRef.current.value = "";
                yearRef.current.value = "";
                zipRef.current.value = "";
                priceRef.current.value = "";
                sqftRef.current.value = "";
                bedroomsRef.current.value = "";
                bathroomsRef.current.value = "";
                statusRef.current.value = "";
                contactRef.current.value = "";
            }
        } catch (error) {
            console.log("err", error);
        }
    };

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://havenly-server1.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <div className="min-h-screen p-6 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl">Add Properties</h2>
                        <p className="mb-6 mt-6">"Looking for more exposure for your listings? Try our real estate app! List your properties and reach more buyers."</p>

                        <div className="rounded shadow-lg dark:shadow-[#949494] p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div>
                                        <form onSubmit={handleAddProduct} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="address">Address / Street</label>
                                                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full" placeholder='Address / Street'
                                                    ref={addressRef}
                                                />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="category">Category</label>
                                                <select

                                                    className="select select-bordered text-sm sm:text-base pr-4 rounded-lg border w-full py-2"
                                                    ref={categoryRef}
                                                >
                                                    {
                                                        categories.map(category =>
                                                            <option
                                                                key={category._id}
                                                                value={category.categoryName}
                                                            >
                                                                {category.categoryName}
                                                            </option>
                                                        )
                                                    }
                                                </select>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="country">Country / region</label>
                                                <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                                    <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        ref={countryRef}
                                                    />
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="city">City</label>
                                                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full" placeholder="City"
                                                    ref={cityRef}
                                                />
                                            </div>


                                            <div className="md:col-span-2">
                                                <label htmlFor="year_built">Built year</label>
                                                <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="date" name="yearBuilt" id="yearBuilt" placeholder="Built year" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        ref={yearRef}
                                                    />
                                                </div>
                                            </div>

                                            <div className="md:col-span-1">
                                                <label htmlFor="zipcode">Zipcode</label>
                                                <input type="number" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full" placeholder="Zip Code"
                                                    ref={zipRef}
                                                />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label>Images</label>
                                                <input
                                                    onChange={(e) => imageUploadHandler(e, setImageUrl1)}
                                                    type="file"
                                                    multiple={true}
                                                    accept="image/*"
                                                    placeholder="Upload Images"
                                                    className="file-input file-input-primary w-full"
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label>Images</label>
                                                <input
                                                    onChange={(e) => imageUploadHandler(e, setImageUrl2)}
                                                    type="file"
                                                    multiple={true}
                                                    accept="image/*"
                                                    placeholder="Upload Images"
                                                    className="file-input file-input-primary w-full"
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label>Images</label>
                                                <input
                                                    onChange={(e) => imageUploadHandler(e, setImageUrl3)}
                                                    type="file"
                                                    multiple={true}
                                                    accept="image/*"
                                                    placeholder="Upload Images"
                                                    className="file-input file-input-primary w-full"
                                                />
                                            </div>

                                            {/* <div className="md:col-span-3">
                                                <label>Images2</label>
                                                <input
                                                    type="file"
                                                    multiple={true}
                                                    accept="image/*"
                                                    placeholder="Upload Images"
                                                    className="file-input file-input-primary w-full"
                                                    onChange={handleImageChange}
                                                    {...register("image2", {
                                                        required: true
                                                    })}
                                                />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label>Images3</label>
                                                <input
                                                    type="file"
                                                    multiple={true}
                                                    accept="image/*"
                                                    placeholder="Upload Images"
                                                    className="file-input file-input-primary w-full"
                                                    onChange={handleImageChange}
                                                    {...register("image3", {
                                                        required: true
                                                    })}
                                                />
                                            </div> */}

                                            <div className="md:col-span-5">
                                                <label htmlFor="description">Description</label>
                                                <textarea className="textarea w-full pb-8 border-gray-300"
                                                    placeholder="Description"
                                                    name='description'
                                                    ref={descriptionRef}
                                                ></textarea>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="price">Price</label>
                                                <input type="text" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full" placeholder="Price"
                                                    ref={priceRef}
                                                />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="sqft">Sqft</label>
                                                <input type="number" name="sqft" id="sqft" className="h-10 border mt-1 rounded px-4 w-full" placeholder="Sqft"
                                                    ref={sqftRef}
                                                />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="bedrooms">Bedrooms</label>
                                                <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="number" name="bedrooms" id="bedrooms" placeholder="Bedrooms" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        ref={bedroomsRef}
                                                    />
                                                </div>
                                            </div>


                                            <div className="md:col-span-2">
                                                <label htmlFor="bathrooms">Bathrooms</label>
                                                <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="number" name="bathrooms" id="bathrooms" placeholder="Bathrooms" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        ref={bathroomsRef}
                                                    />
                                                </div>
                                            </div>


                                            <div className="md:col-span-1">
                                                <label htmlFor="status">Status</label>
                                                <select
                                                    className="select select-bordered text-sm sm:text-base pr-4 rounded-lg border  w-full py-2"
                                                    ref={statusRef}>
                                                    <option>For Sale</option>
                                                    <option>For Rent</option>
                                                </select>

                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="contact">Contact</label>
                                                <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="number" name="contact" id="contact" placeholder="Contact" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        ref={contactRef}
                                                    />
                                                </div>
                                            </div>

                                            <div className="md:col-span-5">
                                                <div className="inline-flex items-center">
                                                    <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                                    <label htmlFor="billing_same" className="ml-2">Confirm that the information provided is accurate and true.</label>
                                                </div>
                                            </div>

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <input className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded" type="submit" value="Add Properties" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperties;