

const Feedback = () => {
    return (
        <section className="bg-white mt-10 py-5 rounded px-6 md:px-32">
            {/* <h4 className="text-2xl text-center font-bold">Our Customer Feedback</h4> */}
            <h4 className="sm:text-3xl text-2xl font-medium  text-gray-900 lg:mb-0 mb-4">Our Customer Feedback</h4>
            <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
                <div
                    className="flex justify-evenly items-center w-[80%] lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-green-400 w-20 h-20"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold pb-2">82%</h2>
                        <h4 className="inline text-gray-500 text-md">Very Satisfied</h4>
                    </div>
                </div>
                <div
                    className="flex justify-evenly items-center w-[80%] lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-gray-400 w-20 h-20"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a25.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold pb-2">16%</h2>
                        <h4 className="inline text-gray-500 text-md">Neutral</h4>
                    </div>
                </div>
                <div
                    className="flex justify-evenly items-center w-[80%] lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-red-300 w-20 h-20"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold pb-2">02%</h2>
                        <h4 className="inline text-gray-500 text-md">Very Unsatisfied</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;