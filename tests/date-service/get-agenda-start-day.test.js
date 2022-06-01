import DateService from "../../src/services/DateService";

describe('getAgendaStartDay()', () => {

    const dateService = new DateService()

    test('range: [ W T F S S M T ] first day: 3 daysNumber: 7 current date: ' + new Date(), () => {

        const today = new Date()
        const todayDay = new Date().getDay()

        let expectedResult = new Date()

        const result = dateService.getAgendaStartDay(3, 7)
        expect(result.toDateString()).toBe(expectedResult.toDateString())
    })

    test('range: [ F S ] first day: 5 daysNumber: 2 current date: ' + new Date(), () => {

        const today = new Date()
        const todayDay = new Date().getDay()

        let expectedResult = new Date()

        switch (todayDay) {
            case 0:
                expectedResult = new Date(today.setDate(today.getDate() + 5))
                break
            case 1:
                expectedResult = new Date(today.setDate(today.getDate() + 4))
                break
            case 2:
                expectedResult = new Date(today.setDate(today.getDate() + 3))
                break
            case 3:
                expectedResult = new Date(today.setDate(today.getDate() + 2))
                break
            case 4:
                expectedResult = new Date(today.setDate(today.getDate() + 1))
                break
            case 5:
                expectedResult = new Date()
                break
            case 6:
                expectedResult = new Date()
                break
        }

        const result = dateService.getAgendaStartDay(5, 2)
        expect(result.toDateString()).toBe(expectedResult.toDateString())
    })

    test('range: [ F S S ] first day: 5 daysNumber: 3 current date: ' + new Date(), () => {

        const today = new Date()
        const todayDay = new Date().getDay()

        let expectedResult = new Date()

        switch (todayDay) {
            case 0:
                expectedResult = new Date()
                break
            case 1:
                expectedResult = new Date(today.setDate(today.getDate() + 4))
                break
            case 2:
                expectedResult = new Date(today.setDate(today.getDate() + 3))
                break
            case 3:
                expectedResult = new Date(today.setDate(today.getDate() + 2))
                break
            case 4:
                expectedResult = new Date(today.setDate(today.getDate() + 1))
                break
            case 5:
                expectedResult = new Date()
                break
            case 6:
                expectedResult = new Date()
                break
        }

        const result = dateService.getAgendaStartDay(5, 3)
        expect(result.toDateString()).toBe(expectedResult.toDateString())
    })

})