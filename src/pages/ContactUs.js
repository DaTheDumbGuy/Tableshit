import React, { useState, useEffect, useRef } from 'react'

let retrieveData = localStorage.getItem('contactData') ? JSON.parse(localStorage.getItem('contactData')) : [];
function ContactUs() {
    let fNameRef = useRef(null);
    let lNameRef = useRef(null);
    let emailRef = useRef(null);
    let msgRef = useRef(null);

    let [ID, setID] = useState(Date.now());
    let [allContacts, setAllContacts] = useState(retrieveData);

    function HandleSubmit(event) {
        event.preventDefault();
        let data = {
            ID: ID,
            firstName: fNameRef.current.value,
            lastName: lNameRef.current.value,
            email: emailRef.current.value,
            msg: msgRef.current.value,

        }
        setAllContacts([...allContacts, data]);
        alert(JSON.stringify(allContacts));
    }
    useEffect(() => {
        localStorage.setItem('contactData', JSON.stringify(allContacts));
    }, [allContacts]);
    return (
        <div>
            <form action="" onSubmit={HandleSubmit}>

                <label for="fName">First Name</label>
                <input type="text" name='fName' ref={fNameRef} id="fName" /><br />
                <label for="lName">Last Name</label>
                <input type="text" name='lName' ref={lNameRef} id="lName" /><br />
                <label for="email" >Email</label>
                <input type="email" name='email' ref={emailRef} id="email" /><br />
                <textarea rows="5" cols="30" ref={msgRef}></textarea><br />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactUs