import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import IssuesRepo from './components/IssuesRepo';
import TabsContainer from './components/TabsContainer';

function App() {
  return (
    <div className="App">
        <h1>Github Issues</h1>

        <Header/>
        <IssuesRepo/>
        <TabsContainer/>
        <Banner/>
        <MainIssueTab/>

    </div>
  );
}

export default App;
