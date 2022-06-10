import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import IssuesRepo from './components/IssuesRepo';
import MainIssuesTab from './components/MainIssuesTab';
import TabsContainer from './components/TabsContainer/TabsContainer';


function App() {
  return (
    <div className="App">
        <Header/>
        <IssuesRepo/>
        <TabsContainer/>
        <Banner/>
        <MainIssuesTab/>

    </div>
  );
}

export default App;
