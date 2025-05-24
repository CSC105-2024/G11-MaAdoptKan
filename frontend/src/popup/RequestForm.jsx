import React, {useState, useEffect} from "react";
import {RadioButton} from "primereact/radiobutton";
import {getUser} from "./../api/getUser.js";
import {newRequest} from "./../api/postRequestForm.js";
import {z} from "zod";

const petFormSchema = z.object({
    houseEnviron: z.string().min(1, "House Environment is required"),
    houseImg: z.string().optional(),
    financial: z.string().min(1, "Financial information is required"),
    pickup: z.string().min(1, "Pickup method is required"),
    address: z.string().min(1, "Address is required"),
});

export default function RequestForm({trigger, setTrigger, petData}) {
    const [formData, setFormData] = useState({
        houseEnviron: "",
        houseImg: "",
        financial: "",
        pickup: "",
        address: "",
        userId: "",
        petId: "",
    });

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        id: "",
    })
    const getUserData = async (id) => {
        const res = await getUser(id);
        console.log(res);
        if (res.success) {
            setUser({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                phoneNum: res.data.tel,
                id,
            });
        } else {
            console.log("Error fetching user data");
        }
    }
    useEffect(() => {
        console.log(localStorage.getItem("userId"));
        getUserData(localStorage.getItem("userId"));
    }, [])

    const handleInputChange = (key, value) => {
        setFormData((prev) => ({...prev, [key]: value}));
    };

    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url); // เซ็ต preview
            handleInputChange("houseImg", url)
        }
    };
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const handleUpload = async () => {
        const result = petFormSchema.safeParse(formData)
        const file = document.getElementById("upload-img").files[0];

        const finalForm = new FormData();
        finalForm.append("houseImg", file);
        finalForm.append("json", JSON.stringify({
            "addressRequest": formData.address,
            "financial": formData.financial,
            "houseEn": formData.houseEnviron,
            "houseImg": formData.houseImg,
            "pickup": formData.pickup,
            "userId": parseInt(user.id),
            "petId": petData.id,
        }))
        console.log({
            address: formData.address,
            financial: formData.financial,
            houseEn: formData.houseEnviron,
            houseImg: formData.houseImg,
            pickup: formData.pickup,
            userId: user.id,
            petId: petData?.id,
        });
        const postRequestData = await newRequest(finalForm);
        if (!result.success) {
            const firstError =
                result.error.issues[0]?.message || "Please fill required fields";
            setError(firstError);
            setSuccess(false);
        } else {
            setError("");
            setSuccess(true);
            setTimeout(() => setTrigger(false), 1500);
        }
    };
    useEffect(() => {
        const handleResize = () => {
            window.requestAnimationFrame(() => {
                setIsMobile(window.innerWidth < 768);
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    if (!trigger) return null;
    return (
        <div className="fixed inset-0 h-screen bg-black/40 flex justify-center items-center z-50">
            <div
                className="bg-white rounded-2xl shadow-xl w-[95%] h-[80%] md:max-w-6xl md:h-auto p-6 overflow-y-auto relative">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold mb-8">
                        Request Form {petData?.name && `for: ${petData.name}`}
                    </h1>
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={() => setTrigger(false)}
                        className="bg-white rounded-md flex text-gray-400 md:hidden"
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="font-semibold">First Name</label>
                            <p className="mt-1">{user.firstName}</p>
                        </div>
                        <div>
                            <label className="font-semibold">Email</label>
                            <p className="mt-1">{user.email}</p>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">House Environment</label>
                            <div className="flex items-center gap-2 ">
                                <select
                                    className="w-full px-4 py-2 rounded-md shadow-lg border-1 border-gray-200"
                                    value={formData.houseEnviron}
                                    onChange={(e) =>
                                        handleInputChange("houseEnviron", e.target.value)
                                    }
                                >
                                    <option value="">Select Environment</option>
                                    <option value="House">House</option>
                                    <option value="Condominium">Condominium</option>
                                </select>

                                <label
                                    htmlFor="upload-img"
                                    className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] hover:bg-primaryO hover:text-white"
                                >
                                    Upload
                                    <input
                                        id="upload-img"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>

                            {/* preview รูป */}
                            {previewUrl && (
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="w-40 h-40 object-cover rounded-md mt-4"
                                />
                            )}
                        </div>
                        <div>
                            <label className="font-semibold mb-2">Pickup</label>
                            <div className="flex gap-6">
                                {["selfPickup", "delivery"].map((val) => (
                                    <div key={val} className="flex align-items-center">
                                        <RadioButton
                                            inputId={val}
                                            name="type"
                                            value={val}
                                            className="custom-radio-orange"
                                            onChange={(e) => handleInputChange("pickup", e.value)}
                                            checked={formData.pickup === val}
                                        />
                                        <label htmlFor={val} className="ml-2 capitalize">
                                            {val}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="font-semibold">Last Name</label>
                            <p className="mt-1">{user.lastName}</p>
                        </div>
                        <div>
                            <label className="font-semibold">Phone Number</label>
                            <p className="mt-1">{user.phoneNum}</p>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">Financial</label>
                            <select
                                className="w-full px-4 py-2 rounded-md shadow-lg border-1 border-gray-200"
                                value={formData.financial}
                                onChange={(e) => handleInputChange("financial", e.target.value)}
                            >
                                <option value="">Range Of Your Salary</option>
                                <option value="belowTenThousand">0-10,000</option>
                                <option value="tenThousand">10,001-20,000</option>
                                <option value="twentyThousand">20,001-30,000</option>
                                <option value="thirtyThousand">30,001-40,000</option>
                                <option value="fourThousand">40,001-50,000</option>
                                <option value="aboveFiveThousand">More than 50,000</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">Address</label>
                            <textarea
                                rows={3}
                                className="w-full p-3 rounded-md shadow-lg border-1 border-gray-200"
                                value={formData.address}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-4 mt-10">
                    <button
                        onClick={() => setTrigger(false)}
                        className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] hover:bg-primaryO hover:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpload}
                        className="bg-primaryO text-white px-6 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO"
                    >
                        Send Request
                    </button>
                </div>
                {error && (
                    <div className="flex justify-center text-red-500 mt-4">
                        ⚠️ {error}
                    </div>
                )}
                {success && (
                    <div className="flex justify-center text-green-600 mt-4">
                        ✅ Create succeed
                    </div>
                )}
            </div>
        </div>
    );
}
