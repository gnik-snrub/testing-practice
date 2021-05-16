import reverseString from '../code/reverseString'

test('ReverseString: Works with basic words "test" to "tset"', () => {
    expect(reverseString('test')).toBe('tset')
})

test('ReverseString: Works with numbers "123456" to "654321"', () => {
    expect(reverseString('123456')).toBe('654321')
})

test('ReverseString: Mixtures of numbers, letters, spaces, and punctuation are fine', () => {
    expect(reverseString("I couldn't see the 3rd dog, could you?"))
        .toBe("?uoy dluoc ,god dr3 eht ees t'ndluoc I")
})