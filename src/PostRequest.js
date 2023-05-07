import { useState } from 'react';
import axios from 'axios';
const url = 'https://100085.pythonanywhere.com/api/editor-component/';

const PostRequest = () => {
  const [toName, settoName] = useState('');
  const [toEmail, settoEmail] = useState('');
  const [fromName, setfromName] = useState('');
  const [fromEmail, setfromEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [email_body, setEmail_body] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      toName: toName,
      toEmail: toEmail,
      fromName: fromName,
      fromEmail: fromEmail,
      subject: subject,
      email_body: email_body,
    };
    try {
      const resp = await axios.post(url, formData)
       console.log(resp.data)
    } catch (error) {
      console.log(error.response)
    }
  };

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            toName
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={toName}
            onChange={(e) => settoName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            fromName
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={fromName}
            onChange={(e) => setfromName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            toemail
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={toEmail}
            onChange={(e) => settoEmail(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            fromEmail
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={fromEmail}
            onChange={(e) => setfromEmail(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            subject
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
          email_body
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email_body}
            onChange={(e) => setEmail_body(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;

/*
// create div element for form container
        // const formContainer = document.createElement('div');
        // buttonField.style.maxWidth = '500px';
        // buttonField.style.height = '10%';
        buttonField.style.margin = "0 auto";
        buttonField.style.padding = "10%";
        buttonField.style.border = "1px solid #0000";

        // create form element
        const form = document.createElement("form");
        form.style.display = "flex";
        form.style.flexDirection = "column";
        form.style.maxWidth = "500px";

        // create first row of input fields
        const firstRow = document.createElement("div");
        firstRow.style.display = "flex";
        firstRow.style.justifyContent = "space-between";
        firstRow.style.marginBottom = "10px";

        // create first input field for name
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "name";
        nameInput.placeholder = "To Name";
        nameInput.style.width = "48%";
        firstRow.appendChild(nameInput);

        // create second input field for email
        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.name = "email";
        emailInput.placeholder = "Email";
        emailInput.style.width = "48%";
        firstRow.appendChild(emailInput);

        // add first row to form
        form.appendChild(firstRow);

        // create second row of input fields
        const secondRow = document.createElement("div");
        secondRow.style.display = "flex";
        secondRow.style.justifyContent = "space-between";
        secondRow.style.marginBottom = "10px";

        // create third input field for subject
        const nameInput1 = document.createElement("input");
        nameInput1.type = "text";
        nameInput1.name = "name";
        nameInput1.placeholder = "From Name";
        nameInput1.style.width = "48%";
        secondRow.appendChild(nameInput1);

        // create fourth input field for second message
        const emailInput1 = document.createElement("input");
        emailInput1.name = "email";
        emailInput1.placeholder = "Email";
        emailInput1.style.width = "48%";
        secondRow.appendChild(emailInput1);

        // add second row to form
        form.appendChild(secondRow);

        // create third input field for subject
        const subjectInput = document.createElement("input");
        subjectInput.type = "text";
        subjectInput.name = "subject";
        subjectInput.placeholder = "Subject";
        subjectInput.style.width = "100%";
        subjectInput.style.marginBottom = "10px";
        form.appendChild(subjectInput);

        // create textarea for message field for message
        const messageInput = document.createElement("textarea");
        messageInput.name = "message";
        messageInput.placeholder = "Message";
        messageInput.style.marginBottom = "10px";
        form.appendChild(messageInput);

        // create submit button
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Send";
        submitButton.style.backgroundColor = "#007bff";
        submitButton.style.color = "#fff";
        submitButton.style.border = "none";
        submitButton.style.padding = "10px 20px";
        // add onClick event listener
        submitButton.addEventListener("click", (e) => {
          // prevent default form submission
          e.preventDefault();
          const formData = {
            name: nameInput.value,
            email: emailInput.value,
            name1: nameInput1.value,
            email1: emailInput1.value,
            subject: subjectInput.value,
            message: messageInput.value,
          };
          alert("button clicked");
          console.log(formData); // log form data to console
        });
        form.appendChild(submitButton);

        // add form to the form container
        buttonField.appendChild(form);

        // add form container to the document
        document.body.appendChild(buttonField);
*/