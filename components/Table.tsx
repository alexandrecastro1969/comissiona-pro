interface TableProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Table({ children, className = '' }: TableProps) {
    return (
      <div className="w-full overflow-x-auto relative mb-6">
        {/* Indicador de scroll */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-gray-900 to-transparent w-8 h-8 md:hidden flex items-center justify-center text-gray-400">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
        
        {/* Tabela com scroll horizontal */}
        <div className="min-w-full overflow-x-auto">
          <table className={`min-w-full border-collapse ${className}`}>
            {children}
          </table>
        </div>
      </div>
    );
  }