import React from 'react'
import { TbSocial } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import { useForm } from 'react-hook-form';
import { SetTheme } from '../redux/theme';
import { fetchPosts } from '../utils';
import { BsMoon, BsSunFill } from 'react-icons/bs';
import { IoMdNotificationsOutline } from "react-icons/io";



const TopBar = () => {
    const { theme } = useSelector(state => state.theme);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: {errors},        
    } = useForm({
        mode: "onChange",
    });

    const handleTheme = () => {
        const themeValue = theme === "light" ? "dark" : "light";
    
        dispatch(SetTheme(themeValue));
    };
    
    const handleSearch = async (data) => {
        await fetchPosts(user.token, dispatch, "", data);
    };

  return (
    <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary'>
        <Link to='/' className='flex gap-2 items-center'>
            <div>
                <TbSocial />
            </div>
            <span className='text-x1 md:text-2xl text-[#065ad8] font-semibold'>
                Driz Biz
            </span>
        </Link>
        <form
            className='hidden md:flex items-center justify-center'
            onSubmit={handleSubmit(handleSearch)}
        >
            <TextInput 
                placerholder='Search...'
                styles='w-[18rem] lg:w[38rem] rounded-1-full py-3'
                register={register("search")}
            />
            <CustomButton 
                title='Search'
                type='submit'
                containerStyles='bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full'
            />
        </form>
        {/* ICONS */}
        <div className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'>
            <button onClick={() => handleTheme()}>
                {theme ? <BsMoon /> : <BsSunFill />}
            </button>
            <div className='hidden lg:flex'>
                <IoMdNotificationsOutline />
            </div>
        </div>
    </div>
  )
}

export default TopBar