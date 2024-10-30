
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const loginUser = async ({email, password}) => {
    const response = await axios.post(`${process.env.BASE_API}/api/login-admin`, {
        email,
        password
    });
    console.log(response.data);
    return response.data;
};

export const useLogin = () => {

    return useMutation({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            await localStorage.setItem('token', 'isLogin234567898765');
        },
        onError: (error) => {
            localStorage.removeItem('token');
            console.log(error);
        }
    });

};
