import React, { Component }  from 'react'; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux'
import './App.css';

import { setSearchField, requestRobots, setSearchEmail } from '../actions'

const mapStateToProps = state => {
    return {
       searchField: state.searchRobots.searchField,
       emailSearchActive: state.searchRobots.emailSearchActive, 
       emailSearchField: state.searchRobots.emailSearchField,
       robots: state.requestRobots.robots, 
       isPending: state.requestRobots.isPending, 
       error: state.requestRobots.error, 
       
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()),
        onEmailSearchChange: (event) => dispatch(setSearchEmail(event.target.value))
        }
    }
    


class App extends Component{


    componentDidMount(){
        
        this.props.onRequestRobots()
           
     }


    render(){
        const { searchField, onSearchChange, robots, isPending, onEmailSearchChange, emailSearchActive, emailSearchField} = this.props

        const namefilteredRobots = robots.filter(robot => {
            //search for both name and email of robot
            return emailSearchActive ?  robot.email.toLowerCase().includes(emailSearchField.toLowerCase()) : robot.name.toLowerCase().includes(searchField.toLowerCase())
            
        })



        return isPending ? <h1 className="RBF f1">Loading</h1> :
            (
                <div className="tc">
                    <h1 className="RBF f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} placeholder="Search Robots Names"/> 
                    <SearchBox searchChange={onEmailSearchChange} placeholder="Search Emails"/>                      
                    <Scroll>
                        <CardList robots ={namefilteredRobots}/>
                    </Scroll>
                    
                </div>
                
            )
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


    
    
