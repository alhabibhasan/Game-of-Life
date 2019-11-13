const generateGrid = length => {
    let grid = new Array(length);
    for (let i = 0; i < grid.length; i++) grid[i] = new Array(length).fill({});
    return grid
}

const getCellValue = (x, y, grid) => {
    if (x >= grid.length) x = grid.length - 1
    if (y >= grid.length) y = grid.length - 1
    if (x <= 0) x = 0
    if (y <= 0) y = 0
    return grid[x][y]
}

const insertCell = (x, y, grid) => {
    let cell = {
        id: Math.random() * Math.random(), // get a 'unique' identifier
        alive: true
    }

    grid[x][y] = cell
}

const getNeighbours = (x, y, grid) => {
    let neighbours = []
    for (let i = -1; i <= 1; i++) 
        for (let j = -1; j <= 1; j++) 
            neighbours.push(getCellValue(i+x, j +y, grid))

    let onlyAliveAndWellNeighbours = []
    
    neighbours.forEach(neighbour => {
        if (!onlyAliveAndWellNeighbours.includes(neighbour) 
            && neighbour.alive 
            && neighbour.id !== getCellValue(x,y,grid).id) {
            onlyAliveAndWellNeighbours.push(neighbour)
        }
    })

    return onlyAliveAndWellNeighbours
}

const play = grid => {
    let nextGrid = generateGrid(grid.length)
    for (let i = 0 ; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++ ) {
            let noOfNeighbours = getNeighbours(i, j, grid).length
            let cell = getCellValue(i, j, grid)
            
            if (cell && (noOfNeighbours < 2 || noOfNeighbours > 3)) {
                cell = {}
            } else if (!cell.id && noOfNeighbours === 3) {
                insertCell(i, j, nextGrid)
            } else if (cell.id && (noOfNeighbours === 2 || noOfNeighbours === 3)) {
                insertCell(i, j, nextGrid)
            }
        }
    }
    return nextGrid
}

module.exports = {
    generateGrid,
    play,
    insertCell
}