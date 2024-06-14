import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { message } from "antd"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const useLogin = () => {
  const navigate=useNavigate()
    const { login } = useAuth()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const loginUser = async (values) => {
    
        try {
            setError(null)
            setLoading(false)
            const res = await axios.post('http://localhost:8080/users/login',values)
            const data = await res.data
            if (res.status === 200) {
                message.success(data.message)
                login(data.token, data.user)
                navigate('/')
            } else if (res.status === 404) {
                setError(data.message)
            } else {
                message.error('Registration failed')
            }
        } catch (error) {
            message.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, loginUser }
}

export default useLogin
