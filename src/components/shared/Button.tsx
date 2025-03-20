import { IoLogoGithub } from "react-icons/io";

interface ButtonProps {
  colorType: "primary" | "secondary";
  hasIcon?: boolean;
}

const Button = ({ colorType = "primary" }: ButtonProps) => {
  const baseStyles =
    "w-fit flex justify-center items-center 5xl:gap-2 gap-1 3xl:px-8 sm:px-6 px-4 sm:py-[14px] py-2 5xl:py-[16px] sm:rounded-md rounded-sm cursor-pointer transition-default";
  const colorStyle = {
    primary:
      "bg-midnightNavy text-neonAqua active:bg-neonAqua active:text-main hover:bg-neonAqua hover:text-main focus:bg-neonAqua focus:text-main transition-default",
    secondary:
      "bg-neonAqua border border-neonAqua text-main active:bg-transparent active:text-neonAqua focus:bg-transparent focus:text-neonAqua transition-default",
  };
  return (
    <div className={`${baseStyles} ${colorStyle[colorType]}`}>
      <IoLogoGithub className="5xl:text-[22px] sm:text-xl text-lg !mb-[2px]" />
      <p className="whitespace-nowrap font-bold tracking-wide 5xl:text-[17px] sm:text-[16px] text-sm">
        Visit Github
      </p>
    </div>
  );
};

export default Button;
