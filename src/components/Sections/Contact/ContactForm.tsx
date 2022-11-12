import { FC } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: FC = () => {
  const [state, handleSubmit] = useForm("xwkzwzek");
  if (state.succeeded) {
    return (
      <p className="prose leading-6 text-neutral-300">
        Thanks for reaching out &#128512;
      </p>
    );
  }
  const inputClasses =
    "bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm";

  return (
    <form
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      onSubmit={handleSubmit}
    >
      <input
        className={inputClasses}
        name="name"
        placeholder="Name"
        required
        type="text"
      />

      <input
        className={inputClasses}
        id="email"
        type="email"
        placeholder="Email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className={inputClasses}
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={state.submitting}
      >
        Send Message
      </button>
    </form>
  );
};
ContactForm.displayName = "ContactForm";
export default ContactForm;
