window.addEventListener('DOMContentLoaded', () => {
    const upcomingContainer = document.querySelector('.events-container');
    let events = JSON.parse(localStorage.getItem('upcomingEvents')) || [];

    function renderEvents() {
        upcomingContainer.innerHTML = ''; // Clear existing
        events.forEach((event, index) => {
            const card = document.createElement('div');
            card.classList.add('event-card');
            card.innerHTML = `
                <h3 class="event-date">${event.date}</h3>
                <h2 class="event-title">${event.title}</h2>
                <p>${event.desc}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <button class="register-button">Register Now</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            upcomingContainer.appendChild(card);
        });
    
        // Attach delete listeners with confirmation
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                const confirmDelete = confirm("Are you sure you want to delete this event?");
                if (confirmDelete) {
                    events.splice(idx, 1); // Remove event
                    localStorage.setItem('upcomingEvents', JSON.stringify(events)); // Save back
                    renderEvents(); // Re-render
                }
            });
        });
    }
    

    renderEvents();
});

deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        const confirmDelete = confirm("Are you sure you want to delete this event?");
        if (confirmDelete) {
            events.splice(idx, 1); // Remove event
            localStorage.setItem('upcomingEvents', JSON.stringify(events)); // Save back
            renderEvents(); // Re-render
        }
    });
});

