import {expect} from "chai";
import {Exception} from "../src";

describe("Exception", () => {
  it("should use origin", () => {
    const exception = new Exception(undefined, "test", new Error("test"));

    expect(exception.status).to.equal(500);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(500): test, innerException: test");
  });

  it("should use origin", () => {
    const exception = new Exception(203, "test", new Error("test"));

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203): test, innerException: test");
  });

  it("should use origin as string", () => {
    const exception = new Exception(203, "test", "test");

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203): test, innerException: test");
  });

  it("should use origin as string", () => {
    const exception = new Exception(203, "test", {});

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203): test");
    expect(exception.body).to.deep.equal({});
  });

  it("should return empty message when message parameters is undefined", () => {
    const exception = new Exception(203, undefined);

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203):");
  });
});
