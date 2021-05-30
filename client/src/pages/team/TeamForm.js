import React,{useState, useEffect} from 'react'
import {Box, Text,  FormControl, Input, Button,Textarea, FormErrorMessage, useToast, Alert, Flex, Avatar, UnorderedList, ListItem} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import {useSearchUsers} from 'hooks/queries/user'
import * as Yup from 'yup'
import { useCreateTeam } from 'hooks/queries/team'

function TeamForm() {

    const searchUsers = useSearchUsers();
    const toast = useToast();
    const [usersList, setUsersList] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([])
    const createTeam = useCreateTeam();
    const [textValue, setTextValue] = useState("")
    const [textTeamName, setTextTeamName] = useState("")
    
    function verifyIfSelected(selectedUser) {
        //this function will check if the user is already working
        let userFound = false;
        selectedUsers.forEach((value, index) => {
            if (value.login === selectedUser.login ){
                userFound = true;
            }
        })

        if ((userFound !== true) && (selectedUsers.length <= 4) ) setSelectedUsers([...selectedUsers, selectedUser])
    }

    function teamCreate() {
        createTeam.mutate({
            name: textTeamName,
            members : selectedUsers,
            description: textValue
        },
       { onSuccess: (res) => {
            console.log(res)
            toast({
                title: "Team created",
                status: "success",
                isCloseable: true,
                duration: 5000
            })
        },
        onError: (err) => {
            console.log(err)
            toast({
                title: "Error",
                status: "error",
                isCloseable: true,
                duration: 5000
            })
        }})
        
    }

    useEffect(() => {
        console.log(selectedUsers)
        console.log(textValue)
    })

    return (
        <Box pb="20px">
            <Input mb="10px" minLength="1" placeholder="Name your team"/>
        <Formik
        initialValues={{
             username: "",
             password: ""
            }}
        validationSchema={Yup.object({
            username: Yup.string().required('Required'),
        })}   

        onSubmit={(values, actions) => {
          setTimeout(() => {
            searchUsers.mutate(values, {
                onSuccess: (res) => {
                    console.log(res)
                    setUsersList(res.items)
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
              <Box>
                <Box py="10px">
                        <Field name="username">
                        {({ field, form }) => (
                            <FormControl>
                            <Input {...field} type="text" id="username" placeholder="Search user" />
                            <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        { props.touched.username && props.errors.username ? (
                            <Alert status="error">
                                {props.errors.username}
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
                  Search
                </Button>
                <UnorderedList 
                    borderRadius="5px"
                    mt="20px" 
                    maxHeight="200px" 
                    overflowY="scroll"
                    position="relative"
                    listStyleType="none"
                    ml="0"
                    backgroundColor="">
                    {usersList.map((val, index) => (
                        <ListItem onClick={(e => {
                            verifyIfSelected(val) 
                        })}>
                            <Flex p="5px">
                                <Box>
                                    <Avatar size="sm" src={val.avatar_url}/>
                                </Box>
                                <Box ml="10px" alignSelf="center">
                                    <Text fontSize="12px" fontWeight="semibold">
                                        {val.login}
                                    </Text>
                                </Box>
                            </Flex>
                        </ListItem>
                    ))
                    
                    }
                </UnorderedList>
  
              </Box>
          </Form>
        )}
      </Formik>
      <Box mb="10px">
        <Textarea value={textValue} onChange={e => setTextValue(e.target.value)} />
      </Box>
      <Button width="100%" disabled={((textValue.length > 0) && (textTeamName.length > 0 ) && (selectedUsers.length > 0)) ? "disable": ""} onClick={e => teamCreate()}>Submit team</Button>
      </Box>
    )
}

export default TeamForm