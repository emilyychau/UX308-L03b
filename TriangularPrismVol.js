// q3 calculate the volume of an equilateral triangle prism
// from the length of one side of the triangle and the length of the flat edge

function TriangularPrismVol(base, length){
    let volume = ((Math.sqrt(3))/4) * (base**2) * length
    return volume;
}
export {TriangularPrismVol}
