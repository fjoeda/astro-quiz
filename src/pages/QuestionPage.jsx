import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import questionsData from '../data/questions.json';
import happySun from '../assets/Smiling sun with cheerful rays.png';
import robotHead from '../assets/Broken space rover on the ground.png';

// Import all illustrations
import crayonMars from '../assets/Crayon Mars Illustra.png';
import crayonEarth from '../assets/Crayon Earth Illustr.png';
import crayonJupiter from '../assets/Crayon Jupiter Illus.png';
import crayonSaturn from '../assets/Crayon Saturn Illust.png';
import crayonMoon from '../assets/Crayon Moon Illustra.png';
import crayonSun from '../assets/Crayon Sun Illustrat.png';
import crayonComet from '../assets/Crayon Comet Illustr.png';
import crayonUranus from '../assets/Crayon Uranus Illust.png';
import crayonVenus from '../assets/Crayon Venus Illustr.png';
import crayonNeptune from '../assets/Crayon Neptune Illus.png';
import crayonMercury from '../assets/Crayon Mercury Illus.png';
import crayonSky from '../assets/Crayon Sky Illustrat.png';
import moonAndStars from '../assets/Moon and stars in crayon style.png';
import crayonRainbow from '../assets/Crayon Rainbow Illus.png';

// Create illustration mapping
const illustrations = {
  'Crayon Mars Illustra.png': crayonMars,
  'Crayon Earth Illustr.png': crayonEarth,
  'Crayon Jupiter Illus.png': crayonJupiter,
  'Crayon Saturn Illust.png': crayonSaturn,
  'Crayon Moon Illustra.png': crayonMoon,
  'Crayon Sun Illustrat.png': crayonSun,
  'Crayon Comet Illustr.png': crayonComet,
  'Crayon Uranus Illust.png': crayonUranus,
  'Crayon Venus Illustr.png': crayonVenus,
  'Crayon Neptune Illus.png': crayonNeptune,
  'Crayon Mercury Illus.png': crayonMercury,
  'Crayon Sky Illustrat.png': crayonSky,
  'Moon and stars in crayon style.png': moonAndStars,
  'Crayon Rainbow Illus.png': crayonRainbow,
};

const QuestionPage = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackState, setFeedbackState] = useState(null); // 'correct' | 'incorrect' | null

  const question = questionsData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

  const handleOptionSelect = (optionId) => {
    if (feedbackState) return; // Prevent double clicks
    
    setSelectedOption(optionId);
    
    if (optionId === question.correctAnswer) {
      setScore(s => s + 1);
      setFeedbackState('correct');
    } else {
      setFeedbackState('incorrect');
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      navigate('/result', { state: { score, total: questionsData.length } });
    } else {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedOption(null);
      setFeedbackState(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-4xl mx-auto relative relative min-h-full">
      {/* Progress Orbit */}
      <div className="w-full flex items-center justify-center gap-2 mb-8 mt-4">
        {questionsData.map((_, index) => (
          <div key={index} className="flex-1 max-w-16 h-4 relative">
             <div className={`absolute inset-0 rounded-full ${index < currentQuestionIndex ? 'bg-secondary-container shadow-[0_0_15px_rgba(255,219,60,0.5)]' : index === currentQuestionIndex ? 'bg-primary shadow-[0_0_15px_rgba(211,187,255,0.5)] animate-pulse' : 'bg-surface-container-highest border-2 border-outline-variant/30'}`} />
          </div>
        ))}
      </div>

      <div className="bg-surface-container/80 backdrop-blur-xl border border-outline-variant/10 rounded-[2rem] p-6 md:p-12 w-full text-center relative shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
        
        {/* Question Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 tracking-tight leading-tight">
          {question.question}
        </h2>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
          {question.options.map((option) => {
             const isSelected = selectedOption === option.id;
             let optionStateClass = "bg-surface-container-highest border-outline-variant/20 hover:bg-surface-container-high hover:border-primary/50 text-on-surface-variant hover:text-white";
             
             if (feedbackState === 'correct') {
                if (option.id === question.correctAnswer) {
                   optionStateClass = "bg-primary-container border-primary text-white shadow-[0_0_30px_rgba(109,40,217,0.5)]";
                } else {
                   optionStateClass = "opacity-50 grayscale bg-surface-container-highest border-transparent";
                }
             } else if (feedbackState === 'incorrect') {
                if (isSelected) {
                   optionStateClass = "bg-error-container border-error text-error shadow-[0_0_30px_rgba(147,0,10,0.5)]";
                } else if (option.id === question.correctAnswer) {
                   optionStateClass = "bg-primary-container border-primary text-white shadow-[0_0_30px_rgba(109,40,217,0.5)] border-dashed";
                }
             }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={feedbackState !== null}
                className={`flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 transition-all duration-300 transform ${!feedbackState && 'active:scale-95'} ${optionStateClass}`}
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <img 
                    src={illustrations[option.illustration]} 
                    alt={option.text}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <span className="text-2xl font-bold font-headline">{option.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Overlay Modal */}
      {feedbackState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#11131d]/90 backdrop-blur-md animate-in fade-in duration-300">
           {feedbackState === 'correct' && (
             <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />
           )}
           <div className={`w-full max-w-md rounded-[3rem] p-10 text-center relative overflow-hidden ${feedbackState === 'correct' ? 'bg-primary-container/20 border-2 border-primary shadow-[0_0_80px_rgba(211,187,255,0.2)]' : 'bg-error-container/20 border-2 border-error shadow-[0_0_80px_rgba(255,180,171,0.1)]'}`}>
              
              {/* Backglow */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none ${feedbackState === 'correct' ? 'bg-primary' : 'bg-error'}`}></div>

              <div className="relative z-10 w-32 h-32 mx-auto flex items-center justify-center mb-8">
                 {feedbackState === 'correct' ? (
                   <img 
                     src={happySun} 
                     alt="Happy sun with sunglasses" 
                     className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,219,60,0.6)] animate-bounce"
                   />
                 ) : (
                   <img 
                     src={robotHead} 
                     alt="Sad robot head" 
                     className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,180,171,0.4)] animate-pulse"
                   />
                 )}
              </div>

              <h3 className={`text-4xl font-extrabold mb-4 ${feedbackState === 'correct' ? 'text-primary' : 'text-error'}`}>
                 {feedbackState === 'correct' ? 'Stellar Job!' : 'Oh no, Space Cadet!'}
              </h3>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
                 {question.explanation}
              </p>

              <button
                 onClick={handleNext}
                 className={`w-full text-2xl font-bold py-5 rounded-full transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 ${feedbackState === 'correct' ? 'bg-primary text-on-primary-fixed shadow-[0_0_40px_rgba(211,187,255,0.4)]' : 'bg-surface-variant text-white border border-outline-variant hover:bg-surface-container-highest'}`}
              >
                {isLastQuestion ? 'See Final Score!' : 'Next Mission'}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;