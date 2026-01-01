interface WaveDividerProps {
  variant?: 'primary' | 'accent' | 'subtle';
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ variant = 'primary', flip = false, className = '' }: WaveDividerProps) => {
  const gradients = {
    primary: 'from-primary/10 via-primary/5 to-transparent',
    accent: 'from-accent/10 via-accent/5 to-transparent',
    subtle: 'from-muted/20 via-muted/10 to-transparent',
  };

  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      {/* Curved gradient divider */}
      <div className={`h-20 md:h-28 bg-gradient-to-b ${gradients[variant]}`}>
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          {/* Smooth curve */}
          <path 
            d="M0,100 Q720,0 1440,100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            className={variant === 'primary' ? 'text-primary/20' : variant === 'accent' ? 'text-accent/20' : 'text-muted/20'}
          />
        </svg>
      </div>
    </div>
  );
};

export default WaveDivider;

