class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        this.scores = []
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1
        if(this.tardies >= 3){
            return 'YOU ARE EXPELLED!!!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} time${this.tardies < 2 ? '' : 's'}`
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    calcAv() {
       let sum = this.scores.reduce((a,b) => a+b)
       return sum/this.scores.length
    }
    static classAv() {
        return 'calculating...'
    }
}

let firstStudent = new Student('Marc', 'Rodriguez')
let nextStudent = new Student('Sam', 'Iam')
// console.log(firstStudent.addScore(80))
// console.log(firstStudent.addScore(90))
// console.log(firstStudent.calcAv())
// console.log(nextStudent.addScore(75))


class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    static distance(a, b) {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.hypot(dx, dy)
     }
}

const p1 = new Point(2,1)
const p2 = new Point(2,5)
const p3 = new Point(4,3)
console.log(Point.distance(p1, p3))