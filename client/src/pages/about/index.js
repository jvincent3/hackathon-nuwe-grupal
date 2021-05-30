import React from 'react'
import {Grid, Box, Text, Flex, Image, Link} from '@chakra-ui/react'
import SearchGithubUser from 'components/SearchGithubUser'

function AboutPage() {
    return (
        <Grid height="calc(100vh - 100px)" mx="auto" width="100%">
            <Box alignSelf="center" px="10px" height="calc(100vh - 150px)" mx="auto" width="85%">

                <Flex justifyContent ="space-between" my="2rem">

                <Flex justifyContent="center" alignItems="center">
                        <Image mx='1rem' width="24%" src={require("assets/images/Aitor.jpeg")?.default}/>
                        <Flex flexDirection="column" maxWidth="600px">

                            <Text fontWeight="extrabold" fontSize="2xl">
                                Aitor Santana Cabrera
                            </Text>

                            <Text fontWeight="semibold" fontSize="medium">
                                Frontend Developer
                                <Flex>
                                    <Link width="8%"href="https://github.com/Sstark97" marginRight="2rem" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/github-icon.svg")?.default} />
                                    </Link>
                                    <Link width="8%"href="https://www.linkedin.com/in/aitorscinfo/" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/linkedin-brands.svg")?.default} />
                                    </Link>
                                
                                </Flex>
                            </Text>

                            <Text>
                            Hello, I am a 💡Full-Stack Web Developer💡, with experience<br></br>
                            in the MERN stack although I also have knowledge of Angular,<br></br> 
                            who likes to constantly update and develop my greatest passion,<br></br> 
                            programming webapps or any type of software.
                            </Text>

                        </Flex>
                    </Flex>

                    <Flex justifyContent="center" alignItems="center" marginLeft="8rem">
                        <Image mx='1rem' width="24%" src={require("assets/images/Jhon.jpeg")?.default}/>
                        <Flex flexDirection="column" minWidth="600px">

                            <Text fontWeight="extrabold" fontSize="2xl">
                                Jhon Vincent
                            </Text>

                            <Text fontWeight="semibold" fontSize="medium">
                                Frontend Developer
                                <Flex>
                                    <Link width="8%"href="https://github.com/jvincent3" marginRight="2rem" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/github-icon.svg")?.default} />
                                    </Link>
                                    <Link width="8%"href="https://www.linkedin.com/in/vincent-john/" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/linkedin-brands.svg")?.default} />
                                    </Link>
                                
                                </Flex>
                            </Text>

                            <Text>
                                My interest in it comes from my view of it as challenging subject,<br></br>
                                it requires pure logic so I love it. Thanks to all the courses and<br></br> 
                                lessons I’ve taken my logical thinking and problem solving has been<br></br>
                                strengthened through the study, demanding to apply new methods and concepts.
                            </Text>

                        </Flex>
                    </Flex>

                </Flex>

                <Flex justifyContent ="space-between" my="20rem">

                    <Flex justifyContent="center" alignItems="center">
                        <Image mx='1rem' width="24%" src={require("assets/images/Lucia.jpeg")?.default}/>
                        <Flex flexDirection="column" maxWidth="600px">

                            <Text fontWeight="extrabold" fontSize="2xl">
                                Lucía González Lara
                            </Text>

                            <Text fontWeight="semibold" fontSize="medium">
                                Backend Developer
                                <Flex>
                                    <Link width="8%"href="https://github.com/l0g0l" marginRight="2rem" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/github-icon.svg")?.default} />
                                    </Link>
                                    <Link width="8%"href="https://www.linkedin.com/in/luciagonzalezlara/" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/linkedin-brands.svg")?.default} />
                                    </Link>
                                
                                </Flex>
                            </Text>

                            <Text>
                                From businesswoman and secretary to Full<br></br>
                                Stack Jr. Web Developer, wanting to make<br></br> 
                                the most of this career change, betting on<br></br> 
                                technology. It's never too late ... I want,<br></br> 
                                I need to learn more and more. Will you guide me?
                            </Text>

                        </Flex>
                    </Flex>

                    <Flex justifyContent="center" alignItems="center">
                        <Image mx='1rem' width="24%" src={require("assets/images/Aitor.jpeg")?.default}/>
                        <Flex flexDirection="column" maxWidth="600px">

                            <Text fontWeight="extrabold" fontSize="2xl">
                                Edgar Rosendo
                            </Text>

                            <Text fontWeight="semibold" fontSize="medium">
                                Backend Developer
                                <Flex>
                                    <Link width="8%"href="https://github.com/E-Drop" marginRight="2rem" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/github-icon.svg")?.default} />
                                    </Link>
                                    <Link width="8%"href="https://www.linkedin.com/in/edgar-rosendo-9452a9146/" isExternal>
                                        <Image mx='1rem' width="100%" src={require("assets/images/linkedin-brands.svg")?.default} />
                                    </Link>
                                
                                </Flex>
                            </Text>

                            <Text>
                                Front-end developer professional, 5 years of experience in development,<br></br>
                                using the latest standards and tools, html5, css3, es6, react, react native,<br></br>
                                redux, typescript, express, node, npm, php, mysql, bootstrap, SASS, github.<br></br> 
                                Development of REST Api's using express js node and mongo.
                            </Text>

                        </Flex>
                    </Flex>

                </Flex>

            </Box>
        </Grid>
    )
}

export default AboutPage;
