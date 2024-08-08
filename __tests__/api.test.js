// Import the formHandler function from the formHandler module
import { formHandler } from "../src/client/js/formHandler";

// Describe block for grouping related tests
describe('Test: "handleSubmit" should be a function', () => {
  
  // Individual test case
  it("should be a function", async () => {
    
    // Expect formHandler to be of type "function"
    expect(typeof formHandler).toBe("function");
  });
});

