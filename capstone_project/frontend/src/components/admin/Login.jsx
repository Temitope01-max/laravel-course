import React, { useContext } from 'react'
import Layout from '../../components/common/Layout'
import { useForm } from 'react-hook-form'

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";

import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaStore
} from "react-icons/fa";
import { apiUrl } from '../common/http';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuth';

const Login = () => {

    const navigate = useNavigate()
    const { login } = useContext(AdminAuthContext)

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    const res = await fetch(`${apiUrl}/admin/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(result => {
        console.log(result)

        if(result.status == 200){
            const adminInfo = {
                token : result.token,
                id: result.id,
                name: result.name
            }

            localStorage.setItem('adminInfo', JSON.stringify(adminInfo))
            login(adminInfo)
            navigate('/admin/dashboard')
        }else{
            toast.error(result.message)
        }
    })
  }

  const onError = (errors) => {

    if (errors.email) {
      toast.error(errors.email.message);
    }

    if (errors.password) {
      toast.error(errors.password.message);
    }
  };

  return (
    <Layout>
        <div
      className="bg-light min-vh-100 d-flex align-items-center"
    >
      <Container>

        <Row className="justify-content-center">

          <Col
            xs={12}
            sm={10}
            md={7}
            lg={5}
            xl={4}
          >

            <Card className="border-0 shadow-sm">

              <Card.Body className="p-4 p-md-5">

                {/* Logo / Brand */}

                <div className="text-center mb-4">

                  <div
                    className="d-inline-flex justify-content-center align-items-center bg-dark text-white rounded-circle mb-3"
                    style={{
                      width: "60px",
                      height: "60px"
                    }}
                  >
                    <FaStore size={25} />
                  </div>

                  <h3 className="fw-bold mb-1">
                    Admin Login
                  </h3>

                  <p className="text-muted mb-0">
                    Sign in to manage your store
                  </p>

                </div>


                {/* Login Form */}

                <Form onSubmit={handleSubmit(onSubmit, onError)}>

                  {/* Email */}

                  <Form.Group className="mb-3">

                    <Form.Label className="fw-semibold">
                        Email Address
                    </Form.Label>

                    <InputGroup>

                        <InputGroup.Text>
                        <FaEnvelope />
                        </InputGroup.Text>

                        <Form.Control
                        type="email"
                        placeholder="admin@example.com"
                        isInvalid={!!errors.email}
                        {...register("email", {
                            required: "The email field is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                        />

                    </InputGroup>

                    {errors.email && (
                        <div className="text-danger small mt-1">
                        {errors.email.message}
                        </div>
                    )}

                </Form.Group>


                  {/* Password */}

                  <Form.Group className="mb-3">

                    <div className="d-flex justify-content-between">

                      <Form.Label className="fw-semibold">
                        Password
                      </Form.Label>

                      <a
                        href="/admin/forgot-password"
                        className="text-decoration-none small"
                      >
                        Forgot password?
                      </a>

                    </div>

                    <InputGroup>

                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>

                      <Form.Control
                      {...register("password", {
                            required: "The password field is required",
                        })}
                        isInvalid={!!errors.password}
                        type="password"
                        placeholder="Enter your password"
                      />

                    </InputGroup>
                    {errors.password && (
                        <div className="text-danger small mt-1">
                        {errors.password.message}
                        </div>
                    )}

                  </Form.Group>


                  {/* Remember Me */}

                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    className="mb-4"
                  />


                  {/* Login Button */}

                  <Button
                    variant="dark"
                    type="submit"
                    size="lg"
                    className="w-100"
                  >

                    <FaSignInAlt className="me-2" />

                    Sign In

                  </Button>

                </Form>


                {/* Back to Store */}

                <div className="text-center mt-4">

                  <a
                    href="/"
                    className="text-decoration-none text-muted"
                  >
                    <FaStore className="me-2" />

                    Back to Store
                  </a>

                </div>

              </Card.Body>

            </Card>


            {/* Footer */}

            <p className="text-center text-muted small mt-4">
              © 2026 Your Store. Admin Portal.
            </p>

          </Col>

        </Row>

      </Container>
    </div>
    </Layout>
  )
}

export default Login
