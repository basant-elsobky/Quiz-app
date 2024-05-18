'use client'
import { useState } from "react"
import { Data } from "../Data"
import '../page.css'
function page() {
    const [activeQuestion, setactiveQuestion] = useState(0);
    const [selectedanswer, setselectedanswer] = useState()
    const [checked, setchecked] = useState(false)
    const [selectedanswerindex, setselectedanswerindex] = useState(null);
    const [showresult, setshowresult] = useState(false)
    const [result, setresult] = useState({
        score: 0,
        rightanswer: 0,
        wronganswer: 0
    })
    const { questions } = Data;
    const { question, answers, correctanswer } = questions[activeQuestion]

    const onanswerselectd = (answer, idx) => {
        setchecked(true);
        setselectedanswerindex(idx);
        if (answer === correctanswer) {
            setselectedanswer(true);
            console.log('true');
        } else {
            setselectedanswer(false);
            console.log('false');
        }
    }


    const nextQuestion = () => {
        setselectedanswerindex(null);
        setresult((prev) =>
            selectedanswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    rightanswer: prev.rightanswer + 1,
                }
                : {
                    ...prev,
                    wronganswer: prev.wronganswer + 1,
                }
        );
        if (activeQuestion !== questions.length - 1) {
            setactiveQuestion((prev) => prev + 1);
        } else {
            setactiveQuestion(0);
            setshowresult(true);
        }
        setchecked(false);
    };

    return (
        <div className="container">
            <h1>  Quiz page</h1>
            <div>
                <h2>Question: {activeQuestion + 1}/ <span>{questions.length}</span></h2>
            </div>

            <div>
                {!showresult ? (<div className="quiz-container">
                    <h3>{questions[activeQuestion].question}</h3>
                    {answers.map((answer, idx) => (
                        <li

                            key={idx}
                            onClick={() => { onanswerselectd(answer, idx) }}
                            className={
                                selectedanswerindex === idx
                                    ? selectedanswer === true
                                        ? 'li-selected li-trueanswer'
                                        : 'li-selected li-wronganswer'
                                    : 'li-hover'
                            }

                        >

                            <span >{answer}</span>
                        </li>
                    ))}
                    {checked ? (<button onClick={nextQuestion} className="btn">
                        {activeQuestion === activeQuestion.length - 1 ? 'finish' : 'Next'}
                    </button>) : (<button onClick={nextQuestion} desapled className="btn-disapled"> {activeQuestion === activeQuestion.length - 1 ? 'finish' : 'Next'}</button>)}
                </div>)
                    : (<div className="quiz-container">
                        <h3>Results</h3>
                        <h3>Overall {(result.score / 25) * 100}%</h3>
                        <p>
                            Total Questions: <span>{questions.length}</span>
                        </p>
                        <p>
                            Total Score: <span>{result.score}</span>
                        </p>
                        <p>
                            Correct Answers: <span>{result.rightanswer}</span>
                        </p>
                        <p>
                            Wrong Answers: <span>{result.wronganswer}</span>
                        </p>
                        <button onClick={() => window.location.reload()}>Restart</button>
                    </div>)}
            </div>

        </div>
    )
}

export default page
