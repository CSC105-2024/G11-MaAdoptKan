import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TabSwitcher from "../pages/TabSwitcher";
import Pawpic from "../../public/images/Pawpic.png";
import { useEffect, useState } from "react";
import { createAccount } from "../api/createAccount";
import { useNavigate } from "react-router-dom";

//Create a Zod schema
const signUpSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "lastName is required"),
    tel: z
        .string()
        .regex(/^[0-9]{9,15}$/, "Phone number must be 10 digit from 0-9"),
});

const SignUpPage = () => {
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
          document.title = "Sign Up";
        }, []);

    // Use react-hook-form with Zod
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data) => {
        setStatus("Creating An Account...");
        const res = await createAccount(data);
        if (res.success) {
            navigate("/login");
        } else {
            alert("Error creating an account! Try Again!");
            setStatus("Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-gray-200 px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-10">
                {/* Logo */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                    <div className="text-3xl">
                        <img src={Pawpic} alt="Paw Logo" className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-primaryO">Ma Adopt Kan</h1>
                </div>

                {/* Tabs */}
                <TabSwitcher />

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    {/* Email */}
                    <div>
                        <label className="text-sm font-semibold">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="maadopt@gmail.com"
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-orange-600 bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-semibold">Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="***********"
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-orange-600 bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* First Name */}
                    <div>
                        <label className="text-sm font-semibold">First Name</label>
                        <input
                            {...register("firstName")}
                            type="text"
                            placeholder="Mitsuki"
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-orange-600 bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>

                    {/* lastName */}
                    <div>
                        <label className="text-sm font-semibold">lastName</label>
                        <input
                            {...register("lastName")}
                            type="text"
                            placeholder="Tanaiwa"
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-orange-600 bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>

                    {/* Tel */}
                    <div>
                        <label className="text-sm font-semibold">Tel.</label>
                        <input
                            {...register("tel")}
                            type="tel"
                            placeholder="029927685"
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-orange-600 bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.tel && <p className="text-red-500 text-sm mt-1">{errors.tel.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-primaryO hover:bg-orange-600 transition text-white font-semibold py-3 rounded-md text-lg shadow"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;