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

const phone_number = +254759418593;

// handle modal
const openModalButton = document.getElementById('open-modal');
const openModalButtonMobile = document.getElementById('open-modal-mobile');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('crud-modal');
const bookingForm = document.getElementById('booking-form');

const toggleModal = (action) => {
    if (action === 'open') {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
    } else {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    }
};

openModalButton.addEventListener('click', () => toggleModal('open'));
openModalButtonMobile.addEventListener('click', () => toggleModal('open'));
closeModalButton.addEventListener('click', () => toggleModal('close'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        toggleModal('close');
    }
});

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
    toggleModal('close');
});