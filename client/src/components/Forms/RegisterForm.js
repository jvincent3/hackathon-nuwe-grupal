import React from 'react'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage, Alert} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {useHistory} from "react-router-dom"

function RegisterForm() { 

    const history = useHistory();

    return (
        <Formik
        initialValues={{
             user: "",
             email: "",
             password: ""
                         }}
        validationSchema={Yup.object({
            user: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email adress').required('Required'),
            password: Yup.string().required('Required')
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            history.push("/user/github")
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
              <Box p="20px">
                <Box py="10px">
                        <Field name="user">
                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel htmlFor="name">Username</FormLabel>
                                <Input {...field} id="name"/>
                                <FormErrorMessage>{form.errors.user}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        { props.touched.user && props.errors.user ? (
                            <Alert status="error">
                                {props.errors.user}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                    <Field name="email">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input {...field} id="email"/>
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.email && props.errors.email ? (
                            <Alert status="error">
                                {props.errors.email}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                    <Field name="password">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input type="password" {...field} id="password"/>
                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.password && props.errors.password ? (
                            <Alert status="error">
                                {props.errors.password}
                            </Alert>
                        ): null}
                </Box>
                <Button
                mt={4}
                width="100%"
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
                >
                Login
                </Button>
              </Box>
          </Form>
        )}
      </Formik>
    )
}

export default RegisterForm;