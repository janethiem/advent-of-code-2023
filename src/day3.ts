
import { isDigit } from "./util"

export const isSymbol = (char : string) : boolean => {
    return !isDigit(char) && char !== "."
}

export const isGearSymbol = (char : string) : boolean => {
    return char === '*'
}

export const sumOfPartNumbers = (schematic : string[][]) : number => {
    let sum = 0
    const numRows = schematic.length
    const numCols = schematic[0].length
    let visited = new Set<string>()

    const dfsNumberSearch = (r : number, c : number) : string => {
        if (r < 0 || r === numRows || c < 0 || c === numCols || !isDigit(schematic[r][c]) || visited.has(`${r},${c}`))
        {
            return ""
        }

        visited.add(`${r},${c}`)

        return dfsNumberSearch(r, c - 1) + schematic[r][c] + dfsNumberSearch(r, c + 1)
    }

    for (let i = 0; i < schematic.length; i++) {
        for (let j = 0; j < schematic[i].length; j++) {
            if (isSymbol(schematic[i][j]))
            { 
                let results = [
                    dfsNumberSearch(i, j - 1),
                    dfsNumberSearch(i + 1, j - 1),
                    dfsNumberSearch(i - 1, j - 1),
                    dfsNumberSearch(i, j + 1),
                    dfsNumberSearch(i + 1, j + 1),
                    dfsNumberSearch(i - 1, j + 1),
                    dfsNumberSearch(i + 1, j),
                    dfsNumberSearch(i - 1, j)
                ];
    
                for (let result of results) {
                    if (result !== "") {
                        let num = parseInt(result);
                        if (!isNaN(num)) {
                            sum += num;
                        }
                    }
                }
            }
        }
    }

    return sum
}

export const sumOfGearRatios = (schematic : string[][]) : number => {
    let sum = 0
    const numRows = schematic.length
    const numCols = schematic[0].length
    let visited = new Set<string>()

    const dfsNumberSearch = (r : number, c : number) : string => {
        if (r < 0 || r === numRows || c < 0 || c === numCols || !isDigit(schematic[r][c]) || visited.has(`${r},${c}`))
        {
            return ""
        }

        visited.add(`${r},${c}`)

        return dfsNumberSearch(r, c - 1) + schematic[r][c] + dfsNumberSearch(r, c + 1)
    }

    for (let i = 0; i < schematic.length; i++) {
        for (let j = 0; j < schematic[i].length; j++) {
            if (isGearSymbol(schematic[i][j]))
            { 
                let results = []
                let directions = [
                    [0, -1], // left
                    [1, -1], // bottom left
                    [-1, -1], // top left
                    [0, 1], // right
                    [1, 1], // bottom right
                    [-1, 1], // top right
                    [1, 0], // down
                    [-1, 0] // up
                ];
                
                for (let [dx, dy] of directions) {
                    let result = dfsNumberSearch(i + dx, j + dy);
                    if (result !== "") {
                        results.push(result);
                    }
                }
    
                if (results.length !== 2) continue
                
                const gearRatio = parseInt(results[0], 10) * parseInt(results[1], 10)
                sum += gearRatio
            }
        }
    }

    return sum
}