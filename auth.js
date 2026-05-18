const axios = require("axios");

const AUTH_URL =
    "http://20.244.56.144/evaluation-service/auth";

async function getToken() {

    try {

        const response = await axios.post(
            AUTH_URL,
            {
                email: "YOUR_EMAIL",
                name: "YOUR_NAME",
                rollNo: "YOUR_ROLL_NUMBER",
                accessCode: "YOUR_ACCESS_CODE",
                clientID: "YOUR_CLIENT_ID",
                clientSecret: "YOUR_CLIENT_SECRET"
            }
        );

        console.log("\nACCESS TOKEN:\n");

        console.log(response.data.access_token);

    } catch (error) {

        console.error(
            error.response?.data || error.message
        );
    }
}

getToken();