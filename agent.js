const { chromium } = require('playwright');
const readline = require('readline');
const { askGemini } = require('./gemini.js');
const { getCommandSteps } = require('./commands.js');
const vm = require('vm');   

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function runCode(code) {
    try {
      console.info("Running automated script")
      const script = new vm.Script(code);
      const context = vm.createContext({ require, console, setTimeout });
      await script.runInContext(context);
    } catch (err) {
      console.error('❌ Error running code:\n', err);
    }
  }

rl.question("What should the agent do? ", async (userPrompt) => {
  console.log("Thinking...");
  const aiInstruction = await askGemini(`Convert this into a browser task: ${userPrompt}`);
  console.log("Gemini says:\n", aiInstruction);

runCode(aiInstruction.replace("```javascript","").replace("```",""));

 // const steps = getCommandSteps(userPrompt);
 // const browser = await chromium.launch({ headless: false });
 // const page = await browser.newPage();

//  for (const step of steps) {
 //   if (step.action === "goto") await page.goto(step.value);
 //   if (step.action === "type") await page.fill(step.selector, step.value);
 //   if (step.action === "press") await page.press(step.selector, step.value);
 // }

  console.log("✅ Task completed.");
  rl.close();
});
