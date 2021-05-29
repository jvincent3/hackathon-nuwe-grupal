import React from 'react'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'

function RegisterForm() { 

    return (
        <Formik
        initialValues={{
             user: "",
             password: ""
                         }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
              <Box p="20px">
                <Box py="10px">
                        <Field name="login">
                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel htmlFor="name">Username</FormLabel>
                                <Input {...field} id="name"/>
                                <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                </Box>
                <Box py="10px">
                    <Field name="email">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="name">Email address</FormLabel>
                            <Input {...field} type="email" id="name"/>
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                </Box>
                <Box py="10px">
                    <Field name="password">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="name">Password</FormLabel>
                            <Input type="password" {...field} id="name"/>
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

export default RegisterForm;