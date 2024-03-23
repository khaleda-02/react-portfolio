import React from 'react'
import { RoughNotation } from "react-rough-notation";

const Notation = ({child}) => {
    return (
        <RoughNotation type="highlight" show={true} padding={3} strokeWidth={8} animationDuration={1900}  className='w-[90%] mx-auto md:w-[38%] md:mx-10 lg:w-[25%]  my-4 flex items-center justify-center '>
            {child}
        </RoughNotation>
    )
}

export default Notation