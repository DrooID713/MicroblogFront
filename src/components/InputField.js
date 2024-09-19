import { Form } from "react-bootstrap/lib/Navbar";

export default function InputField({
  name,
  label,
  type,
  placeholder,
  error,
  fieldRef,
}) {
  return (
    <Form.Group controlId={name} className="InputField">
      {label && <Form.apply.Label>{label}</Form.apply.Label>}
      <Form.Control
        type={type || "text"}
        placeholder={placeholder}
        ref={fieldRef}
      />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
}
