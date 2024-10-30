import Image from "next/image";
import { useForm } from "react-hook-form";
import {useLogin} from "@/query/useLogin";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const mutation =  useLogin();
    const router = useRouter();

    const onSubmit = async (data) => {
        mutation.mutate(data);
    };

    useEffect(() => {
        if (mutation.isSuccess) {
            router.push('/admin');
        }
    }, [mutation.isSuccess, router]);

    if(mutation.isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl">Loading...</p>
            </div>
        );
    }


    return (
        <div className="bg-green-light grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col p-4 lg:p-0 justify-center items-center">
                <div className="flex justify-center flex-col lg:flex-row items-center mb-8">
                    <Image src={`/assets/images/logo.png`} alt="Logo" width={300} height={300} />
                    <h1 className="text-4xl text-center font-bold text-gray-800">DASHBOARD REPLON</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <h2 className="text-2xl mb-4">Login</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${mutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={mutation.isLoading}
                    >
                        {mutation.isLoading ? 'Logging in...' : 'Login'}
                    </button>

                    {mutation.isError && (
                        <p className="text-red-500 text-xs mt-2">{mutation.error.message}</p>
                    )}
                </form>
            </div>
            <div className="overflow-hidden lg:h-screen hidden lg:inline">
                <Image src={`/assets/images/background.png`} alt="Background" layout="responsive" width={500} height={300} />
            </div>
        </div>
    );
}
