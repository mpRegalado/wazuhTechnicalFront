# Front for the Wazuh Technical Test
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
By default, the app will try to connect to an API at
```
https://127.0.0.1:5000
```
If you wish to change this, modify the contents of the `.env` file.
### Run the app
```
yarn start
```