module.exports = function toReadable(number) {
    const onesArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number === 0 ) {
        return 'zero'
      }

    const cutNumToArr = (number) => {
        let numToStr = number.toString().split('').reverse().join('')
        let cutStr = ''
        for (let i = 1; i < numToStr.length + 1; i++) {
            const el = numToStr[i - 1];
            if (i % 3 == 0 && i !== numToStr.length) {
                cutStr += el + ' '
            } else {
                cutStr += el
            }
        }
        let cutArr = cutStr.split('').reverse().join('').split(' ')
        return cutArr
    }

    const ones = (number) => {
        if (number === 0) {
            return ''
        } else {
            return onesArr[number - 1]
        }
    }

    const tens = (number) => {
        let arr = number.toString().split('')
        if (+arr[1] === 0) {
            return tensArr[arr[0] - 2]
        } else {
            let str = tensArr[arr[0] - 2] + ' ' + onesArr[arr[1] - 1]
            return str
        }
    }

    const hunds = (number) => {
        if (number === 0) {
            return ''
        }
        let arr = number.toString().split('')
        let a = arr[1] + arr[2]
        return onesArr[arr[0] - 1] + ' hundred' + ( +a == 0 ? '' : ' ') + (+arr[1] === 0 || +arr[1] === 1 ? ones(+a)
            : tens(+a))
    }

    const thousands = (number) => {
        let cutArr = cutNumToArr(number)
        let result = sort(+cutArr[0]) + ' thousand ' + sort(+cutArr[1])
        return result
    }

    const millions = (number) => {
        let cutArr = cutNumToArr(number)
        console.log(cutArr)
        let result = sort(+cutArr[0]) + ' million ' + sort(+cutArr[1]) + (+cutArr[1] == 0 ? '' : ' thousand ') + sort(+cutArr[2])
        return result
    }

    const sort = (number) => {
        if (number < 20) {
            return ones(number)
        } else if (number >= 20 && number < 100) {
            return tens(number)
        } else if (number >= 100 && number < 1000) {
            return hunds(number)
        } else if (number >= 1000 && number < 1000000) {
            return thousands(number)
        } else if (number >= 1000000 && number < 1000000000) {
            return millions(number)
        }
    }
    return sort(number)
}
