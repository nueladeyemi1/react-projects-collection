import { useState } from 'react'
import questions from './data';
import Question from './Question';


function App() {
  const [data, setData] = useState(questions)

  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>{" "}
        <section className="info">
          {data.map((question) => {
            return <Question key={question.id} {...question}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App