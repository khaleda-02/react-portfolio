import React from 'react'
import { RoughNotation } from "react-rough-notation";

const Notation = ({child}) => {
    return (
        <RoughNotation type="highlight" show={true} padding={3} strokeWidth={8} animationDuration={1900}  className='w-[25%] flex items-center justify-center mx-10'>
            {child}
        </RoughNotation>
    )
}

export default Notation