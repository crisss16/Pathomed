import  {useState} from 'react';
import './appointments.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        const response = await fetch('http://localhost:3001/programare', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData),
        });

        const contentType = response.headers.get('content-type');
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error('Eroare server: ${response.status} - ${errorText}');
        }

        if (contentType && contentType.includes('application/json')) {
        const result = await response.json();
        if (result.success) {
            toast.success('Programarea a fost salvată cu succes!');
            setName('');
            setEmail('');
            setPhone('');
            setAppointmentDate('');
        } else {
            toast.error(result.mesaj  || 'Data și ora sunt deja ocupate. Vă rugăm să alegeți o dată și o oră disponibile! Mulțumim!');           
        }
    } else {
        throw new Error('Serverul a returnat un răspuns neașteptat.');
    }
    } catch (error) {
        console.error('Eroare:', error);
        toast.error(error.message || 'A aparut o eroare!');
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

            <div>
                <ToastContainer />
            </div>

            <button type="submit" className="btn btn-primary">Programeaza</button>
        </form>
    </div>
 );
};

export default AppointmentsForm;