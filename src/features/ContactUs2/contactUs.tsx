import React from 'react';
import { Figtree } from 'next/font/google';
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});
const inputFields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'phone', label: 'Phone', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
];
const ContactUs: React.FC = () => {
  return (
    <>
      <section
        className={`${figtree.className} relative bg-cover bg-center bg-no-repeat py-20 px-6`}
        style={{ backgroundImage: "url('/assets/contactUs-image.svg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2 className="text-[40px] md:text-4xl font-bold mb-2">Contact Us</h2>
          <p className="text-[15px] font-[400] md:text-base mb-6 max-w-5xl">
            Etiam sit amet orci pharetra, venenatis ante vehicula, gravida
            sapien. Fusce eleifend vulputate nibh, non cursus augue placerat
            pellentesque. Sed venenatis risus nec felis mollis.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 text-[#050B20]">
            {inputFields.map((field, index) => (
              <div key={index} className="relative w-full">
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required
                  className="peer border rounded-[10px] border-gray-300 px-4 pt-6 pb-4 w-full placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#818181]"
                  placeholder={field.label}
                />
                <label
                  htmlFor={field.name}
                  className="absolute left-4 top-2 text-sm text-[#818181] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#818181]"
                >
                  {field.label}
                </label>
              </div>
            ))}
            <div className="relative md:col-span-2 w-full">
              <textarea
                id="message"
                name="message"
                required
                className="peer border rounded-[10px] border-gray-300 px-4 pt-6 pb-2 w-full h-32 resize-none placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-[#818181]"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#818181]"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#FF0000] hover:bg-[#FF0000] text-white text-[15px] font-[500] py-4 px-10 rounded-[16px] w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
