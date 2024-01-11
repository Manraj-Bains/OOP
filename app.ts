function distance(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
): number {
    const x = (x2 - x1)**2
    const y = (y2 - y1)**2
    const distance = Math.sqrt((x+y))
    return distance 
} 

