let expect = chai.expect;

describe("Create Cards", () => {
    it ("#Should create a new card", () => {
        let newCard = new Card("2", 1, "Hearts");

        expect (newCard).to.include({rank: "2", value: 1, suit: "Hearts"});
    });
})

// I am thoroughly confused with testing with Mocha and Chai. I will need to take more time and dig into the documentation to understand better how to utilize these methods.