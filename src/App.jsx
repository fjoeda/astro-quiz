import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<QuestionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
