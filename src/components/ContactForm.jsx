import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log("Form Data:", formData);
  };

  // Validate form
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Invalid email format";

    if (!formData.phone.trim()) formErrors.phone = "Phone number is required";
    else if (!/^\d{10,}$/.test(formData.phone))
      formErrors.phone = "Phone must be at least 10 digits";

    if (!formData.message.trim()) formErrors.message = "Message is required";

    return formErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Message sent successfully!");
      console.log("Form Data:", formData);

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold">We're Here to Help</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          className="page-btn d-block w-100 text-black fw-bold"
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
