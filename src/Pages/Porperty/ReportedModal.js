import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ReportedModal = ({ details }) => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    const { address, category, country, price, img1, date, seller_name, seller_img, seller_email } = details;

    console.log(details);
    // const { 
    //     // userName: user?.displayName,
    //     // email: user?.email,
    //     propertyId: id
    //     seller_name,
    //     seller_img,
    //     address,
    //     img1,
    //     img2,
    //     category,
    //     country,
    //     price,
    //     description,
    //     date, } = details

    const handleModalSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const report = form.report.value;
        console.log(report);
        form.reset();
        const reportData = {
            report,
            address,
            userName: user?.displayName,
            email: user?.email,

            category, country, price, img1, date, seller_name, seller_img, seller_email
        }


        fetch('https://havenly-server-seven.vercel.app/report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Reported successfully!!!')
            })
            .catch(err => console.log(err));

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black bg-white">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className='text-lg font-bold text-center m-2'>Add A Report</h3>
                    <form
                        onSubmit={handleModalSubmit}
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >


                        <div className="space-y-3 text-sm">
                            <label className="block text-sm">Report</label>
                            <textarea
                                type="text"
                                name="report"
                                placeholder="Give your valuable report"
                                className="w-full px-4 py-3 rounded-md green:border-green-700 green:bg-gray-100 dark:text-green-900 focus:dark:border-green-400"
                            />
                        </div>
                        <div>
                            <button className='btn btn-outline btn-success' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportedModal;