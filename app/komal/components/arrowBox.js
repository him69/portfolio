import React from 'react'
import AnimatedArrow from './arrow'

function ArrowBox() {
    return (
        <div className="m-[90vh] ">
            <div>
                <p className="text-xs primaryF4 text-center">Scroll</p>
            </div>
            <div className=" w-9 h-12  m-auto">
                <AnimatedArrow />
            </div>
        </div>
    )
}

export default ArrowBox