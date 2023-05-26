import useTitle from "../../CustomHooks/useTitle";


const Blogs = () => {
    useTitle('Blogs');

    return (
        <div className="py-16 bg-gradient-to-l from-[#e0a7da] to-[#f4dbf1]">
            <div className=" m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="mb-12 space-y-2 text-center">
                    <span className="block w-max mx-auto px-3 py-1.5 border border-purple-400 rounded-full bg-purple-100 text-[#d062c5]">Blogs</span>
                    <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
                    <p className="lg:w-6/12 lg:mx-auto">ToyStacks is the ultimate destination for young builders and LEGO enthusiasts. From classic sets to the latest releases, ToyStacks is where dreams take shape, one brick at a time.</p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                        <img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" loading="lazy" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                        <div className="sm:w-7/12 pl-0 p-5">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold text-cyan-900">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                                    <p className="text-gray-600">An access token is a credential that represents the authorization granted to a client to access protected resources on behalf of a user. It is typically short-lived and used for authentication and authorization purposes. A refresh token is a long-lived token used to obtain a new access token when the current one expires. Access tokens should be stored securely on the client-side, typically in memory or a secure storage mechanism. Refresh tokens should be stored securely, typically in an HTTP-only cookie or secure storage, to prevent unauthorized access.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                        <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" loading="lazy" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                        <div className="sm:w-7/12 pl-0 p-5">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold text-cyan-900">Compare SQL and NoSQL databases?</h4>
                                    <p className="text-gray-600">SQL databases are structured and use a schema to define the structure of data, while NoSQL databases are unstructured and do not require a predefined schema. SQL databases use SQL for querying and managing data, while NoSQL databases use various query languages or APIs. SQL databases provide strong consistency and ACID transactions, while NoSQL databases prioritize scalability, flexibility, and eventual consistency. SQL databases are suitable for complex relationships and structured data, while NoSQL databases excel in handling large volumes of unstructured or semi-structured data.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                        <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" loading="lazy" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                        <div className="sm:w-7/12 pl-0 p-5">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold text-cyan-900">What is express js? What is Nest JS ?</h4>
                                    <p className="text-gray-600">Express.js is a minimalist web application framework for Node.js that provides a simple and flexible way to build web applications and APIs. It is widely used and focuses on simplicity and extensibility, allowing developers to handle HTTP requests, routing, middleware, and more. <br />

                                        NestJS is a framework for building scalable and efficient server-side applications with Node.js. It is built on top of Express.js and provides additional features inspired by Angular, such as dependency injection, modules, decorators, and a powerful CLI. NestJS promotes modular and testable code architecture, making it well-suited for large-scale enterprise applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                        <img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" loading="lazy" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                        <div className="sm:w-7/12 pl-0 p-5">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold text-cyan-900">What is MongoDB aggregate and how does it work?</h4>
                                    <p className="text-gray-600">MongoDB aggregate is a powerful framework that allows for advanced data processing and analysis operations on collections of documents. It offers a flexible way to perform computations, transformations, and aggregations on the data stored in MongoDB. Aggregation pipelines consist of stages that sequentially manipulate and transform documents, applying various operations like filtering, grouping, sorting, projecting, and more. Each stage takes input from the previous stage and passes the transformed results to the next stage, enabling complex data processing and analytics in a single query.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Blogs;