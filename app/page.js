"use client";
import React, { useState } from 'react';

const AngerManagementSystem = () => {
  const [stage, setStage] = useState('dashboard');
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [scenarioState, setScenarioState] = useState({ step: 1, history: [] });
  const [competencies, setCompetencies] = useState({
    awareness: 0,
    impulseControl: 0,
    deescalation: 0
  });

  // --- Views ---

  const renderDashboard = () => (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">Anger Management Skills Training</h1>
      <p className="text-gray-600 mb-6">
        Welcome to your applied skills assessment. This system evaluates how you apply anger management knowledge in realistic situations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-800">1. Baseline Check</h3>
          <p className="text-sm text-gray-600 mt-2">Establish your current understanding.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800">2. Applied Practice</h3>
          <p className="text-sm text-gray-600 mt-2">Interactive scenario simulations.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800">3. Competency Report</h3>
          <p className="text-sm text-gray-600 mt-2">Personalized feedback and action plan.</p>
        </div>
      </div>
      <button 
        onClick={() => setStage('baseline')}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition w-full md:w-auto"
      >
        Begin Initial Assessment
      </button>
    </div>
  );

  const renderBaseline = () => (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Baseline Knowledge Check</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-800"><strong>Instruction:</strong> We are assessing your initial recognition of anger escalation. Please answer honestly.</p>
      </div>
      <p className="text-lg mb-4 text-gray-700">Which of the following best describes the difference between anger and aggression?</p>
      <div className="space-y-3">
        <button 
          onClick={() => { setAssessmentScore(0); setStage('instruction'); }}
          className="w-full text-left p-4 border rounded hover:bg-gray-50 transition"
        >
          A. Anger is when you shout; aggression is when you get physical.
        </button>
        <button 
          onClick={() => { setAssessmentScore(1); setStage('instruction'); }}
          className="w-full text-left p-4 border rounded hover:bg-blue-50 hover:border-blue-300 transition"
        >
          B. Anger is an internal emotional and physiological state; aggression is a behavioral choice.
        </button>
        <button 
          onClick={() => { setAssessmentScore(0); setStage('instruction'); }}
          className="w-full text-left p-4 border rounded hover:bg-gray-50 transition"
        >
          C. They are the same thing; you cannot have one without the other.
        </button>
      </div>
    </div>
  );

  const renderInstruction = () => (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Micro-Lesson: The Pause</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1 bg-red-50 p-4 rounded-lg border border-red-100">
          <h3 className="font-bold text-red-800 mb-2">Ineffective Response</h3>
          <p className="text-sm text-gray-700">Reacting immediately to a perceived insult by firing back an insult. This escalates tension and removes your control over the situation.</p>
        </div>
        <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-bold text-green-800 mb-2">Effective Alternative</h3>
          <p className="text-sm text-gray-700">Recognizing the physiological signs of anger (tight chest, hot face), taking a physical step back, and delaying your response by 5 seconds to evaluate intent.</p>
        </div>
      </div>
      <button 
        onClick={() => setStage('sjt_scenario')}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Enter Simulation Practice
      </button>
    </div>
  );

  const renderSJT = () => {
    if (scenarioState.step === 1) {
      return (
        <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Scenario: Perceived Disrespect</h2>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded font-bold uppercase tracking-wide">Domain 10: Applied Decision-Making</span>
          </div>
          <p className="text-lg text-gray-700 mb-6 bg-gray-50 p-4 rounded border-l-4 border-gray-400">
            A person makes a dismissive comment while you are trying to resolve a disagreement. You feel your anger rising (heart rate increasing, jaw clenching), and you believe the person is intentionally trying to humiliate you.
          </p>
          <h3 className="font-semibold text-gray-800 mb-4">What is the most constructive immediate response?</h3>
          <div className="space-y-3">
            <button onClick={() => handleSJTChoice(1, 'A', 1)} className="w-full text-left p-4 border rounded hover:bg-gray-50">
              A. Respond with an insult so the person understands you will not tolerate disrespect.
            </button>
            <button onClick={() => handleSJTChoice(1, 'B', 2)} className="w-full text-left p-4 border rounded hover:bg-gray-50">
              B. Demand an apology before continuing the discussion.
            </button>
            <button onClick={() => handleSJTChoice(1, 'C', 4)} className="w-full text-left p-4 border rounded hover:bg-blue-50 border-blue-200">
              C. Pause, recognize your emotional reaction, and clarify what the person meant before deciding how to respond.
            </button>
            <button onClick={() => handleSJTChoice(1, 'D', 1)} className="w-full text-left p-4 border rounded hover:bg-gray-50">
              D. End the relationship immediately because the comment demonstrates intentional hostility.
            </button>
          </div>
        </div>
      );
    } else if (scenarioState.step === 2) {
      return (
        <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10 border-t-8 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Scenario Branching</h2>
          <p className="text-lg text-gray-700 mb-6 bg-gray-50 p-4 rounded">
            {scenarioState.history[0].choice === 'C' 
              ? "You pause and ask for clarification. The other person rolls their eyes, dismisses your question, and continues speaking aggressively, moving into your personal space."
              : "Due to your initial reaction, the tension has escalated immediately. The other person raises their voice and steps toward you aggressively."}
          </p>
          <h3 className="font-semibold text-gray-800 mb-4">What is your next step?</h3>
          <div className="space-y-3">
            <button onClick={() => handleSJTChoice(2, 'A', 4)} className="w-full text-left p-4 border rounded hover:bg-gray-50">
              A. State clearly that you need to take a break from the conversation and safely disengage by leaving the room.
            </button>
            <button onClick={() => handleSJTChoice(2, 'B', 1)} className="w-full text-left p-4 border rounded hover:bg-gray-50">
              B. Step forward to match their posture so you don't look weak.
            </button>
          </div>
        </div>
      );
    }
  };

  const handleSJTChoice = (step, choice, score) => {
    const newHistory = [...scenarioState.history, { step, choice, score }];
    
    // Update competencies based on choices
    if (step === 1) {
      setCompetencies(prev => ({
        ...prev,
        impulseControl: score,
        awareness: score > 2 ? 4 : 2
      }));
    } else if (step === 2) {
      setCompetencies(prev => ({
        ...prev,
        deescalation: score
      }));
      setScenarioState({ step: 3, history: newHistory }); // Move to feedback
      setStage('feedback');
      return;
    }
    
    setScenarioState({ step: step + 1, history: newHistory });
  };

  const renderFeedback = () => {
    const step1Score = scenarioState.history[0].score;
    return (
      <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Personalized Feedback & Remediation</h2>
        
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2 border-b pb-2">Initial Reaction Analysis</h3>
          {step1Score === 4 ? (
            <div className="bg-green-50 p-4 rounded text-green-900 border border-green-200">
              <p><strong>Effective Behavior:</strong> You demonstrated excellent emotional regulation and impulse control by pausing (Option C). You avoided assuming hostile intent without evidence.</p>
            </div>
          ) : (
            <div className="bg-red-50 p-4 rounded text-red-900 border border-red-200">
              <p><strong>Risk Identified:</strong> Your choice was likely to escalate the conflict. By acting on the immediate assumption of hostility, you bypassed the cognitive restructuring phase.</p>
              <p className="mt-2 text-sm font-semibold">Remediation Action: Recommended module on "Hostile Attribution & Checking Assumptions".</p>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2 border-b pb-2">Boundary & Safety Analysis</h3>
          {scenarioState.history[1].score === 4 ? (
            <div className="bg-green-50 p-4 rounded text-green-900 border border-green-200">
              <p><strong>Effective Behavior:</strong> You successfully identified a safety risk and utilized safe disengagement. The system recognizes that leaving is the best response to credible threats.</p>
            </div>
          ) : (
            <div className="bg-red-50 p-4 rounded text-red-900 border border-red-200">
              <p><strong>Risk Identified:</strong> Attempting to match posture (Option B) is an intimidation tactic that rapidly accelerates the path to physical aggression.</p>
              <p className="mt-2 text-sm font-semibold">Remediation Action: Recommended module on "Safe Disengagement and Boundary Setting".</p>
            </div>
          )}
        </div>

        <button 
          onClick={() => setStage('report')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Generate Final Competency Report
        </button>
      </div>
    );
  };

  const renderReport = () => (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Final Competency Report</h2>
        <span className="text-gray-500">Participant ID: #8492</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-semibold text-gray-700 mb-3 uppercase tracking-wider text-sm">Demonstrated Competencies</h3>
          <ul className="space-y-4">
            <li>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800">Impulse Control</span>
                <span className="text-sm font-bold text-blue-600">Level {competencies.impulseControl} / 4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${competencies.impulseControl > 2 ? 'bg-blue-600' : 'bg-yellow-500'}`} style={{width: `${(competencies.impulseControl / 4) * 100}%`}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800">Anger Awareness</span>
                <span className="text-sm font-bold text-blue-600">Level {competencies.awareness} / 4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${competencies.awareness > 2 ? 'bg-blue-600' : 'bg-yellow-500'}`} style={{width: `${(competencies.awareness / 4) * 100}%`}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800">De-escalation & Safety</span>
                <span className="text-sm font-bold text-blue-600">Level {competencies.deescalation} / 4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${competencies.deescalation > 2 ? 'bg-blue-600' : 'bg-yellow-500'}`} style={{width: `${(competencies.deescalation / 4) * 100}%`}}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-3 uppercase tracking-wider text-sm">Learning Plan & Next Steps</h3>
          <p className="text-sm text-gray-600 mb-4">Based on your performance in the applied behavioral simulations, the following individualized plan has been generated:</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            {competencies.impulseControl < 3 && <li><strong>Required Practice:</strong> Cognitive Restructuring and Hostile Assumptions.</li>}
            {competencies.deescalation < 3 && <li><strong>Required Practice:</strong> Safe Disengagement and recognizing physical warning signs.</li>}
            {competencies.impulseControl >= 3 && competencies.deescalation >= 3 && <li><strong>Maintenance:</strong> Continue applying "The Pause" technique in high-stress peer interactions.</li>}
            <li><strong>Action:</strong> Complete Relapse Prevention Plan (Module 11).</li>
          </ul>
        </div>
      </div>
      
      <div className="text-xs text-gray-400 text-center border-t pt-4">
        Disclaimer: This assessment evaluates applied skills in an educational context. It is not a clinical diagnostic tool.
      </div>
      <div className="mt-4 text-center">
        <button onClick={() => {setStage('dashboard'); setScenarioState({step: 1, history: []})}} className="text-blue-600 hover:underline">
          Return to Dashboard
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 pb-10">
      {stage === 'dashboard' && renderDashboard()}
      {stage === 'baseline' && renderBaseline()}
      {stage === 'instruction' && renderInstruction()}
      {stage === 'sjt_scenario' && renderSJT()}
      {stage === 'feedback' && renderFeedback()}
      {stage === 'report' && renderReport()}
    </div>
  );
};

export default AngerManagementSystem;
