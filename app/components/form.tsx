'use client';
import React, { useState } from "react";

export const Form = () => {
    const [isMessageSent , setMessageSent] = useState<boolean>(false);
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const target = e.currentTarget;

        const  name = target.elements.namedItem('name') as HTMLInputElement;
        const  company = target.elements.namedItem('company') as HTMLInputElement;
        const email = target.elements.namedItem('email') as HTMLInputElement;
        const  message = target.elements.namedItem('message') as HTMLInputElement;
        const data ={
            name : name.value,
            company : company.value ,
            email : email.value , 
            message : message.value,
        }
        console.log(data);
        try{
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(!response.ok){
                throw new Error("HTTP error! status:" + response.status);   
            }
            setMessageSent(true);
            const responseData = await response.json();
            console.log(response);
        }catch(error:any){
            console.log('There was a problem with Fetch data'+error.message)
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit} className="bg-white p-10">
      <div className="mb-4">
        <label className="label-from " htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="input-from"
          required
          minLength={3}
          maxLength={200}
        />
      </div>
      <div className="mb-4">
        <label className="label-from " htmlFor="company">
          Company
        </label>
        <input
          id="company"
          type="text"
          name="company"
          className="input-from"
          minLength={3}
          maxLength={200}
        />
      </div>
      <div className="mb-4">
        <label className="label-from " htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
          className="input-from"
          required
          minLength={3}
          maxLength={200}
        />
      </div>
      <div className="mb-4">
        <label className="label-from " htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="input-from"
          required
          minLength={10}
          maxLength={900}
        />
      </div>
      <button
        type="submit"
        className="bg-blue rounded-lg text-white hover:text-blue hover:bg-white p-3"
      >
        Send Message
      </button>
    </form>
    {isMessageSent && <p>Message has been Sent</p>}
    </>
  );
};
