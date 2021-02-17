import { iterateThroughCities } from "./Weather";

describe("tests", () => {
  it("single city", (cb) => {
    iterateThroughCities(["Atlanta"]).then((response) => {
      expect(response).toHaveLength(1);
      cb();
    });
  });

  it("many cities", (cb) => {
    iterateThroughCities(["Atlanta", "Seattle"]).then((response) => {
      expect(response).toHaveLength(2);
      cb();
    });
  });
});
