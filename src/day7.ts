enum HandType {
    HighCard = 1,
    OnePair = 2,
    TwoPair = 3,
    ThreeOfAKind = 4,
    FullHouse = 5,
    FourOfAKind = 6,
    FiveOfAKind = 7,
}

export const CARD_RANK = {
    "2": 0,
    "3": 1,
    "4": 2,
    "5": 3,
    "6": 4,
    "7": 5,
    "8": 6,
    "9": 7,
    "T": 8,
    "J": 9,
    "Q": 10,
    "K": 11,
    "A": 12,
}

export type Hand = {
    hand : string,
    bid : number,
    type? : HandType,
}

export const parseHands = (handLines : string[]) : Hand[] => {
    let hands = []

    handLines.forEach(handLine => {
        let hand : Hand = {
            hand : "",
            bid : 0,
        }
        let handAndBid = handLine.split(' ')
        hand.hand = handAndBid[0]
        hand.bid = parseInt(handAndBid[1], 10)

        // determine hand type
        let cardMap = new Array(13).fill(0)
        for (const char of hand.hand)
        {
            cardMap[CARD_RANK[char]]++
        }

        if (cardMap.includes(5))
        {
            hand.type = HandType.FiveOfAKind
        }
        else if (cardMap.includes(4))
        {
            hand.type = HandType.FourOfAKind
        }
        else if (cardMap.includes(3) && cardMap.includes(2))
        {
            hand.type = HandType.FullHouse
        }
        else if (cardMap.includes(3))
        {
            hand.type = HandType.ThreeOfAKind
        }
        else if (cardMap.filter((value) => value === 2).length === 2)
        {
            hand.type = HandType.TwoPair
        }
        else if (cardMap.filter((value) => value === 2).length === 1)
        {
            hand.type = HandType.OnePair
        }
        else
        {
            hand.type = HandType.HighCard
        }

        hands.push(hand)

    })

    // sort hands by type and then by card rank
    // in descending order
    hands.sort((a, b) => {
        if (a.type !== b.type)
        {
            return a.type - b.type
        }
        else
        {
            for (let index = 0; index < a.hand.length; index++)
            {
                if (CARD_RANK[a.hand[index]] !== CARD_RANK[b.hand[index]])
                {
                    return CARD_RANK[a.hand[index]] - CARD_RANK[b.hand[index]]
                }
            }
        }
    })

    return hands
}

export const calculateTotalWinnings = (hands : Hand[]) : number => {
    let totalWinnings = 0

    hands.forEach((hand, index) => {
        totalWinnings += hand.bid * (index + 1)
    })

    return totalWinnings
}