import React from 'react'        
import { DotSpinner } from '@uiball/loaders'

function SpinnerLoad() {
    return (
        <DotSpinner 
            size={40}
            speed={0.9} 
            color="black" 
        />
    )
}

export default SpinnerLoad