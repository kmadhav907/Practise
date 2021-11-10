import React from 'react';
import { Link } from 'react-router-dom';
import getApiResponse from '../api/apis';
import apiResponse from '../interfaces/apiresponse';

interface HomePageState {
  showMessage: boolean;
  apiResponse: apiResponse[];
}

class HomePage extends React.Component<{}, HomePageState> {
  constructor(props: any) {
    super(props);
    this.state = { showMessage: false, apiResponse: [] };
  }
  componentDidMount() {
    console.log('Mounted');
  }
  componentDidUpdate() {
    console.log('Updated');
  }
  componentWillUnmount() {
    console.log('Unmounted');
  }
  getResponse() {
    getApiResponse()
      .then((response) => {
        this.setState({ apiResponse: response as any });
      })
      .catch((err: any) => {
        console.log(err);
        console.log('Something went wrong');
      });
  }
  render() {
    return (
      <div>
        This is HomePage
        <br />
        <Link to='/about'>About</Link>
        <br />
        <button
          onClick={() => {
            this.getResponse();
          }}
        >
          Click me
        </button>
        <br />
        {this.state.apiResponse.map((element: apiResponse) => {
          return (
            <div>
              {element.title} and {element.body}
            </div>
          );
        })}
      </div>
    );
  }
}
export default HomePage;
