
import { useCalc } from './hooks/useCalc';
import { CalcKeyboard } from './components/CalcKeyboard';
import { CalcDisplay } from './components/CalcDisplay';
import { CalcHeader } from './components/CalcHeader';


function App() {
  const {display, addOperand, setOperation, resolve, del, clear, addDot} = useCalc();
  return (
    <>
     <main className='flex flex-col gap-6 px-4 py-6 sm:max-w-[540px] '>
        <CalcHeader/>
        <CalcDisplay display = { display }/>
        <CalcKeyboard addOperand={addOperand} setOperation={setOperation} resolve={resolve} del={del} clear={clear} addDot={addDot} />
     </main>
    </>
  )
}
export default App
