import Accordion from './components/Accordion'
import { questions } from './data/data'
function App() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-950">Accordion</h1>
      <div className='accordion-container w-[800px] min-h-[400px] bg-slate-200 mx-[64px] border-1 border-gray-400 rounded-lg shadow-md flex flex-col justify-center p-[16px] '>
        {questions.map((item, index) => (
          <Accordion
            key={index} 
            title={item.title} 
            content={item.content} 
          />
        ))}
      </div>
    </div>
  )
}

export default App
