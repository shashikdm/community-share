import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../../shared/button.js';

const requestSchema = yup.object({
  phoneNumber: yup.string()
    .required()
    .min(10)
    .max(10),
});

export default function Login({ navigation }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ phoneNumber: '',}}
        validationSchema={requestSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          navigation.navigate('VerifyOtp')
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Enter your Phone Number'
              onChangeText={props.handleChange('phoneNumber')}
              onBlur={props.handleBlur('phoneNumber')} 
              value={props.values.phoneNumber}
              keyboardType='numeric'
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.phoneNumber && props.errors.phoneNumber}</Text>

            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}