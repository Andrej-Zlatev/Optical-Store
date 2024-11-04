import { SectionProps } from "@/app/types/section";

const AppSection: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section id={id} className={`py-16 `}>
      {children}
    </section>
  );
};

export default AppSection;
