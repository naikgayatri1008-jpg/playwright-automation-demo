// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  timeout: 40*1000,
  expect :{
    timeout: 40*1000,
  },
  reporter: 'html',
  use: {
    baseURL: "https://rahulshettyacademy.com/loginpagePractise",
    browserName: 'chromium',
    headless: true,
  },
});
module.exports= config

