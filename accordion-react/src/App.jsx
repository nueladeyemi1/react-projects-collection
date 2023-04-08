import { useState } from 'react'
import Accordion from './Accordion';
import { questions, newAccordion } from './data';
import Question from './Question';


function App() {
  const [data, setData] = useState(questions)
  const [accordionData, setAccordionData] = useState(newAccordion);

  return (
    <>
      <main>
        <div className="container">
          <h3>Questions And Answers About Login</h3>
          <section className="info">
            {data.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
      <section className='accordion'>{accordionData.map((datas) => {
        return <Accordion key={datas.id} {...datas} />;
      })}</section>
    </>
  );
}

export default App
