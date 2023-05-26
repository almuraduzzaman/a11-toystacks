

const Payment = () => {
    return (
        <section className="h-auto mt-10 bg-gray-100 py-10 text-gray-600">
            <h4 className="sm:text-3xl text-2xl font-medium pl-6 md:pl-32 text-gray-900 lg:mb-0 mb-4">Pay Us with Secure QR Code</h4>
            <div className="mx-auto px-5 mt-10 flex max-w-3xl flex-wrap justify-center rounded-lg bg-white py-10 md:py-24">

                {/* QR Code Number Account & Uploadfile  */}
                <div className="flex-wrap md:flex">
                    <div className="mx-auto">
                        <img className="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0" src="https://i.ibb.co/XLFVMGS/Al-Murad-Uzzaman.png" alt="qr" />
                        <div>
                            <h1 className="font-laonoto mt-4 text-center text-xl font-bold">Easy Payment</h1>
                            <p className="mt-2 text-center font-semibold text-gray-600">With your phone</p>
                            <p className="mt-1 text-center font-medium text-[#ab14a3]">040-12-00-01166166-001</p>
                        </div>
                    </div>

                    {/* Step Checkout */}
                    <div className="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3">
                        <div className="relative flex pb-12">
                            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                            </div>
                            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ab14a3] text-white">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className=" mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 1</h2>
                                <p className="font-laonoto ">
                                    Click Generate <b>QR Code</b> to create a unique <b>QR code</b> for your payment.
                                </p>
                            </div>
                        </div>
                        <div className="relative flex pb-12">
                            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                            </div>
                            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ab14a3] text-white">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className=" mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 2</h2>
                                <p className="font-laonoto ">See the clear and visually appealing <b>QR code</b> on your screen.</p>
                            </div>
                        </div>
                        <div className="relative flex pb-12">
                            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ab14a3] text-white">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className=" mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 3</h2>
                                <p className="font-laonoto ">Receive a confirmation message once the payment is successfully processed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                            <span className=" font-medium">Google Play</span>
                        </span>
                    </button>
                    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="text-xs text-gray-600 mb-1">Download on the</span>
                            <span className=" font-medium">App Store</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Payment;