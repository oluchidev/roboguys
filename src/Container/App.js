import React,{Component} from 'react';
import Cardlist from '../Components/cardlist';
import SearchBox from '../Components/searchBox'
import './App.css';
import Scroll from '../Components/scroll';


class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
           
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length? 
            <h1>Loading</h1> :
        
             (
                <div className='tc'>
                <h1 className='f1'>ROBOGUYS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <Cardlist robots={filteredRobots}/> 
                </Scroll>
                </div>
                
            )
        }
    }



export default App;