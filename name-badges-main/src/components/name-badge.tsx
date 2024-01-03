// const addTwo = (n: number): number => n + 2;
type NameBadgeProps = {
  name: string;
  greetings?: string;
};
const NameBadge = ({ name, greetings }: NameBadgeProps): JSX.Element => {
  // if (Math.random()) return null;
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greetings}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name.toUpperCase()}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
