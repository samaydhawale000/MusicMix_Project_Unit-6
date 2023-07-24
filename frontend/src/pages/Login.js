import { Icon } from "@iconify/react";
import TextInput from "../component/shared/TextInput";
import PasswordInput from "../component/shared/PasswordInput";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Link, useNavigate } from "react-router-dom";
const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = () => {
        let obj = { email, password }

        fetch(`https://frightened-baseball-cap-fish.cyclic.app/musixmix/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then((res) => res.json())
            .then((resp) => {

                // console.log(resp);
                localStorage.setItem("token", resp.token)
                toast(resp.message);
                navigate("/")

            })
            .catch((err) => {
                console.log(err);
            });
        setEmail("")
        setPassword("")
    }
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                {/* <Icon icon="logos:spotify" width="150" /> */}
                <h1 className="text-4xl font-bold">
                    Music<span className="text-green-500">Mix</span>
                </h1>

            </div>
            <div className="inputRegion w-full px-4 sm:w-2/3 md:w-1/2 lg:w-1/3 py-10 flex flex-col items-center">
                <div className="font-bold mb-4 text-center text-xl">
                    To continue, log in to Spotify.
                </div>
                <TextInput
                    label="Email address or username"
                    placeholder="Email address or username"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput label="Password" placeholder="Password" value={password}
                    setValue={setPassword} />
                <div className="w-full flex items-center justify-center my-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>
                        LOG IN
                    </button>

                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-center text-lg">
                    Don't have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold  cursor-pointer hover:opacity-75">
                    <Link to="/signup">SIGN UP FOR MusicMix</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginComponent;