const analyze = (numArr: number[]) => {
    const average = () => { return numArr.reduce((total, curr) => total += curr) / numArr.length }
    const min = () => { return numArr.sort((a, b) => a - b)[0] }
    const max = () => { return numArr.sort((a, b) => b - a)[0] }
    const length = numArr.length

    return {
        average: average(),
        min: min(),
        max: max(),
        length: length
    }

}

export default analyze