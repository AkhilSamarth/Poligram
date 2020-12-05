import React from 'react';

import Question from './Question';
import Socket from '../Socket';

// max values of each classification
const cutoffs = {
  0: 'neutral',
  10: 'slightly',
  20: 'moderately',
  30: 'very',
  999: 'extremely',
};

const num_questions = 13;

function Quiz() {
  const [display, setDisplay] = React.useState(null);

  React.useEffect(() => {
    Socket.on('quiz generated', (data) => {
      const questions = data.map((question, i) => {
        let bgColor;
        if (i % 2 === 0) {
          bgColor = 'white';
        } else {
          bgColor = '#D3D3D3';
        }

        return (
          <div style={{ padding: '1em', background: bgColor }}>
            <Question text={question.text} multiplier={question.multiplier} index={i} />
          </div>
        );
      });

      setDisplay(
        <div>
          <form onSubmit={submitQuiz}>
            <div style={{ margin: '2em', border: 'solid' }}>
              {questions}
            </div>
            <button style={{ marginBottom: '3em' }}>Submit quiz</button>
          </form>
        </div>,
      );
    });

    return () => {
      Socket.off('quiz generated');
    };
  });

  function generateQuiz() {
    Socket.emit('request quiz');
  }

  function submitQuiz(event) {
    event.preventDefault();

    let score = 0;
    let counter = 0;
    for (const radio of event.target) {
      if (radio.checked) {
        const multiplier = radio.name.substring(radio.name.indexOf(',') + 1);
        score += multiplier * radio.value;
        counter++;
      }
    }

    if (counter < num_questions) {
      alert('Please answer all questions before submitting');
      return;
    }

    let ideology;
    let descriptor;

    if (score < 0) {
      ideology = 'conservative';
      score *= -1;
    } else if (score > 0) {
      ideology = 'liberal';
    } else {
      ideology = '';
    }

    for (const cutoff in cutoffs) {
      if (score <= cutoff) {
        descriptor = cutoffs[cutoff];
        break;
      }
    }

    setDisplay(
      <div>
        <h2>You are {descriptor} {ideology}</h2>
        <button>Save result</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Ideology Quiz</h2>
      <button onClick={generateQuiz}>Generate new quiz</button>
      {display}
    </div>
  );
}

export default Quiz;
