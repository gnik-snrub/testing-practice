import analyze from '../code/analyze'

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

test('Analyze: Caluclates average correctly', () => {
    expect(analyze(testArr).average).toBe(8)
})

test('Analyze: Returns min value correctly', () => {
    expect(analyze(testArr).min).toBe(1)
})

test('Analyze: Returns max value correctly', () => {
    expect(analyze(testArr).max).toBe(15)
})

test('Analyze: Returns array length correctly', () => {
    expect(analyze(testArr).length).toBe(15)
})