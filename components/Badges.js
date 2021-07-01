const badgeItems = [
  {
    title: 'Pets',
    status: true,
  },
  {
    title: 'Kids',
    status: true,
  },
  {
    title: 'Smoking',
    status: false,
  },
  { title: 'Parties', status: false },
];

export default function Badges() {
  return (
    <div className="mt-2 flex items-center space-x-4">
      {badgeItems.map((badge) => {
        return (
          <span
            key={badge.title}
            className={`text-xs rounded py-0.5 px-2 text-center ${
              badge.status === true
                ? 'bg-green-100 text-green-900'
                : 'bg-red-100 text-red-900 line-through '
            }`}
          >
            {badge.title}
          </span>
        );
      })}
    </div>
  );
}
