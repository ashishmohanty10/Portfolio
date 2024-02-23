export default function Contact() {
  return (
    <div className="py-16">
      <div className="container flex justify-center items-center">
        <form
          className="flex flex-col gap-5"
          action="https://formsubmit.co/ashishmohaty10@gmail.com"
          method="POST"
        >
          <input
            name="name"
            className="w-[300px] bg-[#1A1A1A] p-2 focus-within:ring-1 focus-within:ring-slate-400 rounded-lg text-white font-medium "
            placeholder="Name"
          />
          <input
            type="email"
            required
            name="email"
            className="-[300px] bg-[#1A1A1A] p-2 focus-within:ring-1 focus-within:ring-slate-400 rounded-lg text-white font-medium"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-[300px] bg-[#1A1A1A] p-2 focus-within:ring-1 focus-within:ring-slate-400 rounded-lg text-white font-medium"
          ></textarea>

          <button
            type="submit"
            className="text-white py-3 px-4 rounded-3xl border   text-sm font-bold hover:bg-white hover:text-slate-950 duration-100"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
