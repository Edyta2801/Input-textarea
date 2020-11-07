import React from 'react';

import palette from '../../utils/palette';

function Textarea({ bgColor, color, borderSize, borderRadius, borderColor }) {
    const styles = {
        padding: `10px 20px`,
        marginTop:20,
        border: `${borderSize}px solid ${palette(borderColor)}`,
        borderRadius: `${borderRadius}px`,
        color:palette(color),
        outline:0,
        backgroundColor:palette(bgColor),
        container:{padding:10}
    }


    return (
        <div>
            <textarea style={styles} />
        </div>
    );
}


Textarea.defaultProps={
    color:'midnightBlue',
    bgColor:'pomegranate',
    borderSize:2,
    borderRadius:10,
    borderColor:'asbestos'
}

export default Textarea;