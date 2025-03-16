import { IoLogoGithub } from "react-icons/io";

interface ButtonProps {
  colorType: "primary" | "secondary";
  hasIcon?: boolean;
}

const Button = ({ colorType = "primary" }: ButtonProps) => {
  const baseStyles =
    "w-fit flex justify-center items-center gap-1 3xl:px-8 px-6 py-[14px] rounded-md cursor-pointer";
  const colorStyle = {
    primary: "bg-midnightNavy text-neonAqua active:bg-neonAqua active:text-main hover:bg-neonAqua hover:text-main focus:bg-neonAqua focus:text-main transition-default",
    secondary: "bg-neonAqua border border-neonAqua text-main active:bg-transparent active:text-neonAqua focus:bg-transparent focus:text-neonAqua transition-default",
  };
  return (
    <div className={`${baseStyles} ${colorStyle[colorType]}`}>
      <IoLogoGithub size={20} className="!mb-[2px]"/>
      <p className="whitespace-nowrap font-semibold tracking-wide">
        Visit Github
      </p>
    </div>
  );
};

export default Button;
