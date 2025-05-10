import React from 'react';

interface ItemPillsProps {
  title?: string;
  items?: { name: string; url?: string }[];
  isClickable?: boolean;
  variant?: 'primary' | 'trailer';
  classType?: 'default' | 'no-hover';
  onClick?: (url: string) => void;
  children?: React.ReactNode;
}

const getPillClasses = (isClickable: boolean, classType: 'default' | 'no-hover' = 'default') => {
  const baseClasses =
    '4xl:px-6 4xl:py-[9px] px-4 lg:py-2 py-1 lg:rounded-md rounded-sm 4xl:text-lg xl:text-default md:text-sm text-[12px] transition-default tracking-wide';

  const interactiveClasses =
    classType === 'no-hover'
      ? 'bg-base/10 border border-transparent text-inherit'
      : 'bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua hover:text-neonAqua';

  return `${baseClasses} ${interactiveClasses} ${isClickable ? 'cursor-pointer' : ''}`;
};

const ItemPills = ({
  title,
  items = [],
  isClickable = false,
  variant = 'primary',
  classType = 'default',
  onClick,
  children,
}: ItemPillsProps) => {
  const renderPills = variant === 'primary';
  const renderTrailer = variant === 'trailer';

  return (
    <div className="flex flex-col 4xl:gap-5 xl:gap-4 gap-3">
      {title && <h2 className="4xl:text-xl sm:text-lg 4xl:font-bold font-medium text-left w-full">{title}</h2>}

      {children && <div>{children}</div>}

      {renderPills && items.length > 0 && (
        <div className="flex 4xl:gap-4 gap-2 flex-wrap">
          {items.map((item, index) => {
            const clickable = isClickable && !!item.url;
            const pillClasses = getPillClasses(clickable, classType);

            return (
              <div key={index} className="flex flex-col items-center">
                {clickable ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pillClasses}
                    onClick={() => onClick?.(item.url!)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <div className={pillClasses}>{item.name}</div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {renderTrailer && (
        <div className="w-full h-[562px] bg-white dark:bg-base/10 rounded-2xl shadow-sm" />
      )}
    </div>
  );
};

export default ItemPills;
