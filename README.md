# Giphy Demo

Demo app designed using API of Giphy site

# Technologies

1. React.js 18.1.0
2. React Native 0.70.3

# Setup Instructions

1. Visit https://github.com/michael-williamson/Giphy_Demo & click on green button with title "Code" or simple copy this address https://github.com/michael-williamson/Giphy_Demo.git into the terminal & folder on your computer. Now type "git clone https://github.com/michael-williamson/Giphy_Demo.git" & hit enter. The project will be copied into that folder.

2. In the terminal using whatever package manager type e.g. "npm install" & this will install any dependencies necessary to run the project

3. You will need a couple of API keys available @ https://developers.giphy.com/docs/sdk. You will need an API key associated with React Native SDK & an API key associated with the Giphy API.

4. Once these keys are available create a file in the root folder "keys.tsx" & inside this file create an exported object "export const keys = {
   GIPHY_DEMO_SDK_KEY:"YOUR_SDK_KEY",
   GIPHY_DEMO_API_KEY:"YOUR_API_KEY"
   }
   "
5. Very Important!! Now add "keys.tsx" in the .gitignore file to prevent any Keys being pushed to a public repository.

6. After configuring an emulator to run React Native, type either npx react-native run-android || npx react-native run-ios