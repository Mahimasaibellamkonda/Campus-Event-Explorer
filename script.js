// Event data

const events = [
    {
        title: "CodeSprint 2026",
        category: "technical",
        description: "A competitive coding challenge designed to test problem-solving and programming skills.",
        date: "October 05, 2026",
        time: "10:00 AM",
        venue: "Computer Science Block"
    },

    {
        title: "TechTalk: Future of AI",
        category: "technical",
        description: "An interactive session about Artificial Intelligence, Machine Learning and emerging technologies.",
        date: "October 10, 2026",
        time: "2:00 PM",
        venue: "Seminar Hall"
    },

    {
        title: "Campus Cultural Night",
        category: "cultural",
        description: "An evening celebrating music, dance, drama and creativity from students across the campus.",
        date: "October 15, 2026",
        time: "5:30 PM",
        venue: "Open Auditorium"
    },

    {
        title: "Inter-Department Football",
        category: "sports",
        description: "Compete with teams from different departments in the annual campus football tournament.",
        date: "October 18, 2026",
        time: "8:00 AM",
        venue: "College Ground"
    },

    {
        title: "UI/UX Design Workshop",
        category: "workshop",
        description: "Learn the fundamentals of user interface and user experience design through practical activities.",
        date: "October 22, 2026",
        time: "11:00 AM",
        venue: "Innovation Lab"
    },

    {
        title: "Startup Ideathon",
        category: "workshop",
        description: "Present your innovative ideas and work with a team to develop solutions for real-world problems.",
        date: "October 28, 2026",
        time: "9:30 AM",
        venue: "Innovation Centre"
    }
];


// Getting HTML elements

const eventsContainer = document.getElementById("eventsContainer");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const registrationModal =
    document.getElementById("registrationModal");

const closeModal =
    document.getElementById("closeModal");

const registrationForm =
    document.getElementById("registrationForm");

const selectedEvent =
    document.getElementById("selectedEvent");

const successMessage =
    document.getElementById("successMessage");


// Display events

function displayEvents(eventList) {

    eventsContainer.innerHTML = "";

    if (eventList.length === 0) {

        eventsContainer.innerHTML =
            "<p>No events found.</p>";

        return;
    }


    eventList.forEach(function(event) {

        const card = document.createElement("div");

        card.className = "event-card";

        card.innerHTML = `
            <span class="event-category">
                ${event.category}
            </span>

            <h3>${event.title}</h3>

            <p>${event.description}</p>

            <div class="event-info">
                <p>📅 ${event.date}</p>
                <p>⏰ ${event.time}</p>
                <p>📍 ${event.venue}</p>
            </div>

            <button
                class="register-btn"
                onclick="openRegistration('${event.title}')">
                Register
            </button>
        `;

        eventsContainer.appendChild(card);
    });
}


// Search and filter

function filterEvents() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedCategory =
        categoryFilter.value;


    const filteredEvents = events.filter(function(event) {

        const matchesSearch =
            event.title.toLowerCase()
            .includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            event.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });


    displayEvents(filteredEvents);
}


// Search event

searchInput.addEventListener(
    "input",
    filterEvents
);


// Filter category

categoryFilter.addEventListener(
    "change",
    filterEvents
);


// Open registration modal

function openRegistration(eventName) {

    registrationModal.style.display = "flex";

    selectedEvent.textContent =
        "Register for " + eventName;

    successMessage.textContent = "";

    registrationForm.reset();
}


// Close modal

closeModal.addEventListener(
    "click",
    function() {

        registrationModal.style.display = "none";

    }
);


// Close modal when clicking outside

window.addEventListener(
    "click",
    function(event) {

        if (event.target === registrationModal) {

            registrationModal.style.display = "none";

        }

    }
);


// Registration form

registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("studentName").value.trim();

        const email =
            document.getElementById("studentEmail").value.trim();


        if (name === "" || email === "") {

            successMessage.style.color = "red";

            successMessage.textContent =
                "Please fill in all fields.";

            return;
        }


        successMessage.style.color = "green";

        successMessage.textContent =
            "Registration successful!";


        registrationForm.reset();
    }
);


// Display events when page loads

displayEvents(events);