import  {useState} from 'react';
import './appointments.css';

const AppointmentsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault(); //previne reincarcarea paginii

    const appointmentData = {
        name,
        email,
        phone,
        appointmentDate,
    };

    try {
        const response = await fetch('http://localhost/your-php-endpoint.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData),
        });

        const result = await response.json();
        if (result.success) {
            alert('Programarea a fost realizata cu succes!');
            setName('');
            setEmail('');
            setPhone('');
            setAppointmentDate('');
        } else {
            alert('Eroare la procesarea programarii.');
        }
    } catch (error) {
        console.error('Eroare:', error);
        alert('Eroare la conectarea cu serverul.');
    }
 };

 return (
    <div className="container">
        <h2>Programeaza-ti consultatia!</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nume complet</label>
                <input 
                   type="text"
                   id="name"
                   className="form-control"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                />
            </div>

            <div className="form-group">
                <label htmlFor="appointmentDate">Data consultatiei</label>
                 <input 
                    type="datetime-local"
                    id="appointmentDate"
                    className="form-control"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                 />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                 <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                 />

            </div>

            <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                 <input
                    type="number"
                    id="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                 />
            </div>

            <button type="submit" className="btn btn-primary">Programeaza</button>
        </form>
    </div>
 );
};

export default AppointmentsForm;