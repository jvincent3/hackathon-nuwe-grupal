import React from 'react'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage, useToast} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import {verifyLogin} from 'api/githubuser'
import { useHistory } from 'react-router';

function LoginForms() {

    const toast = useToast();
    const history = useHistory();

    return (
        <Formik
        initialValues={{
             user: "",
             password: ""
                         }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            verifyLogin(values.user)
                .then(res => {
                    history.push("/user/"+ values.user)
                })
                .catch(err => {
                    console.log(err)
                    toast({
                      title: "User not found",
                      status: "error",
                      isClosable: true,
                      duration: 5000,
                    })
                })
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
                            <Input {...field} id="user" placeholder="user or email" />
                            <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
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

export default LoginForms