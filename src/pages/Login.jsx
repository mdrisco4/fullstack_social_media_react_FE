import React from "react"
import { Link } from "react-router-dom"
import { TbSocial } from "react-icons/tb"
import { TextInput } from "../components"
import { useForm } from "react-hook-form"

const Login = () => {
    const  {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onChange",
    })
  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
        <div className='w-full md:2-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl'>
            {/* LEFT */}
            <div className='w-full lg:w1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
                <div className='w-full flex gap-2 items-center mb-6'>
                    <div className='p-2 bg-[#065ad8] rounded text-white'>
                        <TbSocial />
                    </div>
                    <span className="text-2xl text-[#065ad8]">Tester</span>
                </div>

                <p className="text-ascent-1 text-base font-semihold"> Log in to your account</p>
                <span className="text-sm mt-2 text-ascent-2">
                    Welcome back!
                </span>
                <form className="py-8 flex flex-col gap-5">
                    <TextInput 
                    name="email"
                    placeholder="example@test.com"
                    label="Email Address"
                    type="email"
                    register={
                        register("email", {
                            required: "Email address is required"
                        })}
                        styles="w-full rounded-full"
                        labelStyle="ml-2"
                        error= {errors.email ? errors.email.message : "" }
                    />
                    <TextInput 
                    name="password"
                    placeholder="[PASSWORD]"
                    label="Password"
                    type="password"
                    register={
                        register("password", {
                            required: "Password address is required"
                        })}
                        styles="w-full rounded-full"
                        labelStyle="ml-2"
                        error= {errors.email ? errors.email.message : "" }
                    />
                </form>

                <Link
                to="/reset-password"
                className="text-sm text-right text-blue font-semibold"
                >
                    Forgot Password</Link>
            </div>
            {/* RIGHT */}
            <div></div>
        </div>
    </div>
  )
}

export default Login;