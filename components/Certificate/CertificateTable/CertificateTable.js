import React, { useState } from 'react';
import CertificateDeletModal from './CertificateModal/CertificateDeletModal/CertificateDeletModal';
import CertificatePagination from './CertificatePagination/CertificatePagination';
import CertificateTableRow from './CertificateTableRow/CertificateTableRow';

const CertificateTable = () => {

    const [open, setOpen] = useState(false);
    const [deleteopen, setDeleteOpen] = useState(false);

    const thData = [
        {
            id: 1,
            name: 'Email'
        },
        {
            id: 2,
            name: 'Author'
        },
        {
            id: 3,
            name: 'Category'
        },
        {
            id: 4,
            name: 'Date'
        },
        {
            id: 5,
            name: 'Status'
        },
        {
            id: 6,
            name: 'Action'
        },
    ]

    return (
        <>
            <div>
                {/* Table section */}
                <div className="overflow-hidden mt-10 overflow-x-auto rounded-lg">
                    <table className="min-w-full  text-sm">
                        <thead className="bg-[#8888881e] text-center">
                            <tr className=' border-b border-[#E6E6E6]'>
                                {
                                    thData.map(dt => <th key={dt.id} className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-900">
                                        <p className=' font-poppins font-medium text-deep-gray'>{dt.name}</p>
                                    </th>)
                                }
                            </tr>
                        </thead>

                        <tbody>
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                            <CertificateTableRow deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <CertificatePagination />
            </div>

            {/* Modal section */}
            <CertificateDeletModal deleteopen={deleteopen} setDeleteOpen={setDeleteOpen} />



        </>
    );
};

export default CertificateTable;