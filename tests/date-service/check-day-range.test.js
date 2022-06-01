import DateService from "../../src/services/DateService";
import { DAYS_IN_WEEK } from "../../src/utils/constants";

describe('isDayInDatesRange() for day: 0 (Sunday)', () => {

    const dateService = new DateService()
    const day = 0

    const cases = []

    cases.push([day, -1, 7])

    for (let i = 0; i < DAYS_IN_WEEK; i++) {
        for (let j = 1; j <= DAYS_IN_WEEK ; j++) {
            cases.push([day, i, j])
        }
    }

    test.each(cases)(
        "day: %p firstDay: %p daysNumber: %p",
        (day, firstDay, daysNumber) => {
            let expectedResult = true
            if (firstDay == 1 && daysNumber <= 6) {
                expectedResult = false
            }
            if (firstDay == 2 && daysNumber <= 5) {
                expectedResult = false
            }
            if (firstDay == 3 && daysNumber <= 4) {
                expectedResult = false
            }
            if (firstDay == 4 && daysNumber <= 3) {
                expectedResult = false
            }
            if (firstDay == 5 && daysNumber <= 2) {
                expectedResult = false
            }
            if (firstDay == 6 && daysNumber <= 1) {
                expectedResult = false
            }
            const result = dateService.isDayInDatesRange(day, firstDay, daysNumber)
            expect(result).toEqual(expectedResult)
        }
    )

})

describe('isDayInDatesRange() for day: 1 (Monday)', () => {

    const dateService = new DateService()
    const day = 1

    const cases = []

    cases.push([day, -1, 7])

    for (let i = 0; i < DAYS_IN_WEEK; i++) {
        for (let j = 1; j <= DAYS_IN_WEEK ; j++) {
            cases.push([day, i, j])
        }
    }

    test.each(cases)(
        "day: %p firstDay: %p daysNumber: %p",
        (day, firstDay, daysNumber) => {
            let expectedResult = true
            if (firstDay == 0 && daysNumber == 1) {
                expectedResult = false
            }
            if (firstDay == 2 && daysNumber <= 6) {
                expectedResult = false
            }
            if (firstDay == 3 && daysNumber <= 5) {
                expectedResult = false
            }
            if (firstDay == 4 && daysNumber <= 4) {
                expectedResult = false
            }
            if (firstDay == 5 && daysNumber <= 3) {
                expectedResult = false
            }
            if (firstDay == 6 && daysNumber <= 2) {
                expectedResult = false
            }
            const result = dateService.isDayInDatesRange(day, firstDay, daysNumber)
            expect(result).toEqual(expectedResult)
        }
    )

})

describe('isDayInDatesRange() for day: 2 (Tuesday)', () => {

    const dateService = new DateService()
    const day = 2

    const cases = []

    cases.push([day, -1, 7])

    for (let i = 0; i < DAYS_IN_WEEK; i++) {
        for (let j = 1; j <= DAYS_IN_WEEK ; j++) {
            cases.push([day, i, j])
        }
    }

    test.each(cases)(
        "day: %p firstDay: %p daysNumber: %p",
        (day, firstDay, daysNumber) => {
            let expectedResult = true
            if (firstDay == 0 && daysNumber <= 2) {
                expectedResult = false
            }
            if (firstDay == 1 && daysNumber <= 1) {
                expectedResult = false
            }
            if (firstDay == 3 && daysNumber <= 6) {
                expectedResult = false
            }
            if (firstDay == 4 && daysNumber <= 5) {
                expectedResult = false
            }
            if (firstDay == 5 && daysNumber <= 4) {
                expectedResult = false
            }
            if (firstDay == 6 && daysNumber <= 3) {
                expectedResult = false
            }
            const result = dateService.isDayInDatesRange(day, firstDay, daysNumber)
            expect(result).toEqual(expectedResult)
        }
    )

})

describe('isDayInDatesRange() for day: 6 (Saturday)', () => {

    const dateService = new DateService()
    const day = 6

    const cases = []

    cases.push([day, -1, 7])

    for (let i = 0; i < DAYS_IN_WEEK; i++) {
        for (let j = 1; j <= DAYS_IN_WEEK ; j++) {
            cases.push([day, i, j])
        }
    }

    test.each(cases)(
        "day: %p firstDay: %p daysNumber: %p",
        (day, firstDay, daysNumber) => {
            let expectedResult = true
            if (firstDay == 0 && daysNumber <= 6) {
                expectedResult = false
            }
            if (firstDay == 1 && daysNumber <= 5) {
                expectedResult = false
            }
            if (firstDay == 2 && daysNumber <= 4) {
                expectedResult = false
            }
            if (firstDay == 3 && daysNumber <= 3) {
                expectedResult = false
            }
            if (firstDay == 4 && daysNumber <= 2) {
                expectedResult = false
            }
            if (firstDay == 5 && daysNumber <= 1) {
                expectedResult = false
            }
            const result = dateService.isDayInDatesRange(day, firstDay, daysNumber)
            expect(result).toEqual(expectedResult)
        }
    )

})