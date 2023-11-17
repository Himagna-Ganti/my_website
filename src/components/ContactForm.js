import React from "react";

export default function ContactForm() {
  /*
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "48852d54-44e9-4e72-b5fe-5966570f4436");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };*/

  return (
    <div id="contactme" className="flex justify-center">
      <div className=" w-[800px]">
        <div className="flex  justify-center   ">
          <h2 className="text-code text-[40px] mb-3">Contact Us</h2>
        </div>
        <div className=" px-[20px]">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="48852d54-44e9-4e72-b5fe-5966570f4436"
            ></input>
            <div class="mb-4">
              <label
                for="name"
                className="block text-md font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <input type="hidden" name="from_name" value="My_Website"></input>
            </div>
            <div class="mb-4">
              <label
                for="email"
                className="block text-md font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                className="block text-md font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full min-h-[20px]  border rounded-md"
              ></textarea>
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-code text-white font-bold py-2 px-2 rounded-md w-[130px] hover:bg-white hover:text-code transition-colors duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
