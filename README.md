# Playwright Automation Framework
A UI test automation framework built using **Playwright** and **JavaScript**, following the **Page Object Model (POM)** design pattern.
This project automates common user workflows and demonstrates best practices for building maintainable and scalable test automation.

---
## Tech Stack
- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Git & GitHub
- GitHub Actions (CI)

---
## Project Structure
```
playwright-framework/
│
├── pageobjects/
│   ├── LoginPage.js
│   └── ShopPage.js
│
├── tests/
│   ├── login.spec.js
│   └── userFlow.spec.js
│
├── testdata/
│   └── users.json
│
├── playwright.config.js
├── package.json
└── README.md
```

---
## Features Implemented
### Sprint 1
- Playwright project setup
- First UI tests
- Playwright configuration
### Sprint 2
- Page Object Model (POM)
- Externalized test data using JSON
- Data-driven login tests
- Reusable login methods
- Base URL configuration
- Smoke and Regression test tagging
- Parallel test execution
### Sprint 3
- Complete user login workflow
- Radio button handling
- HTML modal interaction
- Dropdown selection
- Checkbox validation
- UI state verification
- End-to-end workflow validation

---
## Test Scenarios Covered
### Login Tests
- Valid Login
- Invalid Username & Password
- Empty Username
- Empty Password
- Empty Credentials
### User Workflow
- Select User role
- Confirm information popup
- Select Consultant account type
- Accept Terms & Conditions
- Successful login to Shop page

**Not yet covered** (see Future Enhancements): checkout flow, product selection, API-level tests.

---
## Running the Tests
Install dependencies:
```bash
npm install
```
Install Playwright browsers:
```bash
npx playwright install
```
Run all tests:
```bash
npx playwright test
```
Run only Smoke tests:
```bash
npx playwright test --grep @smoke
```
Run only Regression tests:
```bash
npx playwright test --grep @regression
```
Run in headed mode:
```bash
npx playwright test --headed
```
View the HTML report:
```bash
npx playwright show-report
```

---
## CI/CD
This project is integrated with **GitHub Actions**.
Every push and pull request automatically:
- Installs dependencies
- Installs Playwright browsers
- Executes the Playwright test suite
- Publishes the Playwright HTML report as a workflow artifact

---
## Learning Objectives
This project focuses on:
- Writing maintainable Playwright tests
- Designing reusable Page Objects
- Data-driven testing
- UI automation best practices
- Test organization
- Continuous Integration with GitHub Actions

---
## Future Enhancements
- Product selection automation
- Shopping cart validation
- Checkout workflow
- API testing with Playwright
- Cross-browser execution
- Test reporting enhancements

---
## Author
**Gayatri Naik**
GitHub: [https://github.com/naikgayatri1008-jpg](https://github.com/naikgayatri1008-jpg)
LinkedIn: [https://www.linkedin.com/in/naikgayatri/](https://www.linkedin.com/in/naikgayatri/)
