import React from 'react';
import { useQuery } from '@tanstack/react-query';

const ReportedItems = () => {

    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://havenly-server-seven.vercel.app/report');
            const data = await res.json();
            return data;
        }
    });

    console.log(reports);



    return (

        <div className=''>

            <h2 className=' text-3xl font-semibold mt-24 text-center ml-10 text-secondary'>All Reported Items</h2>

            <div className='grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 '>
                {/* <div className='container mx-auto p-10 md:p-20 antialiased grid grid-cols-1'> */}
                {
                    reports?.map(report =>


                        <div className="mt-8 grid place-items-center  " report={report} key={report._id}>
                            <div className="bg-white   h-80 w-72 rounded-md">
                                <div className="flex justify-center items-center leading-none">
                                    <img

                                        src={report.img1}
                                        alt="houseImage"
                                        className=" w-full rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="block mb-1 font-extralight"> {report.address}</p>
                                    <p className="  ">
                                        {report.report}
                                    </p>
                                </div>



                                <div className='flex items-center'>
                                    <div className='flex'>
                                        <div className='avatar'>
                                            <div className='w-12 rounded-full'>
                                                <img src={report.seller_img} alt="" />
                                            </div>

                                        </div>

                                    </div>
                                    <div className="text-secondary ml-2 text-sm md:text-base mt-1 font-semibold">
                                        {report.seller_name}
                                    </div>

                                </div>

                                <div className='bg-blue-50 p-5 mt-2'>
                                    <div className='sm:flex sm:justify-between'>
                                        <div className="text-lg text-gray-700">
                                            <span className="text-gray-900 font-bold">{report.country}</span>
                                        </div>
                                        <div className=" text-secondary font-bold text-lg md:text-lg">
                                            Price: ${report.price}
                                        </div>


                                    </div>
                                </div>




                            </div>
                        </div>
                    )

                }

            </div>


        </div>



    );
};

export default ReportedItems;