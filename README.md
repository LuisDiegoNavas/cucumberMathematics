# 🥗 WebdriverIO + Cucumber BDD Test Automation

This project is a **simple test automation framework** built using:

- [WebdriverIO](https://webdriver.io/)
- [Cucumber](https://cucumber.io/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

It showcases how to write BDD test scenarios using Gherkin syntax and automate tests using a page-object model — with a fun twist using **carrots**, **cucumbers**, and **salads**!

---

## 📦 Installation

> Make sure you have [Node.js](https://nodejs.org/) installed (v22+ recommended).

1. Clone this repository:

```bash
git clone https://github.com/LuisDiegoNavas/cucumberMathematics
cd main
```
2. Install dependencies:
```bash
npm install
```

3. ▶️ Run the Tests
```bash
npm run chrome
npm run fireFox // only on Gitlab
```
## 📁 Project Structure

It showcases how to write BDD test scenarios using Gherkin syntax and automate tests using a page-object model — with a fun twist using **carrots**, **cucumbers**, and **salads**!
```bash
├── features/
│   ├── step-definitions/
│   │   └── steps.ts               # Cucumber step definitions
│   ├── pageobjects/
│   │   └── inventory.page.ts      # Page object for test state (inventory logic)
│   └── salad.feature              # Gherkin scenarios
│
├── tsconfig.json                  # TypeScript configuration
├── wdio.conf.ts                   # WebdriverIO configuration
└── package.json
```

MIT License.
