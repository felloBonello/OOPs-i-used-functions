class MovieTicket {
    private movieName: string
    private length: string
    private seat: string
    private showTime: string

    constructor(movieName: string, length: string, seat: string, showTime: string) {
        this.movieName = movieName
        this.length = length
        this.seat = seat
        this.showTime = showTime
    }

    public printTicket() {
        console.log(`
            ${this.movieName}
            ${this.showTime}
            ${this.seat}
            ${this.length}
        `)
    }
}

const ticket = new MovieTicket('Pulp Fiction', '2h 34m', 'A10', 'March 4, 1994')
ticket.printTicket()