import React,{ Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import ServiceScreen from './ServiceScreen';

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor:'black',
        borderBottomWidth: 1,
        borderTopWidth: 1,
    }
});

export default class HeaderButtons extends Component{
    render() {
        const toggleSchool = this.props.toggleSchool;
        const toggleStudent = this.props.toggleStudent;

        const schoolButtonBg = toggleSchool?"#F87D0B":"white";
        const studentButtonBg = toggleStudent?"#F87D0B":"white";

        const schoolTxtColor = toggleSchool?"white":"black";
        const studentTxtColor = toggleStudent?"white":"black";

        return (
            <View style={styles.container} >

                {/*School-Provided Services button*/}
                <TouchableOpacity
                onPress={()=>this.props.changeSchoolPage()}
                style={{width:'50%',backgroundColor:schoolButtonBg,justifyContent:'center',borderColor:'black'}}>
                <Text style={{color:schoolTxtColor,textAlign:'center'}}>School-Provided Services</Text>
                </TouchableOpacity>

                {/*Student-Provided Services button*/}
                <TouchableOpacity
                onPress={()=>this.props.changeStudentPage()}
                style={{width:'50%',backgroundColor:studentButtonBg,justifyContent:'center',borderColor:'black',borderLeftWidth:1}}>
                <Text style={{color:studentTxtColor,textAlign:'center'}}>Student-Provided Services</Text>
                </TouchableOpacity>

            </View>
        );
    }
}