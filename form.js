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

    let events = JSON.parse(localStorage.getItem('upcomingEvents')) || [];

    events.push(event);
    localStorage.setItem('upcomingEvents', JSON.stringify(events));

    alert("Event added successfully!");

    eventForm.reset();
});

document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;


    const newEvent = {
        title,
        date,
        description,
        location
    };


    let events = JSON.parse(localStorage.getItem("events")) || [];


    events.push(newEvent);


    localStorage.setItem("events", JSON.stringify(events));


    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";


    this.reset();

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});
