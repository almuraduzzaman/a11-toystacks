import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className=" py-4 bg-base-100 px-4 lg:px-36 shadow-lg flex justify-between items-center">

            <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Home</button></NavLink></li>
                    <li><NavLink to={'/all_toys'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>All Toys</button></NavLink></li>
                    {
                        user && <>
                            <li><NavLink to={'/add_toy'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Add A Toys</button></NavLink></li>
                            <li><NavLink to={'/my_toys'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>My Toys</button></NavLink></li>
                        </>
                    }
                    <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Blogs</button></NavLink></li>
                </ul>
            </div>


            <Link to={'/'}>
                <img className='h-[70px]' src={logo} alt="Toy Stacks" />
            </Link>

            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 lg:space-x-6 text-md font-semibold">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Home</button></NavLink></li>
                    <li><NavLink to={'/all_toys'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>All Toys</button></NavLink></li>
                    {
                        user && <>
                            <li><NavLink to={'/add_toy'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Add A Toys</button></NavLink></li>
                            <li><NavLink to={'/my_toys'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>My Toys</button></NavLink></li>
                        </>
                    }
                    <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Blogs</button></NavLink></li>
                </ul>
            </div>


            <div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-circle">
                            <div className=" rounded-full">
                                <div className="tooltip tooltip-left normal-case" data-tip={user.displayName}>
                                    <img className='rounded-full w-[40px] h-[40px]' src={user.photoURL} />
                                </div>
                            </div>
                        </button>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto md:w-52">
                            <li><button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button></li>
                        </ul>
                    </div> : <Link to={'/login'}><button className="btn btn-active btn-ghost">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;