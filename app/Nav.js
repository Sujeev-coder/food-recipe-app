import React from 'react';


const Nav = () => {
    return (
        <div className='bg-black h-20 text-white flex justify-around items-center flex-wrap lg:flex-nowrap'>

            <div className='text-2xl flex gap-8'>

                <a href=''>Home</a>
                <a href='./Orders'>Orders</a>
                <a href='./Contact'>Contact</a>
                <a href='./About'>About</a>
                <a href='./Sign In'>Sign In</a>

            </div>

            <div className='mt-4 lg:mt-0 lg:mr-40'>

                <form className='flex items-center'>
                    <input
                        type='text'
                        className='text-center w-full lg:w-80 mr-5 text-black h-10 rounded lg:rounded-r-none'
                        placeholder='search any product'
                    />
                    <input className='h-10 w-20 rounded bg-zinc-600' type='submit' value='Search' />

                </form>

            </div>

            <div className='flex gap-4 mt-4 lg:mt-0'>

                <h1>Icons</h1>
                <h1>Icons</h1>

            </div>

        </div>
    );
};

export default Nav;

