import React, { Component } from 'react';
import './index.scss';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
class Animate extends Component {
  render() {
    return (
      <div className="App">
        <div className="box"></div>
        <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="animated"
          >
                        {/* //这里一定要加上key
                        //className是animate.css中的类名，显示不同动画 */}
                      <div key="amache" className="animated fadeInLeftBig" >
                          <img src="https://avatars0.githubusercontent.com/u/32004895?s=60&v=4" alt="" />
                      </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
