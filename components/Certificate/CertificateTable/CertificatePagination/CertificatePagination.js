import React from 'react';

const CertificatePagination = () => {
    return (
        <div className="flex items-center justify-between py-3 mt-9">
            <div className="flex flex-1 justify-between sm:hidden">
                <p
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </p>
                <p
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </p>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-[#6D6D6D]  font-inter ">
                        Showing <span className="font-bold ">15</span> out{' '}
                        <span className="font-bold">2000</span> Results
                    </p>
                </div>

                <div className=' bg-white'>
                    <nav className="isolate inline-flex -space-x-px rounded-full text-[#777C81]  shadow-sm bg-[#ECECEC] px-4" aria-label="Pagination">
                        <p
                            className="relative inline-flex items-center rounded-l-full  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                            <span>Prev</span>
                        </p>
                        <p
                            aria-current="page"
                            className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 bg-blue text-white"
                        >
                            1
                        </p>
                        <p
                            className="relative inline-flex items-center   px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                            2
                        </p>
                        <p
                            className="relative hidden items-center   px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                        >
                            3
                        </p>
                        <span className="relative inline-flex items-center  px-4 py-2 text-sm font-medium text-gray-700">
                            ...
                        </span>
                        <p
                            className="relative hidden items-center  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                        >
                            8
                        </p>
                        <p
                            className="relative inline-flex items-center  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                            9
                        </p>
                        <p
                            className="relative inline-flex items-center  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                            10
                        </p>
                        <p
                            className="relative inline-flex items-center rounded-r-full  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                            <span>Next</span>
                        </p>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default CertificatePagination;