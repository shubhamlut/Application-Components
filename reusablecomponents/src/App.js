import "./App.css";
import Dropdown from "./components/Dropdown";
import Loginscreen from "./components/Loginscreen";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Grid from "./components/Grid";
import Section from "./components/Section";
import Card from "./components/Card";

function App() {

  const tableData = [
    {
      id: 1212,
      name: "Shubham Lutade",
      age: "30",
      address: "Pune",
      button:<button>Test</button>
    },
    {
      id: 334,
      name: "Anaysha Lutade",
      age: "30",
      address: "Pune",
      button:<button>Test</button>
    },
    {
      id: 34343423,
      name: "Shreyas Lutade",
      age: "30",
      address: "Pune",
      button:<button>Test</button>
    },
    {
      id: 12323212,
      name: "Bhushan Lutade",
      age: "30",
      address: "Pune",
      button:<button>Test</button>
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        {/* <Loginscreen></Loginscreen>
        <Modal
          title="Please confirm"
          description="Are you sure you want to logout?"
          btnOneLabel="Cancel"
          btnTwoLabel="Yes"
        /> */}

        {/* <Grid data={tableData}/> */}

        {/* <Section data={tableData}/> */}

        <Card/>
        
      </header>
    </div>
  );
}

export default App;
