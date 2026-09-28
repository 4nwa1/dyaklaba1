import { useState } from "react";
import { add } from "./add";
import { sub } from "./sub";
import { div } from "./div";
import { pow } from "./pow";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [res, setRes] = useState("");
  const run = (f) => { const r = f(a, b); setRes(r); console.log(r); };
  return (
    <div>
      <h2>Меню</h2>
      <p>1. Ввести два числа:
        <input type="number" value={a} onChange={e => setA(+e.target.value)} />
        <input type="number" value={b} onChange={e => setB(+e.target.value)} />
      </p>
      <p><button onClick={() => run(add)}>2. Сложение</button></p>
      <p><button onClick={() => run(sub)}>3. Вычитание</button></p>
      <p><button onClick={() => run(div)}>4. Деление</button></p>
      <p><button onClick={() => run(pow)}>5. Возведение в степень</button></p>
      <p>Результат: {String(res)}</p>
    </div>
  );
}