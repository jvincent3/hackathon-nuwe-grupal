import React from 'react'
import {Box, FormControl, Input, Button, FormErrorMessage, useToast, Alert} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import {useLogin} from 'hooks/queries/user'
import { useHistory } from 'react-router';
import * as Yup from 'yup'

function LoginForms() {

    const loginFn = useLogin();
    const toast = useToast();
    const history = useHistory();

    return (
        <Formik
        initialValues={{
             username: "",
             password: ""
            }}
        validationSchema={Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().min(8, 'Must have minimum 8 characters').required('Required')
        })}   

        onSubmit={(values, actions) => {
          setTimeout(() => {
            loginFn.mutate(values, {
                onSucces: (res) => {
                    console.log(res)
                    actions.setSubmitting(false)
                },
                onError: (err) => {
                    console.log(err)
                    actions.setSubmitting(false)
                    toast({
                        title: "User not found",
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
                        <Field name="username">
                        {({ field, form }) => (
                            <FormControl>
                            <Input {...field} id="username" placeholder="user or email" />
                            <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        { props.touched.username && props.errors.username ? (
                            <Alert status="error">
                                {props.errors.username}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                    <Field name="password">
                    {({ field, form }) => (
                        <FormControl>
                        <Input {...field} id="password" type="password" placeholder="Password" />
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
                  marginRight="1rem"
                  >
                  Login
                </Button>
  
              </Box>
          </Form>
        )}
      </Formik>
    )
}

export default LoginForms