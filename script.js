// Priority Mapping
const priorityMap = {
    placement: 1,
    result: 2,
    event: 3
};

let notifications = [];

function addNotification(type, message) {

    const newNotification = {
        id: Date.now(),
        type: type,
        message: message,
        priority: priorityMap[type],
        time: new Date()
    };

    notifications.push(newNotification);

    // Sort based on priority and latest time
    notifications.sort((a, b) => {

        if (a.priority !== b.priority) {
            return a.priority - b.priority;
        }

        return b.time - a.time;
    });

    const top10 = notifications.slice(0, 10);

    displayNotifications(top10);
}

function displayNotifications(data) {

    const container = document.getElementById("notificationBox");

    container.innerHTML = "";

    data.forEach(notification => {

        const div = document.createElement("div");

        div.classList.add("notification");

        div.innerHTML = `
            <h3>${notification.type.toUpperCase()}</h3>
            <p>${notification.message}</p>
        `;

        container.appendChild(div);
    });
}
addNotification("event", "Hackathon starts tomorrow");

addNotification("placement", "TCS interview on Monday");

addNotification("result", "Semester results released");

addNotification("placement", "Infosys hiring drive");

addNotification("event", "Workshop at 4 PM");