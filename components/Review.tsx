type ReviewProps = {
  name: string;
  text: string;
};

function LetterAvatar({ name }: { name: string }) {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-semibold">
      {firstLetter}
    </div>
  );
}

export function Review({ name, text }: ReviewProps) {
  return (
    <div className="flex gap-4 p-4">
      <div>
        <LetterAvatar name={name} />
      </div>
      <div>
        <h3 className="font-display font-semibold">{name}</h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
