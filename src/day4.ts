export type Card = {
    winningNumbers : number[]
    numbersYouHave : number[]
    count : number
    id? : number
} 

export const parseCard = (cardString : string) : Card => {
    let card : Card = {
        winningNumbers : [],
        numbersYouHave : [],
        count : 1
    }

    const cardIdAndNumbers = cardString.split(':')
    card.id = parseInt(cardIdAndNumbers[0].match((/\d+/g))[0], 10)
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

export const sumScratchCards = (cardLines : string[]) : number => {
    let cards = cardLines.map((cardLine) => parseCard(cardLine))
    cards.forEach((card, index) => {
        let numScratchcardsBelow = 0
        const winningNumberSet = new Set<number>(card.winningNumbers)
        card.numbersYouHave.forEach((numberYouHave) => {
            if (winningNumberSet.has(numberYouHave)) numScratchcardsBelow ++
        })
        for (let i = index + 1; i < index + 1 + numScratchcardsBelow; i ++)
        {
            cards[i].count += card.count
        }
    })

    return cards.reduce((accumulator, currentCard) => {
        return accumulator + currentCard.count
    }, 0)
}