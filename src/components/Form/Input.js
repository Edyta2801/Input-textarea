import React from 'react';
import palette from '../../utils/palette';

function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
    const styles = {
        padding: `10px 20px`,
        marginTop:20,
        border: `${borderSize}px solid ${palette(borderColor)}`,
        borderRadius: `${borderRadius}px`,
        color:palette(color),
        outline:0,
        backgroundColor:palette(bgColor),
        container:{ padding:10}
    }


    return (
        <div>
            <input style={styles} />
        </div>
    );
}



Input.defaultProps={
    color:'nephritis',
    bgColor:'emerald',
    borderSize:2,
    borderRadius:10,
    borderColor:'midnightBlue'
}

export default Input;