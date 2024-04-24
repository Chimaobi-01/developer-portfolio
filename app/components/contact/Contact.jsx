import './contact.css'


const Contact = () => {
  return (
    <section id='contact' aria-labelledby='contact_heading' className='px-16' >
        <h2 
          id='contact_heading' 
          className='font-semibold text-4xl leading-8 py-5 px-8 w-fit mx-auto border-b-4 '
          >
          Contact
        </h2>
       <form action="" className='contact_grid mt-14 '>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="Name" id="name" />
          
          <label htmlFor="email">Email address</label>
          <input type="text" name="Email" id="email" />

        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="Message" id="message" cols="30" rows="5"></textarea>

          <button type="submit" className='bg-black text-white rounded-lg text-lg leading-8 p-2 self-end justify-self-end w-[30%] mt-6'>Submit</button>
        </div>
       </form>
    </section>
  )
}

export default Contact