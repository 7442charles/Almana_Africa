// <!--  Mobile Menu Toggle -->
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});

const phone_number = +254719306479;
// Function to toggle modal visibility
const toggleModal = (modal, action) => {
    if (action === 'open') {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove("overflow-hidden"); // Restore background scrolling
    }
};

// Function to setup modal event listeners
const setupModal = (openButtonId, closeButtonId, modalId) => {
    const openButton = document.getElementById(openButtonId);
    const closeButton = document.getElementById(closeButtonId);
    const modal = document.getElementById(modalId);

    openButton.addEventListener('click', () => toggleModal(modal, 'open'));
    closeButton.addEventListener('click', () => toggleModal(modal, 'close'));

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            toggleModal(modal, 'close');
        }
    });
};

// Setup modals
setupModal('open-modal', 'close-modal', 'crud-modal');
setupModal('open-mara-modal', 'close-mara-modal', 'mara-modal');
setupModal('open-lake-nakuru-modal', 'close-lake-nakuru-modal', 'lake-nakuru-modal');
setupModal('open-amboseli-modal', 'close-amboseli-modal', 'amboseli-modal');
setupModal('open-naivasha-modal', 'close-naivasha-modal', 'naivasha-modal');
setupModal('open-nairobi-modal', 'close-nairobi-modal', 'nairobi-modal');
setupModal('open-mount-kenya-modal', 'close-mount-kenya-modal', 'mount-kenya-modal');

// Booking form submission handling
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect data from the form
    const name = document.getElementById('name').value;
    const stayDays = document.getElementById('stay_days').value;
    const destination = document.getElementById('destination').value;
    const description = document.getElementById('description').value;

    // Construct the WhatsApp message
    const message = `*Booking Details*\nName: ${name}\nStay Days: ${stayDays}\nDestination: ${destination}\nAdditional Info: ${description}`;
    const whatsappURL = `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');

    // Optionally, close the modal after sending
    toggleModal(document.getElementById('crud-modal'), 'close');
});