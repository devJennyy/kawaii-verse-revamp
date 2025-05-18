/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoLogoGithub } from "react-icons/io";

interface ButtonProps {
  colorType: "primary" | "secondary" | "tertiary";
  hasIcon?: boolean;
  label?: string;
  customClass?: string;
  onClick?: any;
  href?: string;
  isStatic?: boolean;
}

const Button = ({
  colorType = "primary",
  label = "Visit Github",
  hasIcon = true,
  customClass = "",
  onClick,
  href,
  isStatic = false,
}: ButtonProps) => {
  const baseStyles =
    "flex justify-center items-center 5xl:gap-2 gap-[6px] sm:px-5 px-4 sm:py-[9px] 5xl:py-[13px] py-2 rounded-sm transition-default text-sm cursor-pointer";

  const colorStyle = {
    primary:
      "capitalize font-semibold bg-midnightNavy text-neonAqua active:bg-neonAqua active:text-main hover:bg-neonAqua hover:text-main focus:bg-neonAqua focus:text-main transition-default",
    secondary:
      "capitalize font-semibold bg-neonAqua border border-neonAqua text-main hover:bg-transparent hover:text-neonAqua active:bg-transparent active:text-neonAqua focus:bg-transparent focus:text-neonAqua transition-default",
    tertiary:
      "flex justify-center items-center border border-neonAqua rounded-full",
  };

  const appliedStyles =
    colorType === "tertiary"
      ? `${colorStyle[colorType]} ${customClass}`
      : `${baseStyles} ${colorStyle[colorType]} ${customClass}`;

  if (isStatic) {
    return (
      <div className={appliedStyles} aria-disabled="true" tabIndex={-1}>
        {hasIcon && <IoLogoGithub className="sm:text-md text-lg !mb-[2px]" />}
        <p className="whitespace-nowrap tracking-wide">{label}</p>
      </div>
    );
  }

  return (
    <a href={href} className={appliedStyles} onClick={onClick}>
      {hasIcon && <IoLogoGithub className="sm:text-md text-lg !mb-[2px]" />}
      <p className="whitespace-nowrap tracking-wide">{label}</p>
    </a>
  );
};

export default Button;
