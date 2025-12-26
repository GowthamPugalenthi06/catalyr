import { toast } from "sonner";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams(formData).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData,
      });

      toast.success("Thanks! We’ll get back to you shortly.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
      
    >
      {/* REQUIRED FOR NETLIFY */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot field (anti-spam) */}
      <input type="hidden" name="bot-field" />

      {/* Full Name */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="name@email.com"
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us briefly about your project"
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-5 bg-white text-black font-extrabold rounded-2xl hover:opacity-90 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
