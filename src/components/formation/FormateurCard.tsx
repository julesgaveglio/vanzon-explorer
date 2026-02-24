interface FormateurCardProps {
  name: string;
  role: string;
  badge: string;
  badgeColor: "blue" | "amber";
  description: string;
  tags: string[];
  imageUrl?: string;
}

import Image from "next/image";

const badgeStyles = {
  blue: "!bg-blue-50 !border-blue-200/50 !text-blue-700",
  amber: "!bg-amber-50 !border-amber-200/50 !text-amber-700",
};

export default function FormateurCard({
  name,
  role,
  badge,
  badgeColor,
  description,
  tags,
  imageUrl,
}: FormateurCardProps) {
  return (
    <div className="glass-card overflow-hidden">
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-sky-50">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Photo de ${name}`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <span className="text-5xl block">👤</span>
              <p className="text-slate-400 text-xs mt-2">Photo {name} à ajouter</p>
            </div>
          </div>
        )}
      </div>

      {/* Corps */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <span className={`badge-glass text-xs ${badgeStyles[badgeColor]}`}>
            {badge}
          </span>
        </div>
        <p className="text-sm text-slate-500 font-medium mb-3">{role}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="badge-glass text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
