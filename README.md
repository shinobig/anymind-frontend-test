# One Day Chat Application Challenge

This is the Challenge application for AnyMind, developed by Victor Shinobi Toshiki Gakiya Cruz.


## Tech Stack and Dependencies
* React.js
* Jest
* TypeScript
* GraphQl
* Apollo/Client
* Styled-components
* Istanbul-badges-readme
* React-icons


## Getting Started

1. Clone the repository
```bash
git clone https://github.com/shinobig/anymind-frontend-test.git
```

2. Install npm packages in the root directory
```bash
npm install
```

3. Run the project

[This project uses the default configuration from the NPX react project generator](https://reactjs.org/docs/create-a-new-react-app.html)


```bash
npm start
```
Please note that this project was created with the node version 18.1.0, on node version 16.14.2, older versions might not work.

If you see the following message, it means that the application is up and running in [http://localhost:3000/](http://localhost:3000/) (The application should open a browser tab automatically)
```bash
No issues found.
```

## About this project

This project matches the following points (Described in the test PDF document):

:heavy_check_mark: Users can talk with eachother.

:heavy_check_mark: User can choose from three predefined users

:heavy_check_mark: User can change the channel

:heavy_check_mark: Whenever a channel change, it displays the latest message

:heavy_check_mark: Whenever the HTML petition returns an error, an error message is displayed and the option to resend the message

:heavy_check_mark: When the user reopen the page, the text editor maintains the text

:heavy_check_mark: Suggested better UI

### Context API

The application handles 3 main properties in the context API, the channel Id, the selected user and the chat itself. That way, it is easier to manage verification and sending new messages.

### Components
All of the components in this project are functional components.

### Notes
* Please note that this application is not optimized for tablet or mobile devices.
* The Read More button will be active when there are 10 or more messages displayed.
* There is warning related to the installation of some of the modules in the Apollo/Client, please note that this does not affect on the application at all.

### Project Structure

```bash
src
├── App.tsx
├── components
│   ├── ChatHolder
│   │   ├── ChatHeader
│   │   │   └── ChatHeader.tsx
│   │   ├── ChatHolder.tsx
│   │   ├── ChatWindow
│   │   │   └── ChatWindow.tsx
│   │   ├── MessageHolder
│   │   │   ├── MessageBubble.tsx
│   │   │   ├── MessageHolder.tsx
│   │   │   ├── MessageStatus.tsx
│   │   │   └── UserIcon.tsx
│   │   └── TextBox
│   │       └── Textbox.tsx
│   ├── Header
│   │   └── Header.tsx
│   ├── Menu
│   │   ├── ChannelButton.tsx
│   │   └── Menu.tsx
│   ├── SharedStyles
│   │   └── GeneralButton.ts
│   └── Spinner
│       └── Spinner.tsx
├── context
│   └── chatContext.ts
├── graphql
│   ├── mutations.ts
│   └── queries.ts
├── Hooks
│   └── Hooks.ts
├── Icons
│   ├── JoiseIcon.svg
│   ├── RusselIcon.svg
│   └── SamIcon.svg
├── index.css
├── index.tsx
├── interfaces
│   └── interfaces.ts
├── logo.svg
├── react-app-env.d.ts
├── setupTests.ts
├── __test__
│   ├── App.test.tsx
│   ├── components
│   │   ├── ChatHolder.test.tsx
│   │   ├── Menu.test.tsx
│   │   ├── MessageHolder.test.tsx
│   │   ├── MockAppComponent.tsx
│   │   └── TextBox.test.tsx
│   ├── mockQueries.ts
│   └── testUtils
│       └── icons.test.tsx
└── utils
    ├── IconSelector.tsx
    ├── memoizeInput.ts
    ├── postMessage.ts
    └── timeUtils.ts

```




## Tests
In order to run the tests and create a report document, run the following command in the root directory:
```bash
npm run test
```
The report document will be stored in the following directory as an HTML file.
```bash
__root__/coverage/lcov-report/index.html
```

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

## Thank you for the opportunity!
