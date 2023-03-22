const testFunction = (testParameter) => {
    class Test {
        constructor(testParameter) {
            this.testParameter = testParameter
        }
        sendResponse() {
            return this.testParameter
        }
    }
    const testingClass = new Test(testParameter)
    testingClass.sendResponse()
}

module.exports = testFunction;