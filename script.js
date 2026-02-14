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

    // Get submit button to show loading state
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'שולח...';
    submitBtn.disabled = true;

    // Prepare template parameters for EmailJS
    const templateParams = {
        from_name: document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value,
        reply_to: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        event_date: document.getElementById('eventDate').value,
        event_time: document.getElementById('eventTime').value,
        event_type: getEventTypeLabel(document.getElementById('eventType').value),
        guest_count: document.getElementById('guestCount').value,
        special_requests: document.getElementById('specialRequests').value || 'אין בקשות מיוחדות'
    };

    // Send email via EmailJS
    emailjs.send('service_7v1e5s2', 'template_auyzq1c', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            alert('תודה רבה! הבקשה שלך התקבלה ונחזור אליך בהקדם האפשרי.');

            // Reset form and close modal
            reservationForm.reset();
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';

            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }, function(error) {
            console.log('FAILED...', error);

            // Show error message
            alert('אופס! משהו השתבש. אנא נסה שוב מאוחר יותר או צור איתנו קשר בטלפון.');

            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
});

// Helper function to convert event type value to Hebrew label
function getEventTypeLabel(value) {
    const eventTypes = {
        'birthday': 'יום הולדת',
        'wedding': 'חתונה',
        'corporate': 'אירוע עסקי',
        'bar-mitzvah': 'בר/בת מצווה',
        'other': 'אחר'
    };
    return eventTypes[value] || value;
}

// Set minimum date to today for event date input
document.addEventListener('DOMContentLoaded', function() {
    const eventDateInput = document.getElementById('eventDate');
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
});
