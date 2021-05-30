 import React from 'react'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage, Alert, toast} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import {useRegister} from 'hooks/queries/user'
import * as Yup from 'yup'

function RegisterForm() { 

    const registerFn = useRegister()

    function equalTo(ref, msg) {
        return Yup.mixed().test({
            name: 'equalTo',
            exclusive: false,
            message: msg || '${path} must be the same as ${reference}',
            params: {
                reference: ref.path
            },
            test: function(value) {
                return value === this.resolve(ref);
            }
        })
    }

    Yup.addMethod(Yup.string, 'equalTo', equalTo)

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
            password: Yup.string().min(8, 'Must have minimum 8 characters').required('Required'),
            passwordConfirm: Yup.string().min(8, 'Must have minimum 8 characters').equalTo(Yup.ref('password'), 'Password must match').required('Required')
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            registerFn.mutate(values, {
                onSucces: (res) => {
                    console.log(res)
                    actions.setSubmitting(false)
                },
                onError: (err) => {
                    console.log(err)
                    actions.setSubmitting(false)
                    toast({
                        title: "User exists",
                        status: "error",
                        isClosable: true,
                        duration: 5000,
                      })
                }
            })
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
                <Box py="10px">
                    <Field name="passwordConfirm">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="passwordConfirm">Confirm password</FormLabel>
                            <Input type="password" {...field} id="passwordConfirm"/>
                            <FormErrorMessage>{form.errors.passwordConfirm}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.passwordConfirm && props.errors.passwordConfirm ? (
                            <Alert status="error">
                                {props.errors.passwordConfirm}
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