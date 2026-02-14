// Get modal elements
const modal = document.getElementById('reservationModal');
const reservationBtn = document.getElementById('reservationBtn');
const closeBtn = document.getElementById('closeModal');
const reservationForm = document.getElementById('reservationForm');

// Open modal when clicking reservation button
reservationBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close modal when clicking X button
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle form submission
reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        eventDate: document.getElementById('eventDate').value,
        eventTime: document.getElementById('eventTime').value,
        eventType: document.getElementById('eventType').value,
        guestCount: document.getElementById('guestCount').value,
        specialRequests: document.getElementById('specialRequests').value
    };

    // Log the data (in production, you would send this to a server)
    console.log('Reservation Request:', formData);

    // Show success message
    alert('תודה רבה! הבקשה שלך התקבלה ונחזור אליך בהקדם האפשרי.');

    // Reset form and close modal
    reservationForm.reset();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Set minimum date to today for event date input
document.addEventListener('DOMContentLoaded', function() {
    const eventDateInput = document.getElementById('eventDate');
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
});
