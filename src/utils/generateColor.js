const getRandomHEX = () => Math.floor(Math.random() * 16777215).toString(16);

const hexToRGB = (hex) => {
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return r + " / " + g + " / " + b;
}

export const getColorObject = () => {
    
    const hex = getRandomHEX();
    const rgb = hexToRGB(hex);

    return {
        'label': 'randomColor',
        'hex': hex,
        'rgb': rgb
    }
}