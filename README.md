Quick project to verify what post message API is available on a top level iframe within a React Native WebView
# How to run test
1. Start web webser
```shell
cd site
npx live-server --no-browser
```
2. Start React Native in iOS Simulator
```shell
# In a second terminal
cd rn-app
npm i
npm run ios
```
3. Click the "Send Message" button in the child iframe
