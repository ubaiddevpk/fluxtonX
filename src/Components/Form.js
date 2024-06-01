import React from 'react';

const Form = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Have Any Questions? Let's Answer Them</h1>
      <form className="max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input 
            type="text" 
            id="subject" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea 
            id="message" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-start">
          <button 
            type="submit" 
            className="bg-sky-500 mt-6 text-lg font-bold text-white px-6 py-3 rounded-bl-3xl rounded-tr-3xl border-2 border-sky-500 hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:transition hover:duration-500 hover:from-transparent hover:bg-transparent hover:to-sky-500"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
