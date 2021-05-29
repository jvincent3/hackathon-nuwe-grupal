import React from 'react'
import {useHistory} from 'react-router-dom'
import {Form, Field, Formik} from 'formik'
import {FormControl,  Input, FormErrorMessage, Button} from '@chakra-ui/react'

function Login() {

    const history = useHistory();

    return (
        <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
            setTimeout(() => {
            actions.setSubmitting(false)
                history.push("/user/"+values.name)
            }, 1000)
        }}
        >
        {(props) => (
            <Form>
            <Field name="name">
                {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <Input {...field} id="name" placeholder="Github name..." />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
                )}
            </Field>
            <Button
                disabled={props.values.name.length === 0 ? "disabled" : ""}
                width="100%"
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
            >
                Submit
            </Button>
            </Form>
        )}
        </Formik>
    )
    }


export default Login
