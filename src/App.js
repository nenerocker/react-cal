
import './App.css';
import CalBox from './component/CalBox';
import Screen from './component/Screen';
import ButtonBox from './component/ButtonBox';
import Button from './component/Button';
import CalcProvider from './context/CalcContext';
const btnvalue = [
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];

function App() {
  return (
    <CalcProvider>
        <CalBox>
          <Screen/>
          <ButtonBox>
            {btnvalue.flat().map((btn,i)=>(
              <Button
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
          <h1>Calculator</h1>
        </CalBox>
    </CalcProvider>
  );
}

export default App;
