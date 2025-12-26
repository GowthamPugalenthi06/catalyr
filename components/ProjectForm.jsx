import { useState } from "react";
import { toast } from "sonner";

import DarkSelect from "./DarkSelect";


const ProjectForm = () => {
  const [step, setStep] = useState(1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", { method: "POST", body: formData });

      await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          projectType: formData.get("projectType"),
        }),
      });

      toast.success("Thanks! We'll contact you shortly.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      {/* REQUIRED FOR NETLIFY */}
      <input type="hidden" name="form-name" value="contact" />

      {/* STEP 1: Full Name */}
      {step === 1 && (
        <>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Full Name
            </label>
            <input
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
              placeholder="Your name"
            />
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full py-5 bg-white text-black font-extrabold rounded-2xl"
          >
            Next
          </button>
        </>
      )}

      {/* STEP 2: Email */}
      {step === 2 && (
        <>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
              placeholder="name@company.com"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/2 py-5 border border-white/20 rounded-2xl"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="w-1/2 py-5 bg-white text-black font-extrabold rounded-2xl"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* STEP 3: Project Type */}
      {step === 3 && (
        <>
          <DarkSelect
            label="Project Type"
            name="project_type"
            required
            options={[
              "Web Application",
              "Mobile App",
              "MVP",
              "AI Integration",
              "Automation / Internal Tool",
            ]}
          />

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-1/2 py-5 border border-white/20 rounded-2xl"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="w-1/2 py-5 bg-white text-black font-extrabold rounded-2xl"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* STEP 4: Project Overview */}
      {step === 4 && (
        <>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Project Overview
            </label>
            <textarea
              name="overview"
              rows={4}
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
              placeholder="Briefly describe your idea"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="w-1/2 py-5 border border-white/20 rounded-2xl"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(5)}
              className="w-1/2 py-5 bg-white text-black font-extrabold rounded-2xl"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* STEP 5: Timeline & Budget */}
      {step === 5 && (
        <>
          <DarkSelect
            label="Timeline"
            name="timeline"
            options={["ASAP", "1–3 months", "3–6 months"]}
          />

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Budget Range (optional)
            </label>
            <input
              name="budget"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
              placeholder="₹ / $"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(4)}
              className="w-1/2 py-5 border border-white/20 rounded-2xl"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-1/2 py-5 bg-white text-black font-extrabold rounded-2xl"
            >
              Send Request
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default ProjectForm;
