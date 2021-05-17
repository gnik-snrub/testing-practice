const cipherArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
const cipherLength = cipherArray.length
const cipherMax = cipherLength - 1

const caesar = (str: string, shift: number = 1) => {
    if (shift === 0 || str === '') return str
    const strArr = str.split('')
    strArr.map(char => {
        if (!(char === ' ')) {
            if (!cipherArray.includes(char.toLowerCase())) {
                throw new Error('Error: Non-English characters included')
            }
        }
    })
    const newStr = str.split('').map(char => {
        if (char === ' ') return ' '

        const isUpper = (char === char.toUpperCase())
        char = char.toLowerCase()

        let newIndex = cipherArray.indexOf(char) + shift

        if (newIndex < -1) {
            newIndex += cipherMax + 1
        } else if (newIndex > cipherMax) {
            newIndex = -1 + (newIndex - cipherMax)
        }

        return isUpper ? cipherArray[newIndex].toUpperCase() : cipherArray[newIndex]
    }).join('')

    return newStr
}

export default caesar