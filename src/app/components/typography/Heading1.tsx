import { TypographyProps } from "@/app/types/typography";

const Heading1 = ({ children, color = "text-black" }: TypographyProps) => {
  return (
    <h1
      className={`text-[42px] leading-[58px] tracking-[2px] font-semibold uppercase font-manrope ${color}`}
    >
      {children}
    </h1>
  );
};

export default Heading1;
