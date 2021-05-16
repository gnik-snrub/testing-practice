import calculator from '../code/calculator'

const calc = calculator()

test('Calculator: Addition with positive numbers', () => {
    expect(calc.add(1, 2)).toBe(3)
})

test('Calculator: Addition with negative numbers', () => {
    expect(calc.add(2, -1)).toBe(1)
})

test('Calculator: Subtraction with positive numbers', () => {
    expect(calc.subtract(2, 1)).toBe(1)
})

test('Calculator: Subtraction with negative numbers', () => {
    expect(calc.subtract(1, -1)).toBe(2)
})

test('Calculator: Multiplication with positive numbers', () => {
    expect(calc.multiply(2, 2)).toBe(4)
})

test('Calculator: Multiplication with negative numbers', () => {
    expect(calc.multiply(2, -2)).toBe(-4)
})

test('Calculator: Division with positive numbers', () => {
    expect(calc.divide(4, 2)).toBe(2)
})

test('Calculator: Division with negative numbers', () => {
    expect(calc.divide(4, -2)).toBe(-2)
})