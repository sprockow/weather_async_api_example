import { iterateThroughCities } from "./Weather";

describe("tests", () => {
  let originalTimeout = global.setTimeout;
  beforeAll(() => {
    window.setTimeout = (cb) => {
      originalTimeout(cb, 0);
    };
  });

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

  afterAll(() => {
    window.setTimeout = originalTimeout;
  });
});
