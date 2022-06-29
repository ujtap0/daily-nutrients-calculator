import List from "./component/List.component";

function App() {
  return (
    <div className="App">
      <List />
    </div> 
  );
}

export default App;


//cors error - long term solution
//server side: if anything comes from localhost 3000 it is okay
//once we get to the full production version of this we launched the production version
//proxy witten in package.json doesn't work anymore because proxy no longer is localhost 8080(서버사이드 쪽 배포전 주소)
//proxy is going to be the exact same url because if they're both launched into develop into production