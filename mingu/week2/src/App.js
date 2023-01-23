import React, { Component } from "react";
import "./App.css";
import TOC from '../src/components/TOC';
import Subject from '../src/components/Subject';
import Content from '../src/components/Content';


class App extends Component {
  constructor(props) {
    // 컴포넌트가 생성될때 제일먼저 실행되어 초기화를 담당.
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information ...'},
        {id: 2, title: 'CSS', desc: 'CSS is for design ...'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interaction ...'},
      ]
    }
  }

  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title; 
          _desc = data.desc;
          break;
        }
        i++;
      }
    } 
    // console.log('render', this);

    return (
      <div>
        <Subject title={this.state.subject.title} subTitle={this.state.subject.sub} onChangePage={function() {
          // alert("HIHIHI");
          this.setState({mode: "welcome"});
        }.bind(this)}></Subject>
        {/* <header>
          <h1><a href="/" onClick={function(event) {
            event.preventDefault();
            console.log(event);
            // this.state.mode = 'welcome';
            this.setState({
              mode: 'welcome',
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC onChangePage={function(id) {
          console.log(id);
          this.setState({
            mode: 'read',
            selected_content_id: Number(id),
          });
        }.bind(this)} data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}


export default App;