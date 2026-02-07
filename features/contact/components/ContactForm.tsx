 "use client";

import { useForm } from "@formspree/react";
import Button from "../../../components/ui/Button";
import Textarea from "../../../components/ui/Textarea";
import TextInput from "../../../components/ui/TextInput";
import ValidationErrorText from "./ValidationErrorText";

const formspreeId = "xovpkblb";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(formspreeId);

  if (state.succeeded) {
    return <p>thanks for the message!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="name">full name:</label>
      <TextInput id="name" name="name" placeholder="enter your full name" />
      <ValidationErrorText
        prefix="Full name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">email:</label>
      <TextInput
        id="email"
        type="email"
        name="email"
        placeholder="you@company.com"
      />
      <ValidationErrorText prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">message:</label>
      <Textarea
        id="message"
        name="message"
        placeholder="leave me a message..."
      />
      <ValidationErrorText
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting}>
        submit
      </Button>
    </form>
  );
}
