import React, { useState } from "react";
import Button from "../../Component/Atoms/Button/Button";
import Input from "../../Component/Atoms/InputFields/Inputfield";
import Image from "../../Component/Atoms/Image/Image";
import useToast from "../../Component/ToastProvider/useToast";

export default function Login() {
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);
  const toast = useToast();
  return (
    <>
      {/* <Button onClick={() => console.log("Clicked!")}>Click Me</Button>

      <Button variant="secondary" size="sm">
        Cancel
      </Button>

      <Button variant="danger" size="lg" disabled>
        Delete
      </Button>

      <Button variant="primary" size="md" loading={false}>
        Submit
      </Button>

      <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        helperText="We'll never share your email."
        error={!email.includes("@") && email.length > 0 ? "Invalid email" : ""}
        fullWidth
      />

      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onBlur={() => setTouched(true)}
        placeholder="Enter 10-digit phone number"
        error={
          phone.length > 0 && !isValidPhone(phone)
            ? "Phone must be exactly 10 digits"
            : ""
        }
        fullWidth
      /> */}

      {/* <button onClick={() => toast.success("Saved successfully!", 4000)}>
        Show Success Toast
      </button> */}

      {/* <Image
        src="https://example.com/myimage.jpg"
        alt="Product"
        width={300}
        height={200}
        // fallback="/fallback.png"
        rounded
        shadow
      /> */}
    </>
  );
}
