interface ItemPillsProps {
  title?: string;
  items: { name: string; url?: string }[];
  isClickable?: boolean;
  variant?: 'primary' | 'trailer';
  onClick?: (url: string) => void;
}

const getPillClasses = (isClickable: boolean) => {
  const baseClasses = 'px-6 py-[9px] rounded-md text-lg transition-default';
  const interactiveClasses =
    'bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua hover:text-neonAqua';

  return `${baseClasses} ${interactiveClasses} ${isClickable ? 'cursor-pointer' : ''}`;
};

const ItemPills = ({
  title,
  items,
  isClickable = false,
  variant = 'primary',
  onClick,
}: ItemPillsProps) => {
  const renderPills = variant === 'primary';
  const renderTrailer = variant === 'trailer';

  return (
    <div className="flex flex-col gap-5">
      {title && <p className="text-xl font-bold">{title}</p>}

      {renderPills && (
        <div className="flex gap-4 flex-wrap">
          {items.map((item, index) => {
            const clickable = isClickable && !!item.url;
            const pillClasses = getPillClasses(clickable);

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
