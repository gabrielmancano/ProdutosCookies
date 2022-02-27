import { useState } from 'react';
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [type, setType] = useState("cookies");

  return (
   <>
    <Main type={type} setType={setType} />

    <GlobalStyle type={type}/>
   </>
  );
}
