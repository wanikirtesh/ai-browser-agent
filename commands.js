function getCommandSteps(instruction) {
    const steps = [];
  
    if (instruction.toLowerCase().includes("search")) {
      const query = instruction.split("search for")[1]?.trim() || "Node.js";
      steps.push({ action: "goto", value: "https://www.google.com" });
      steps.push({ action: "type", selector: '[name="q"]', value: query });
      steps.push({ action: "press", selector: '[name="q"]', value: "Enter" });
    }
  
    return steps;
  }
  
  module.exports = { getCommandSteps };
  