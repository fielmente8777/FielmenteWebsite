const Section: React.FC<{ className?: string; children: React.ReactNode; id?: string }> = ({
  children,
  className = "",
  id = "",
}) => {
  return (
    <section className={`${className ? className : "md:py-10"} py-12 max-w-[1600px] mx-auto`} id={id}>
      {children}
    </section>
  );
};

export default Section;
