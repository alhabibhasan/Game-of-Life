# Game of Life
Terminal based game of life application

## Running

Before running, ensure that you have node `v10.16` or greater installed and npm `v6.11` (certain features won't work with lesser versions of node)

Once installed, navigate to the directory and run: `node index.js`, then continue to follow on screen steps.

## Adding new points or changing grid size

You cannot add new points to the grid or change the size of the grid without changing the source code, but this is quite straight forward.

To generate a table of size `n`, open `index.js`, and add in your number in the call to `generateGrid(n)`.

To add more points, call (inside of `index.js`):

`insertCell(x,y,grid)` where `x` and `y` are the x and y coordinates of the new point and `grid` is the reference to the grid you generated above.
