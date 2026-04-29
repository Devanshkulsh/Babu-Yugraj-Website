import SimplePage from "../components/shared/SimplePage";

const Contact = () => {
  return (
    <SimplePage
      eyebrow="Contact"
      title="Connect with the college for admissions, campus visits, and support."
      description="Whether you are a student, parent, or visitor, we want the contact experience to feel direct, welcoming, and easy to act on."
      highlights={[
        "Reach the college for admissions-related questions, campus coordination, or general institutional information.",
        "Use our listed phone numbers, location details, and visit options to connect through the channel that suits you best.",
        "A responsive communication flow helps families and students move from inquiry to action with less friction.",
      ]}
    />
  );
};

export default Contact;
