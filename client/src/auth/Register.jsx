import React from 'react'
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd'
import './register.css'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup'

const Register = () => {
  const { loading, error, registerUser } = useSignup()

  const handleRegister = (values) => {
    registerUser(values)
  }

  return (
    <section className='CardDesign'>
      <Card className='form-container' >
        <Flex>
          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className='title'>
              Create an account
            </Typography.Title>
            <Typography.Text type='secondary' className='slogan' strong>
              Join for exclusive access!
            </Typography.Text>
            <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
              <Form.Item label="Full Name" name="name" rules={[
                {
                  required: true,
                  message: 'please input your full name!'
                }
              ]}>
                <Input size='large' placeholder='Enter your full Name' />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[
                {
                  required: true,
                  message: 'please input your Email!'
                },
                {
                  type: 'email',
                  message: 'the input is not valid email'
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
              <Form.Item label="Password" name="passwordConfirm" rules={[
                {
                  required: true,
                  message: 'please input your password!'
                }
              ]}>
                <Input.Password size='large' placeholder='Re-enter your password' />
              </Form.Item>
              {
                error && <Alert description={error} type='error' showIcon closable className='alert' />
              }
              <Form.Item >
                <Button
                  type={`${loading ? '' : "primary"}`}
                  htmlType='submit'
                  size='large'
                  className='btn'>
                  {loading ? <Spin /> : ' Create Account'}
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to='/login'>
                  <Button className='btn' size='large'>
                    Sign In
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </Flex>
        </Flex>
      </Card>
    </section>
  )
}

export default Register
