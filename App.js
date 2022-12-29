import Book from "./Book";

function App() {
  var myData = ["Card 1","Card 2","Card 3","Card 4","Card 5","Card 6","Card 7","Card 8","Card 9","Card 10","Card 11","Card 12","Card 13","Card 14","Card 15","Card 16","Card 17","Card 18","Card 19","Card 20","Card 21","Card 22"]
  return (
    <div className="App row ">
      
        {myData.map((item)=>{
          return <Book data={item}/>
        })}
      
      

      
    </div>
  );
}

export default App;
