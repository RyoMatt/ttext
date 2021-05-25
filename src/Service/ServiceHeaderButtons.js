import React,{ Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor:'black',
        borderWidth: 1
    }
});

export default class HeaderButtons extends Component{
    state={
        toggleSchool: true,
        toggleStudent: false
    }

    changeSchoolPage(){
        if(!this.state.toggleSchool){
            const newSchoolState = !this.state.toggleSchool;
            const newStudentState = !this.state.toggleStudent;

            this.setState({toggleSchool:newSchoolState, toggleStudent:newStudentState})
        }
    }

    changeStudentPage(){
        if(!this.state.toggleStudent){
            const newSchoolState = !this.state.toggleSchool;
            const newStudentState = !this.state.toggleStudent;

            this.setState({toggleSchool:newSchoolState, toggleStudent:newStudentState})
        }
    }

    render() {
        const {toggleSchool} = this.state;
        const {toggleStudent} = this.state;

        const schoolButtonBg = toggleSchool?"orange":"white";
        const studentButtonBg = toggleStudent?"orange":"white";

        const schoolTxtColor = toggleSchool?"white":"black";
        const studentTxtColor = toggleStudent?"white":"black";

        return (
            <View style={styles.container} >

              <TouchableOpacity
              onPress={()=>this.changeSchoolPage()}
              style={{width:'50%',backgroundColor:schoolButtonBg,justifyContent:'center',borderColor:'black',borderWidth:1}}>
               <Text style={{color:schoolTxtColor,textAlign:'center'}}>School-Provided Services</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>this.changeStudentPage()}
              style={{width:'50%',backgroundColor:studentButtonBg,justifyContent:'center',borderColor:'black',borderWidth:1}}>
               <Text style={{color:studentTxtColor,textAlign:'center'}}>Student-Provided Services</Text>
              </TouchableOpacity>

            </View>
        );
    }
}