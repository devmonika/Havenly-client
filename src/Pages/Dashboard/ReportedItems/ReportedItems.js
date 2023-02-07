import React from 'react';
import { useQuery } from '@tanstack/react-query';

const ReportedItems = () => {

    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/report');
            const data = await res.json();
            return data;
        }
    });

    console.log(reports);



    return (
        <div className='grid md:grid-cols-2 gap-2  '>

            {/* {
                reports.map(report => <div
                    report={report} key={report._id}
                    className="bg-white shadow-lg"
                >

                    <h2 className='text-left text-3xl font-semibold my-10 ml-10 text-secondary'>{report.report}</h2>

                </div>)
            } */}
            {
                reports.map(report => <div
                    report={report}
                    key={report._id}
                    className="card w-96 bg-base-100 shadow-xl mt-24 border border-green-500 " >

                    <div className="card-body ">
                        <div className=" justify-center">
                            {/* <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button> */}
                        </div>
                        <p className='text-xl'>{report.report}</p>
                        {/* <p></p> */}
                    </div>
                </div>)
            }


        </div>
    );
};

export default ReportedItems;