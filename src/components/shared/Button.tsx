import { IoLogoGithub } from "react-icons/io";

interface ButtonProps {
  colorType: "primary" | "secondary";
  hasIcon?: boolean;
  label?: string;
  customClass?: string;  // Add className prop
}

const Button = ({ colorType = "primary", label = "Visit Github", hasIcon = true, customClass = "" }: ButtonProps) => {
  const baseStyles =
    "flex justify-center items-center 5xl:gap-2 gap-[6px] sm:px-5 px-4 sm:py-[9px] 5xl:py-[13px] py-2 rounded-sm cursor-pointer transition-default text-sm";
  const colorStyle = {
    primary:
      "bg-midnightNavy text-neonAqua active:bg-neonAqua active:text-main hover:bg-neonAqua hover:text-main focus:bg-neonAqua focus:text-main transition-default",
    secondary:
      "bg-neonAqua border border-neonAqua text-main hover:bg-transparent hover:text-neonAqua active:bg-transparent active:text-neonAqua focus:bg-transparent focus:text-neonAqua transition-default",
  };

  return (
    <div className={`${baseStyles} ${colorStyle[colorType]} ${customClass}`}> 
      {hasIcon && <IoLogoGithub className="sm:text-md text-lg !mb-[2px]" />}
      <p className="whitespace-nowrap font-semibold tracking-wide capitalize">
        {label}
      </p>
    </div>
  );
};

export default Button;
