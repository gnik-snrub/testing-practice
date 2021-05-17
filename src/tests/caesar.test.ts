import caesar from '../code/caesar'

test('Caesar: Encrypts with small shift, and no wrap required', () => {
    expect(caesar('abcde', 1)).toBe('bcdef')
})

test('Caesar: Encrypts successfully when wrapping from z -> a', () => {
    expect(caesar('you are a cool guy', 5)).toBe('dtz fwj f httq lzd')
})

test('Caesar: Encrypts with negative shift, and no wrap required', () => {
    expect(caesar('vwxyz', -1)).toBe('uvwxy')
})

test('Caesar: Encrypts successfully when wrapping from a -> z', () => {
    expect(caesar('that is a dog', -5)).toBe('ocvo dn v yjb')
})

test('Caesar: Decrypts with the default shfit value of "1" when no value is specified', () => {
    expect(caesar('abcde')).toBe('bcdef')
})

test('Caesar: Keeps relevant characters in uppercase', () => {
    expect(caesar('ThIs Is A sEnTeNcE', 1)).toBe('UiJt Jt B tFoUfOdF')
})

test('Caesar: Throws error when non-English characters are used', () => {
    expect(() => {caesar('test #7', 1)}).toThrow(Error)
})

test('Caesar: Returns empty string when empty string is supplied', () => {
    expect(caesar('')).toBe('')
})

test('Caesar: Returns original string when given a shift value of 0', () => {
    expect(caesar('final test', 0)).toBe('final test')
})