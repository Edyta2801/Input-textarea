import React from 'react';


const palette = {
    turquoise: '#1abc9c',
    emerald: '#2ecc71',
    peterRiver: '#3498db',
    amethyst: '#9b59b6',
    wetAsphalt: '#34495e',
    greenSea: '#16a085',
    nephritis: '#27ae60',
    belizeHole: '#2980b9',
    wisteria: '#8e44ad',
    midnightBlue: '#2c3e50',
    sunFlower: '#f1c40f',
    carrot: '#e67e22',
    alizarin: '#e74c3c',
    clouds: '#ecf0f1',
    concrete: '#95a5a6',
    orange: '#f39c12',
    pumpkin: '#d35400',
    pomegranate: '#c0392b',
    silver: '#bdc3c7',
    asbestos: '#7f8c8d'
};

function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
    const styles = {
        padding: `10px 20px`,
        marginTop:20,
        border: `${borderSize}px solid ${palette[borderColor]}`,
        borderRadius: `${borderRadius}px`,
        color:palette[color],
        outline:0,
        backgroundColor:palette[bgColor],
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