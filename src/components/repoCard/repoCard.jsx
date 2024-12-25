import { Chip } from '@mui/material';
import size from '../../assets/size.svg';

export default function RepoCard(repo) {
  return (
    <div className="whitespace-nowrap">
      {/* Header Section */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <h3 className="py-1 text-lg font-normal text-[#181D27] sm:text-xl">
          {repo.name}
        </h3>
        <Chip
          label={repo.visibility}
          size="small"
          sx={{
            fontSize: '0.65rem', // Smaller font size for mobile
            backgroundColor: '#EFF8FF',
            width: 50, // Decreased width for mobile
            color: '#175CD3',
            fill: 'green',
            borderWidth: '1px',
            borderColor: '#B2DDFF',
            borderStyle: 'solid',
          }}
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-wrap gap-3 sm:gap-6 mt-1 sm:mt-2">
        {/* Type */}
        <span className="flex items-center gap-1 text-xs text-[#414651] sm:text-sm">
          {repo.type}
          <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500 sm:h-2 sm:w-2"></span>
        </span>

        {/* Size */}
        <span className="flex items-center gap-1 text-xs text-[#414651] sm:gap-2 sm:text-sm">
          <img src={size} alt="Size Icon" className="h-3 w-3 sm:h-4 sm:w-4" />
          {repo.size}
        </span>

        {/* Updated At */}
        <span className="text-xs text-[#414651] sm:text-sm">
          Updated {repo.updatedAt}
        </span>
      </div>
    </div>
  );
}
