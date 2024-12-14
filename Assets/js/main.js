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

// maasai mara 

const openMaraModalButton = document.getElementById('open-mara-modal');
const closeMaraModalButton = document.getElementById('close-mara-modal');
const maraModal = document.getElementById('mara-modal');

const toggleMaraModal = (action) => {
    if (action === 'open') {
        maraModal.classList.remove('hidden');
        maraModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
        maraModal.classList.add('hidden');
        maraModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove("overflow-hidden"); // Restore background scrolling
    }
};

// Event listener for opening the Maasai Mara modal
(document.getElementById('open-mara-modal')).addEventListener('click', () => toggleMaraModal('open'));

// Event listener for closing the Maasai Mara modal
closeMaraModalButton.addEventListener('click', () => toggleMaraModal('close'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === maraModal) {
        toggleMaraModal('close');
    }
});

// lake nakuru
const openLakeNakuruModalButton = document.getElementById('open-lake-nakuru-modal');
const closeLakeNakuruModalButton = document.getElementById('close-lake-nakuru-modal');
const lakeNakuruModal = document.getElementById('lake-nakuru-modal');

const toggleLakeNakuruModal = (action) => {
    if (action === 'open') {
        lakeNakuruModal.classList.remove('hidden');
        lakeNakuruModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
        lakeNakuruModal.classList.add('hidden');
        lakeNakuruModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove("overflow-hidden"); // Restore background scrolling
    }
};

// Event listener for opening the Lake Nakuru modal
openLakeNakuruModalButton.addEventListener('click', () => toggleLakeNakuruModal('open'));

// Event listener for closing the Lake Nakuru modal
closeLakeNakuruModalButton.addEventListener('click', () => toggleLakeNakuruModal('close'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === lakeNakuruModal) {
        toggleLakeNakuruModal('close');
    }
});

// Amboseli modal
const openAmboseliModalButton = document.getElementById('open-amboseli-modal');
const closeAmboseliModalButton = document.getElementById('close-amboseli-modal');
const amboseliModal = document.getElementById('amboseli-modal');

const toggleAmboseliModal = (action) => {
    if (action === 'open') {
        amboseliModal.classList.remove('hidden');
        amboseliModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
        amboseliModal.classList.add('hidden');
        amboseliModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove("overflow-hidden"); // Restore background scrolling
    }
};

// Event listener for opening the Amboseli modal
openAmboseliModalButton.addEventListener('click', () => toggleAmboseliModal('open'));

// Event listener for closing the Amboseli modal
closeAmboseliModalButton.addEventListener('click', () => toggleAmboseliModal('close'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === amboseliModal) {
        toggleAmboseliModal('close');
    }
});


// Naivasha modal
const openNaivashaModalButton = document.getElementById('open-naivasha-modal');
const closeNaivashaModalButton = document.getElementById('close-naivasha-modal');
const naivashaModal = document.getElementById('naivasha-modal');

const toggleNaivashaModal = (action) => {
    if (action === 'open') {
        naivashaModal.classList.remove('hidden');
        naivashaModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
        naivashaModal.classList.add('hidden');
        naivashaModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove("overflow-hidden"); // Restore background scrolling
    }
};

// Event listener for opening the Naivasha modal
openNaivashaModalButton.addEventListener('click', () => toggleNaivashaModal('open'));

// Event listener for closing the Naivasha modal
closeNaivashaModalButton.addEventListener('click', () => toggleNaivashaModal('close'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === naivashaModal) {
        toggleNaivashaModal('close');
    }
});

// Nairobi modal
const openNairobiModalButton = document.getElementById('open-nairobi-modal');
const closeNairobiModalButton = document.getElementById('close-nairobi-modal');
const nairobiModal = document.getElementById('nairobi-modal');

const toggleNairobiModal = (action) => {
    if (action === 'open') {
        nairobiModal.classList.remove('hidden');
        nairobiModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
        nairobiModal.classList.add('hidden');
        nairobiModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove("overflow-hidden"); // Restore background scrolling
    }
};

// Event listener for opening the Nairobi modal
openNairobiModalButton.addEventListener('click', () => toggleNairobiModal('open'));

// Event listener for closing the Nairobi modal
closeNairobiModalButton.addEventListener('click', () => toggleNairobiModal('close'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === nairobiModal) {
        toggleNairobiModal('close');
    }
});

// Mount Kenya modal
const openMountKenyaModalButton = document.getElementById('open-mount-kenya-modal');
const closeMountKenyaModalButton = document.getElementById('close-mount-kenya-modal');
const mountKenyaModal = document.getElementById('mount-kenya-modal');

const toggleMountKenyaModal = (action) => {
    if (action === 'open') {
        mountKenyaModal.classList.remove('hidden');
        mountKenyaModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
        mountKenyaModal.classList.add('hidden');
        mountKenyaModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove("overflow-hidden"); // Restore background scrolling
    }
};

// Event listener for opening the Mount Kenya modal
openMountKenyaModalButton.addEventListener('click', () => toggleMountKenyaModal('open'));

// Event listener for closing the Mount Kenya modal
closeMountKenyaModalButton.addEventListener('click', () => toggleMountKenyaModal('close'));

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === mountKenyaModal) {
        toggleMountKenyaModal('close');
    }
});