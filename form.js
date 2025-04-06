const eventForm = document.getElementById('eventForm');

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = document.getElementById('eventDate').value;
    const title = document.getElementById('eventTitle').value;
    const desc = document.getElementById('eventDesc').value;
    const location = document.getElementById('eventLocation').value;

    const event = {
        date: new Date(date).toDateString(),
        title,
        desc,
        location
    };

    // Get existing events or empty array
    let events = JSON.parse(localStorage.getItem('upcomingEvents')) || [];

    events.push(event);
    localStorage.setItem('upcomingEvents', JSON.stringify(events));

    alert("Event added successfully!");

    eventForm.reset();
});

document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // collect data
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;

    // create event object
    const newEvent = {
        title,
        date,
        description,
        location
    };

    // get current events from localStorage
    let events = JSON.parse(localStorage.getItem("events")) || [];

    // add new event
    events.push(newEvent);

    // store updated list
    localStorage.setItem("events", JSON.stringify(events));

    // show confirmation
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    // reset form
    this.reset();

    // optionally hide message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});
