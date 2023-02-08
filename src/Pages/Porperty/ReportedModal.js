import React from 'react';
import { toast } from 'react-hot-toast';

const ReportedModal = () => {

    const handleModalSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const report = form.report.value;
        console.log(report);
        form.reset();
        const reportData = {
            report
        }


        fetch('http://localhost:5000/report', {
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
                                placeholder="Give your valuable review"
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