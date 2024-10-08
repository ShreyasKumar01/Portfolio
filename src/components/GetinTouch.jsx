import React from 'react'

const GetinTouch = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d13a7515-a8d0-450c-81e8-a70b075dfaec");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Form submitted successfully !!");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    <div className="border-t border-neutral-900">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white pb-8 pt-4">Get in Touch</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:gap-24 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-semibold text-pink-300 mb-6">Let's talk</h3>
              <p className="text-gray-300 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam error nulla fuga tempore et quas, accusamus eveniet, perspiciatis velit maiores atque ducimus obcaecati exercitationem? Doloremque quod, atque, debitis ab aspernatur, mollitia expedita officiis iste consequuntur cumque vero molestiae saepe fuga? Ab quaerat rerum quae, perferendis eaque at fugiat illo hic?
              </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm py-2 px-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm py-2 px-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Write your message here
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm py-2 px-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Submit now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GetinTouch;