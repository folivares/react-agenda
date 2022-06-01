import DateService from "../../src/services/DateService";
import { DAYS_IN_WEEK } from "../../src/utils/constants";

describe('generateDatesForPeriod() for date: ' + new Date().toDateString() + ' check lenght', () => {

    const dateService = new DateService()

    const cases = []

    cases.push([-1, 7, new Date()])

    for (let i = 0; i < DAYS_IN_WEEK; i++) {
        for (let j = 1; j <= DAYS_IN_WEEK; j++) {
            cases.push([i, j, new Date()])
        }
    }

    test.each(cases)(
        "firstDay: %p daysNumber: %p current date: %p",
        (firstDay, daysNumber, currentDate) => {
            const result = dateService.generateDatesForPeriod(firstDay, daysNumber, currentDate)
            expect(result.length).toBe(daysNumber)
        }
    )

})

describe('generateDatesForPeriod() for date: ' + new Date().toDateString() + ' check if start date is correct', () => {

    const dateService = new DateService()

    test('range: [ W T F S S M T ] first day: 3 daysNumber: 7 current date: ' + new Date(), () => {

        const today = new Date()
        const todayDay = new Date().getDay()

        let expectedResult = new Date()

        switch (todayDay) {
            case 0:
                expectedResult = new Date(today.setDate(today.getDate() - 4))
                break
            case 1:
                expectedResult = new Date(today.setDate(today.getDate() - 5))
                break
            case 2:
                expectedResult = new Date(today.setDate(today.getDate() - 6))
                break
            case 3:
                expectedResult = new Date()
                break
            case 4:
                expectedResult = new Date(today.setDate(today.getDate() - 1))
                break
            case 5:
                expectedResult = new Date(today.setDate(today.getDate() - 2))
                break
            case 6:
                expectedResult = new Date(today.setDate(today.getDate() - 3))
                break
        }

        const result = dateService.generateDatesForPeriod(3, 7, new Date())
        expect(result[0].toDateString()).toBe(expectedResult.toDateString())
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
                expectedResult = new Date(today.setDate(today.getDate() - 1))
                break
        }

        const result = dateService.generateDatesForPeriod(5, 2, new Date())
        expect(result[0].toDateString()).toBe(expectedResult.toDateString())
    })

    test('range: [ F S S ] first day: 5 daysNumber: 3 current date: ' + new Date(), () => {

        const today = new Date()
        const todayDay = new Date().getDay()

        let expectedResult = new Date()

        switch (todayDay) {
            case 0:
                expectedResult = new Date(today.setDate(today.getDate() - 2))
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
                expectedResult = new Date(today.setDate(today.getDate() - 1))
                break
        }

        const result = dateService.generateDatesForPeriod(5, 3, new Date())
        expect(result[0].toDateString()).toBe(expectedResult.toDateString())
    })

})