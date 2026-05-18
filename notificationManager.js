const axios = require("axios");

const API_URL =
    "http://4.224.186.213/evaluation-service/notifications";

const priorityMap = {
    Placement: 1,
    Result: 2,
    Event: 3
};

let topNotifications = [];

const TOP_N = 10;

function compareNotifications(a, b) {

    if (a.priority !== b.priority) {
        return a.priority - b.priority;
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
}


function processNotification(notification) {

    notification.priority =
        priorityMap[notification.Type] || 999;

    topNotifications.push(notification);

    topNotifications.sort(compareNotifications);

    if (topNotifications.length > TOP_N) {
        topNotifications.pop();
    }
}

async function fetchNotifications() {

    try {

        const response = await axios.get(API_URL);

        const notifications =
            response.data.notifications;

        notifications.forEach(notification => {
            processNotification(notification);
        });

        console.log("\nTOP PRIORITY NOTIFICATIONS\n");

        console.table(
            topNotifications.map(notification => ({
                ID: notification.ID,
                Type: notification.Type,
                Message: notification.Message,
                Timestamp: notification.Timestamp
            }))
        );

    } catch (error) {

        console.error(
            "Error fetching notifications:",
            error.message
        );
    }
}

fetchNotifications();