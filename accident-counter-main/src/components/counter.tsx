import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [draftCount, setDraftCout] = useState(count);

  // useEffect(() => {
  //   setDraftCout(count);
  // }, [count]);

  // useEffect(() => {
  //   count;
  // }, [count]);

  /**
   * https://fem-react-typescript.vercel.app/useState,%20a%20solution.md
   * checkout further explanation for useEffect
   */

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={(e) => setCount(count - 1)}>➖ Decrement</button>
        <button>🔁 Reset</button>
        <button onClick={(e) => setCount(count + 1)}>➕ Increment</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(draftCount);
          }}
        >
          <input
            onChange={(e) => setDraftCout(e.target.valueAsNumber)}
            type="number"
            value={draftCount}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
