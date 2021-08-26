const Index = require("../index");

describe("Index", () => {
    describe("name1", () => {

        it("should output a string", () => {

            const name = "Kelley";

            const result = new Index().name;
            expect(result).toEqual(name);
        });

    })
});

describe("Index", () => {
    describe("position1", () => {

        it("should output a string", () => {

            const position = "Engineer";

            const result = new Index().position;
            expect(result).toEqual(position);
        });

    })
});


describe("Index", () => {
    describe("id1", () => {

        it("should return an object containing a 'number' property when input", () => {
            const obj = new Index();

            expect("number" in obj).toEqual(true);
        });

        it("should set 'number' when created", () => {
            const num = 1;

            const obj = new Index(num);

            expect(obj.number).toEqual(num);

        });

    })
});

describe("Index", () => {
    describe("email1", () => {

        it("should output a string ending in '.com' ", () => {

            const email = "kmcdonnell8@gmail.com";

            const result = new Index().email;
            expect(result).toEqual(email);
        });

    })
});


describe("Index", () => {
    describe("github1", () => {

        it("should output a string", () => {

            const github = "kelley-mcd";

            const result = new Index().github;
            expect(result).toEqual(github);
        });

    })
});