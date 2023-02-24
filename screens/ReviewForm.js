import {Formik} from 'formik';
import React from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {globalStyles} from '../styles/global';
import * as yup from 'yup';

function ReviewForm({addReview}) {
  const validation = yup.object().shape({
    title: yup.string().required('Title is Required'),
    body: yup.string().required('Body is required'),
    rating: yup
      .string()
      .required('Rating is required')
      .test('is-num-1-5', 'Rating must be number 1-5', val => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

  return (
    <View style={styles.formContainer} onPress={Keyboard.dismiss}>
      <Formik
        validationSchema={validation}
        initialValues={{title: '', body: '', rating: ''}}
        onSubmit={(values, action) => {
          addReview(values);
          action.resetForm();
        }}>
        {props => (
          <View style={styles.formInner}>
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={props.handleChange('title')}
                value={props.values.title}
              />
              <Text style={globalStyles.error}>{props.touched.title && props.errors.title}</Text>
            </View>
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review body"
                onChangeText={props.handleChange('body')}
                value={props.values.body}
              />
              <Text style={globalStyles.error}>{props.touched.body && props.errors.body}</Text>
            </View>
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review rating"
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType="numeric"
              />
              <Text style={globalStyles.error}>{props.touched.rating && props.errors.rating}</Text>
            </View>
            <Button title="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    marginVertical: 30,
  },
  formInner: {
    flexDirection: 'column',
    gap: 15,
  },
});

export default ReviewForm;
