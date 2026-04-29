import SimplePage from "../components/shared/SimplePage";

const About = () => {
  return (
    <SimplePage
      eyebrow="About Us"
      title="A legacy rooted in service, discipline, and Ayurvedic excellence."
      description="Babu Yugraj Singh Ayurvedic Medical College blends heritage, rigorous education, and student-centered growth to prepare future practitioners with both knowledge and character."
      highlights={[
        "A learning environment that respects classical Ayurvedic foundations while embracing relevant modern medical exposure.",
        "A campus culture shaped around mentorship, professionalism, and community impact for every student.",
        "An institutional vision focused on producing compassionate graduates ready for clinical, academic, and public health roles.",
      ]}
    />
  );
};

export default About;
