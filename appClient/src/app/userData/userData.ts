export class CheckingAccount {
    constructor(
        public balance: number
    ) {}
}

export class Position {
    constructor(
        public symbol: string,
        public amount: number,
        public currentPrice: number
    ) {}
}

export class Patrimony {
    constructor(
        public balance: number
    ) {}
}

