export const DEFAULT_GAME_LIMITS : GameLimits = {
    red: 12,
    green: 13,
    blue: 14
}

export type GameLimits = {
    red: number
    green: number
    blue: number
}
export type Game = {
    id: number
    maxRed: number
    maxGreen: number
    maxBlue: number
}
export const isGamePossible = (gameLimits : GameLimits, game : Game) : boolean => {
    return (game.maxRed <= gameLimits.red && game.maxGreen <= gameLimits.green && game.maxBlue <= gameLimits.blue)
}

export const parseGame = (inputGameString : string) : Game => {
    let game : Game = {
        id : 0,
        maxRed : 0,
        maxGreen : 0,
        maxBlue : 0
    }

    const gameIdAndGames = inputGameString.split(':')
    game.id = parseInt(gameIdAndGames[0].match((/\d+/g))[0], 10)
    
    const gamesStrings = gameIdAndGames[1].split(';')
    gamesStrings.forEach( (gameString) => {
        let currentRed = 0
        let redMatch = gameString.match(/\d+(?=\sred)/)
        if (redMatch) currentRed = parseInt(redMatch[0], 10)
        if (currentRed > game.maxRed) game.maxRed = currentRed

        let currentGreen = 0
        let greenMatch = gameString.match(/\d+(?=\sgreen)/)
        if (greenMatch) currentGreen = parseInt(greenMatch[0], 10)
        if (currentGreen > game.maxGreen) game.maxGreen = currentGreen

        let currentBlue = 0
        let blueMatch = gameString.match(/\d+(?=\sblue)/)
        if (blueMatch) currentBlue = parseInt(blueMatch[0], 10)
        if (currentBlue > game.maxBlue) game.maxBlue = currentBlue
     })

    return game
}

export const sumIdsOfPossibleGames = (gameLimits : GameLimits, inputGameLines : string[]) : number => {
    let sum = 0
    inputGameLines.forEach((gameLine : string) => {
        const game : Game = parseGame(gameLine)
        if (isGamePossible(gameLimits, game))
        {
            sum = sum + game.id
        }
    })

    return sum
}

export const sumOfPowerOfEveryGame = (inputGameLines : string[]) : number => {
    let sum = 0

    inputGameLines.forEach((gameLine : string) => {
        const game : Game = parseGame(gameLine)
        const power = game.maxRed * game.maxGreen * game.maxBlue
        sum = sum + power
    })

    return sum
}