import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../CustomHooks/useTitle";
import Swal from "sweetalert2";


const SignUp = () => {
    useTitle('SignUp');

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);


    const handleSignUp = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        // console.log(name, email, photo, password);

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setError('');

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                updateUsername(newUser);
                if (result?.user) {
                    Swal.fire(
                        {
                            text: 'Account Created Successfully',
                            icon: 'success',
                            confirmButtonText: 'Continue',
                            confirmButtonColor: '#ab14a3'
                        }
                    );
                }
                // console.log(newUser);
                event.target.reset();
            })
            .catch(err => setError(err.message))


        const updateUsername = (user) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            })
                .then(() => { })
                .catch(err => setError(err.message))
        }
    }

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">

            <div
                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
            >
                <div className="mb-10 text-center text-2xl text-[#ab14a3] font-bold md:mb-16">
                    Please Create an Account!
                </div>
                <form onSubmit={handleSignUp}>
                    <div className="mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className=" w-full rounded-md border py-3 px-5 text-base outline-none focus:border-[#ab14a3] focus-visible:shadow-none"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className=" w-full rounded-md border py-3 px-5 text-base outline-none focus:border-[#ab14a3] focus-visible:shadow-none"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="url"
                            name="photo"
                            placeholder="Photo URL"
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
                            value="Sign Up"
                            className=" w-full cursor-pointer rounded-md bg-[#ab14a3] py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                        />
                    </div>
                </form>

                <p className="text-base text-[#adadad]">
                    Already a member?
                    <Link to={'/login'} className="text-[#ab14a3] hover:underline">
                        Sign In
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

export default SignUp;