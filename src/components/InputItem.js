import React, { Component } from 'react';

const styles = {
  input: {
    padding: 0,
    margin: '0 2px',
    textAlign: 'center',
    border: '1px solid',
    background: 'transparent',
    width: '50px',
    height: '50px',
    fontSize: '40px',
  },
  inputFocus: {
    outline: 'none',
    boxShadow: 'none',
    background: 'yellow',
  },
};

class InputItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focus: props.isFocus,
    };
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur() {
    this.setState({ focus: false });
    this.props.onBlur();
  }

  onChange(e) {
    let value = e.target.value;
    if (value.length >= 2) {
      value = value[0];
    }
    this.setState({value});

    if (value.length) {
      this.props.onFill(this.props.index);
    }
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.focus && nextProps.isFocus) {
      return {
        focus: nextProps.isFocus,
      };
    }
  }

  componentDidUpdate() {
    if (this.state.focus) {
      this.input.focus();
    }
  }

  onFocus(e) {
    const value = e.target.value;
    e.target.select();
    this.setState({ focus: true });
    this.props.onFoucs(this.props.index);
  }

  render() {
    const { focus, value } = this.state;

    return (<input
      onChange={ this.onChange }
      autoComplete='off'
      type='text'
      ref={ n => (this.input = n) }
      onFocus={ this.onFocus }
      onBlur={ this.onBlur }
      style={ Object.assign(
        {},
        styles.input,
        focus ? styles.inputFocus : {},
      ) }
      value={ value }
    />);
  }
}

export default InputItem;
