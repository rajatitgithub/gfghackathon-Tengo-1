document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    fetch('/api/doctors', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            search: searchInput
        }
    })
    .then(response => response.json())
    .then(data => {
        const doctorList = document.getElementById('doctor-list');
        doctorList.innerHTML = '';
        data.forEach(doctor => {
            const doctorListItem = document.createElement('li');
            doctorListItem.textContent = doctor.name;
            doctorList.appendChild(doctorListItem);
        });
    })
    .catch(error => console.error(error));
});

document.getElementById('doctor-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const doctorId = event.target.dataset.doctorId;
        fetch(`/api/doctors/${doctorId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            const doctorInfo = document.getElementById('doctor-info');
            doctorInfo.innerHTML = '';
            const doctorProfile = `
                <h2>${data.name}</h2>
                <p>${data.specialty}</p>
                <p>${data.location}</p>
                <p>${data.availability}</p>
            `;
            doctorInfo.innerHTML = doctorProfile;
        })
        .catch(error => console.error(error));
    }
});

document.getElementById('book-appointment').addEventListener('click', function() {
    fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            doctorId: 1, 
            patientName: 'John Doe',
            appointmentDate: '2023-03-15'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
});

document.getElementById('rating-form').addEventListener