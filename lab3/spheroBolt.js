async function startProgram() {
    let speed = 3;
    
    await rollToSquare("F", speed, 3);
    await rollToSquare("R", speed, 2);
    await rollToSquare("F", speed, 2);
    await rollToSquare("L", speed, 2);
    await rollToSquare("R", speed, 2);
    
    
    exitProgram();
};

async function rollToSquare(direction, speed, distance){
    if (direction === "F"){
        await rollToDistance(0, speed, distance * 30);
    } else if (direction === "B"){
        await rollToDistance(180, speed, distance * 30);
    } else if (direction === "L") {
        await rollToDistance(90, speed, distance * 30);
    } else if (direction === "R") {
        await rollToDistance(270, speed, distance * 30);
    }
    
}

