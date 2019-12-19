describe("server.js", function() {
    describe("environment", function() {
      it("should set environment to testing", function() {
        expect(process.env.DB_ENV).toBe("testing");
      });
    });
});