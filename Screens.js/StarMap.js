import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {WebView} from 'react-native-webview'
export default class Starmap extends Component {
  constructor(props){
    super(props);
    this.state={
      location:{},
    };
  }
  componentDidMount(){
    this.getStarmap()
  }

  get Starmaplocation=()=>{
    axios
    .get(https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true)
    .then(response={
      this.setState({location:response.data})
    })
    .catch(error => {
      alert.alert(error.message)
    })
  }


  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Starmap</Text>
        <TextInput>
          style={{height:40, borderColor:'gray, borderWidth:1'}}
          placeholder="Enter your latitude"
          placeholderTextColor="#ffff#000000"
          onChangeText={(text)=>{
            this.setState({
              latitude:text
            })
          }}
        </TextInput>
        <TextInput>
          style={{height:40, borderColor:'gray, borderWidth:1'}}
          placeholder="Enter your longtitude"
          placeholderTextColor="#ffff#000000"
          onChangeText={(text)=>{
            this.setState({
              longtitude:text
            })
          }}
        </TextInput>
        <webView>
          scalesPageTofit={true}
          source={{uri:path}}
          style={{marginTop:20, marginBottom:20}}
          style={StyleSheet.map}
          region={{
            latitude:this.state.location.latitude,
            lontitude:this.state.location.longtitude,
            latitudeDelta:100,
            longtitudeDelta:100
          }}

          <Marker>
            coordinate={{latitude:this.state.location.latitude,longtitude:this.state.location.longtitude}}
          </Marker>
        </webView>
      </View>
    );
  }
