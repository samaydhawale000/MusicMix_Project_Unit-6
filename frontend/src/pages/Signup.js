import { Icon } from "@iconify/react";
import TextInput from "../component/shared/TextInput";
import PasswordInput from "../component/shared/PasswordInput";

const SignupComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-full px-4 sm:w-2/3 md:w-1/2 lg:w-1/3 py-10 flex flex-col items-center">
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    className="my-6"
                />
                <TextInput
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-6"
                />
                <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    className="mb-6"
                />
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password here"
                />
                <div className="w-full flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <TextInput
                        label="First Name"
                        placeholder="Enter Your First Name"
                        className="my-6 sm:my-0 sm:w-full"
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        className="my-6 sm:my-0 sm:w-full"
                    />
                </div>
                <div className="w-full flex items-center justify-center my-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
                        Sign Up
                    </button>
                </div>
                {/* ... other content ... */}
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    LOG IN INSTEAD
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
