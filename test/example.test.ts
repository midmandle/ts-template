import Example from "../src/example";

describe("Example", () => {
    it("should do a thing", () => {
        const example = new Example();
        expect(example.doAThing()).toEqual(true);
    });
})