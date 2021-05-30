import React from 'react'
import {useMediaQuery} from '@chakra-ui/react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

function Navbar() {

    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)")

    return (
        <>
        {isLargerThan1000 ? <DesktopNavbar/>: <MobileNavbar/>}
        </>
    )
}

export default Navbar