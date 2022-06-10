import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import IssuesRepo from './components/IssuesRepo/IssuesRepo';
import MainIssuesContainer from './components/MainIssuesContainer/MainIssuesContainer';
import TabsContainer from './components/TabsContainer/TabsContainer';


function App() {
  return (
    <div className="App">

        <Header/>
        <IssuesRepo/>
        <TabsContainer/>
        <Banner/>
        <MainIssuesContainer/>

    </div>
  );
}

export default App;
