// @flow
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { colors } from '../../utils/Styles'

type Styles = {
  wrapper: ViewStyle,
  label: TextStyle,
  labelFocus: TextStyle,
  input: ViewStyle,
  inputFocus: ViewStyle,
}

const styles: Styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',

    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    color: colors.blueyGray,
    marginBottom: 8,
    fontSize: 12,
  },
  labelFocus: {
    color: colors.dodgerBlue,
    marginBottom: 8,
    fontSize: 12,
  },
  input: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgb(233,237,244)',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputFocus: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.dodgerBlue,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

type Props = {
  style?: ViewStyle,
  inputStyle?: ViewStyle,
  labelStyle?: TextStyle,
  labelStyleFocus?: TextStyle,
  onTextChanged?: (text: string) => void,
  txtLabel?: string,
  txtHint?: string,
  placeholderTextColor?: string,
  isPassword?: boolean,
  txt?: string,
  multiline?: boolean,
};

type State = {
  focused: boolean
};

export default class Shared extends Component<Props, State> {
  static defaultProps = {
    style: styles.wrapper,
    labelStyle: styles.label,
    labelStyleFocus: styles.labelFocus,
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      focused: false,
    }
  }

  render() {
    return (
      <View style={[
        styles.wrapper,
        this.props.style,
      ]}>
        {
          (!!this.props.txtLabel)
            ? <Text style={this.state.focused ? this.props.labelStyleFocus : this.props.labelStyle }>
              {this.props.txtLabel}
            </Text>
            : <View/>
        }
        <TextInput
          style={[
            this.state.focused ? styles.inputFocus : styles.input,
            this.props.inputStyle,
          ]}
          multiline={this.props.multiline}
          onChangeText={this.props.onTextChanged}
          value={this.props.txt}
          onFocus={ () => this.setState({ focused: true })}
          onBlur={ () => this.setState({ focused: false })}
          placeholder={this.props.txtHint}
          placeholderTextColor={this.props.placeholderTextColor}
          secureTextEntry={this.props.isPassword}
        />
      </View>
    );
  }
}
