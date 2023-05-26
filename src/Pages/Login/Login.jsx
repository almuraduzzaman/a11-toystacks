import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/useTitle";

const Login = () => {
    useTitle('Login');

    const [error, setError] = useState('');
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);


        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    Swal.fire(
                        {
                            text: 'Successfully Logged In!',
                            icon: 'success',
                            confirmButtonText: 'Continue',
                            confirmButtonColor: '#ab14a3'
                        }
                    )
                }
                // console.log(loggedUser);
                event.target.reset();
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    Swal.fire(
                        {
                            text: 'Successfully Logged In with Google!',
                            icon: 'success',
                            confirmButtonText: 'Continue',
                            confirmButtonColor: '#ab14a3'
                        }
                    )
                }
                // console.log(loggedUser);
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">

            <div
                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
            >
                <div className="mb-10 text-center text-2xl text-[#ab14a3] font-bold md:mb-16">
                    Please Login!
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className=" w-full rounded-md border py-3 px-5 text-base outline-none focus:border-[#ab14a3] focus-visible:shadow-none"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className=" w-full rounded-md border py-3 px-5 text-base outline-none focus:border-[#ab14a3] focus-visible:shadow-none"
                        />
                    </div>
                    <p className="text-[#ab14a3] mb-2">{error}</p>
                    <div className="mb-10">
                        <input
                            type="submit"
                            value="Sign In"
                            className=" w-full cursor-pointer rounded-md bg-[#ab14a3] py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                        />
                    </div>
                </form>
                <div className="divider"><p className="text-base text-[#adadad]">Connect With</p></div>


                <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-600 mb-12"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                    >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
                <p

                    className="mb-2 inline-block text-base text-[#adadad] hover:text-[#ab14a3] hover:underline"
                >
                    Forget Password?
                </p>
                <p className="text-base text-[#adadad]">
                    Not a member yet?
                    <Link to={'/signUp'} className="text-[#ab14a3] hover:underline">
                        Sign Up
                    </Link>
                </p>
                <div>
                    <span className="absolute top-1 right-1">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="1.39737"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 1.39737 38.6026)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="1.39737"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 1.39737 1.99122)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="13.6943"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 13.6943 38.6026)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="13.6943"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 13.6943 1.99122)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="25.9911"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 25.9911 38.6026)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="25.9911"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 25.9911 1.99122)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="38.288"
                                cy="38.6026"
                                r="1.39737"
                                transform="rotate(-90 38.288 38.6026)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="38.288"
                                cy="1.99122"
                                r="1.39737"
                                transform="rotate(-90 38.288 1.99122)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="1.39737"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 1.39737 26.3057)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="13.6943"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 13.6943 26.3057)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="25.9911"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 25.9911 26.3057)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="38.288"
                                cy="26.3057"
                                r="1.39737"
                                transform="rotate(-90 38.288 26.3057)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="1.39737"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 1.39737 14.0086)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="13.6943"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 13.6943 14.0086)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="25.9911"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 25.9911 14.0086)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="38.288"
                                cy="14.0086"
                                r="1.39737"
                                transform="rotate(-90 38.288 14.0086)"
                                fill="#ab14a3"
                            />
                        </svg>
                    </span>
                    <span className="absolute left-1 bottom-1">
                        <svg
                            width="29"
                            height="40"
                            viewBox="0 0 29 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="2.288"
                                cy="25.9912"
                                r="1.39737"
                                transform="rotate(-90 2.288 25.9912)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="14.5849"
                                cy="25.9911"
                                r="1.39737"
                                transform="rotate(-90 14.5849 25.9911)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="26.7216"
                                cy="25.9911"
                                r="1.39737"
                                transform="rotate(-90 26.7216 25.9911)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="2.288"
                                cy="13.6944"
                                r="1.39737"
                                transform="rotate(-90 2.288 13.6944)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="14.5849"
                                cy="13.6943"
                                r="1.39737"
                                transform="rotate(-90 14.5849 13.6943)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="26.7216"
                                cy="13.6943"
                                r="1.39737"
                                transform="rotate(-90 26.7216 13.6943)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="2.288"
                                cy="38.0087"
                                r="1.39737"
                                transform="rotate(-90 2.288 38.0087)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="2.288"
                                cy="1.39739"
                                r="1.39737"
                                transform="rotate(-90 2.288 1.39739)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="14.5849"
                                cy="38.0089"
                                r="1.39737"
                                transform="rotate(-90 14.5849 38.0089)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="26.7216"
                                cy="38.0089"
                                r="1.39737"
                                transform="rotate(-90 26.7216 38.0089)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="14.5849"
                                cy="1.39761"
                                r="1.39737"
                                transform="rotate(-90 14.5849 1.39761)"
                                fill="#ab14a3"
                            />
                            <circle
                                cx="26.7216"
                                cy="1.39761"
                                r="1.39737"
                                transform="rotate(-90 26.7216 1.39761)"
                                fill="#ab14a3"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </section>

    );
};

export default Login;