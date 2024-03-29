import { ReactNode } from "react";
import { PiArrowLineUpRight } from "react-icons/pi";

type AboutItemProps = {
  title: string;
  content: string;
  href: string;
  icon: ReactNode;
};

export const AboutItem: React.FC<AboutItemProps> = ({
  title,
  content,
  href,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-1 lg:gap-3">
      <div className="flex items-center gap-1">
        {icon}
        <h3 className="text-xs lg:text-[20px] text-ash-green font-semilight">
          {title}
        </h3>
      </div>
      <a
        className="flex justify-between items-center bg-black/10 p-2 lg:py-3"
        href={href}
        target="_blank"
      >
        <span className="text-[10px] lg:text-lg text-black/50 font-semilight">
          {content}
        </span>
        <PiArrowLineUpRight
          color="#00000080"
          className="w-4 h-4 lg:w-6 lg:h-6"
          strokeWidth={4}
        />
      </a>
    </div>
  );
};
