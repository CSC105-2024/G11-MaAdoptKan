import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TabSwitcher from "../pages/TabSwitcher";
import Pawpic from "../../public/images/Pawpic.png";

// Zod schema for login
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("✅ Login Success:", data);
        // TODO: Add real login handler here
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
                        <label className="text-sm font-semibold text-black">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="maadopt@gmail.com"
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-primaryO bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.email && <p className="text-primaryO text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-semibold text-black">Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="***********"
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-primaryO bg-white shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.password && <p className="text-primaryO text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-primaryO hover:bg-orange-600 transition text-white font-semibold py-3 rounded-md text-lg shadow"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;