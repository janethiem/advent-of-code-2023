export type Card = {
    winningNumbers : number[]
    numbersYouHave : number[]
} 

export const parseCard = (cardString : string) : Card => {
    let card : Card = {
        winningNumbers : [],
        numbersYouHave : [],
    }

    const cardIdAndNumbers = cardString.split(':')
    const winningNumbersAndNumbersYouHave = cardIdAndNumbers[1].split('|')

    card.winningNumbers = winningNumbersAndNumbersYouHave[0].trim().split(/\s+/).map(Number)
    card.numbersYouHave = winningNumbersAndNumbersYouHave[1].trim().split(/\s+/).map(Number)

    return card
}

export const sumCardPoints = (cardLines : string[]) : number => {
    let sum = 0

    cardLines.forEach((cardString) => {
        let cardPoints = 0
        const card = parseCard(cardString)
        const winningNumberSet = new Set<number>(card.winningNumbers)
        card.numbersYouHave.forEach((numberYouHave) => {
            if (winningNumberSet.has(numberYouHave)) 
            {
                if (cardPoints === 0) cardPoints = 1
                else cardPoints = cardPoints * 2
            }
        })
        
        sum += cardPoints
    })

    return sum
}