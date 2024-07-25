const Section: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return (
    <section className={`${className ? className : "lg:py-14"} py-9`}>
      {children}
    </section>
  );
};

export default Section;
