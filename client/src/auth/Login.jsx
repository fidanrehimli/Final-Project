import React from 'react'
import { Alert, Button, Card, Flex, Form, Input,  Typography } from 'antd'
import './register.css'
import {Link} from 'react-router-dom'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const {error,loading,loginUser}=useLogin()
  const handleLogin = async(values) => {
   await loginUser(values)
  }
  return (
    <section className='CardDesign'>
      <Card className='form-container'>
        <Flex>
          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className='title'>
              Sign In
            </Typography.Title>
            <Typography.Text type='secondary' className='slogan' strong>
              Unlock you world.
            </Typography.Text>
            <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
              <Form.Item label="Email" name="email" rules={[
                {
                  required: true,
                  message: 'please input your Email!'
                },
                {
                  type:'email',
                  message:'the input is not valid email'
                }
              ]}>
                <Input size='large' placeholder='Enter your email' />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[
                {
                  required: true,
                  message: 'please input your password!'
                }
              ]}>
                <Input.Password size='large' placeholder='Enter your password' />
              </Form.Item>
              {
                error && <Alert description={error} type='error' showIcon closable className='alert'/>
              }
              <Form.Item >
                <Button 
                htmlType='submit'    
                type={`${loading ? '' : "primary"}`} 
                size='large' 
                className='btn'>
                     {loading ? <Spin /> : 'Sign In'}
             
                </Button>
              </Form.Item>
              <Form.Item>
               <Link to='/register'>
               <Button className='btn' size='large'>
               Create an account
                </Button>
               </Link>
              </Form.Item>
            </Form>

          </Flex>
          <Flex></Flex>
        </Flex>
      </Card>
    </section>
  )
}

export default Login
