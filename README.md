# Front for the Wazuh Technical Test
## [Live version here](https://wazuh-technical-front.web.app/)

In this project, I have built a web application that displays the data provided from the [wazuhTechnicalAPI](https://github.com/mpRegalado/wazuhTechnicalAPI)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

### Clone the repository and acces the directory
```
git clone https://github.com/mpRegalado/wazuhTechnicalFront
cd wazuhTechnicalFront
```

### Install the dependencies
```
yarn install
```
## Usage

### Make sure the API is running
In order to display the data, the app must connect to the API.
In another terminal window, run the instructions described here
[https://github.com/mpRegalado/wazuhTechnicalAPI](https://github.com/mpRegalado/wazuhTechnicalAPI)

### Make sure the api URL is correct
By default, the API launches at localhost:5000, so run the following command
```
echo "REACT_APP_ENDPOINT_URL=http://127.0.0.1:5000" > .env.local
```
Change that IP to the one your API instance is listening to for the development mode version, or write to `.env` if you want to change the production API endpoint
### Run the app
```
yarn start
```