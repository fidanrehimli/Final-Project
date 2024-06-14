import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { message } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const registerUser = async (values) => {
        if (values.password !== values.passwordConfirm) {
            return setError('Passwords are not the same');
        }
        try {
            setError(null);
            setLoading(true);
            const res = await axios.post('http://localhost:8080/users/signup', values);
            const data = res.data;
            if (res.status === 201) {
                message.success(data.message);
                login(data.token, data.user);
                navigate('/login');
            } else if (res.status === 400) {
                setError(data.message);
            } else {
                message.error('Registration failed');
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, registerUser };
};

export default useSignup;
