import capitalize from '../code/capitalize'

test('Capitalize: Capitalizes first character of "test"', () => {
    expect(capitalize('test')).toBe('Test')
})

test('Capitalize: Capitalizes first character, and ignores rest of "tEST"', () => {
    expect(capitalize('tEST')).toBe('TEST')
})

test('Capitalize: Returns empty string when passed an empty string ""', () => {
    expect(capitalize('')).toBe('')
})

test('Capitalize: Does nothing when the first character is not an english letter', () => {
    expect(capitalize('4th test')).toBe('4th test')
    expect(capitalize('...test')).toBe('...test')
})