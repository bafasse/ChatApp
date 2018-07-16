import React from 'react';

import Home from './components/Home';
import Home from './components/Chat';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
                    <Scene key='home' component={Home} title='Home'/>
                    <Scene key='chat' component={Chat} title='Chat'/>
                </Scene>
            </Router>
        );
    }    
}

export default App;