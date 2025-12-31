import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Thanks! We’ll contact you shortly.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
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
        disabled={loading}
        className="w-full py-5 bg-white text-black font-extrabold rounded-2xl hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
