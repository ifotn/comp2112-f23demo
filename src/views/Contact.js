import React, { useState, useEffect } from "react";

function Contact() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'Contact';
    }, []);

    // use State hook to track the current value of the user's message
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState(null);

    const handleChange = (event) => {
        setMessage(event.target.value);
        if (message === '') {
            setErrMessage('Message is required');
        }
        else {
            setErrMessage(null);
        }
    }

    const showMessageAlert = () => {
        if (message === '') {
            setErrMessage('Message is required');
        }
        else {
            alert(message);
        }
    }

    return (
        <section className="container">
            <h1>Contact Us</h1>
            <p>tel: 705.728.1968</p>
            <textarea placeholder="Send us a message" onChange={handleChange}></textarea>
            <div id="errMessage" className="text-danger">{errMessage}</div>
            <div className="form-group">
                <button className="btn btn-info" onClick={showMessageAlert}>Submit</button>
            </div>
            <p>Your message is: {message}</p>
        </section>
    );
}

export default Contact;