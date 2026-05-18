const axios = require("axios");

const REGISTER_URL ="https://20.244.56.144/23CSR174/register";

async function register() {

    try {

        const response = await axios.post(
            REGISTER_URL,
            {
                email: "redhanitv.23cse@kongu.edu",
                name: "Redhani",
                mobileNo: "8012537771",
                githubUsername: "Redhani17",
                rollNo: "23CSR174",
                accessCode: "RyZBcy"
            }
        );

        console.log("\nREGISTRATION SUCCESS\n");

        console.log(response.data);

    } catch (error) {

        console.error(
            error.response?.data || error.message
        );
    }
}

register();
