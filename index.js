const readline = require('readline');
const { generateGrid,
    play,
    insertCell } = require('./gof')

let grid = generateGrid(3)

// insertCell(0,0,grid)
insertCell(1,0,grid)
insertCell(1,1,grid)
insertCell(1,2,grid)

const askQuestion = (query) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

const game = async () => {
    console.log('Welcome! Let\'s play The game of Life!')
    console.log('We have this as the initial grid.')
    console.table(grid)
    console.log()

    let userInput = ''
    

    while (userInput != 'no') {
        await askQuestion('Play a round? (y/n) ')
        .then(answer => {
            userInput = answer
            if (answer === 'y') {
                console.log()
                console.log('New grid...')
                grid = play(grid)
                console.log()
                console.table(grid)
                console.log()
            } else {
                process.exit()
            }
        })
    }
       
}

game()

