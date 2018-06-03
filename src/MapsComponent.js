import React, {Component} from 'react';
import {render} from 'react-dom';
import Hello from './Hello';
import './style.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapsComponent extends Component {
    static defaultProps = {
        center: {
            lat: 17.424825,
            lng: 78.379091
        },
        zoom: 18
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBjyGIPZ8JaR4Twk2PSkKNolFnL1JtSp9I' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={17.424825}
                        lng={78.379091}
                        text={'You are here!'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
export default MapsComponent