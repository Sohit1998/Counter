import {Component} from 'react/cjs/react.development';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './CounterStyle';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    //   startCounter: false,
    };
  }

  OnIncrement = () => {
    if (this.state.counter >= 10) {
      alert('Value cannot be incremented');
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  };

  OnDecrement = () => {
    if (this.state.counter <= 0) {
      alert('Value cannot be decremented');
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

//   onStartCounter = () => {
//     this.setState({
//       startCounter: true,
//     });
//   };

//   onStopCounter = () => {
//     this.setState({
//       startCounter: false,
//     });
//   };

//   componentDidUpdate() {
//     if (this.state.startCounter) {
//       setTimeout(() => {
//         this.setState(prevValue => ({
//           counter: prevValue.counter + 1,
//         }));
//       }, 1000);
//     }
//   }

  onResetCounter = () => {
    this.setState({
        startCounter: false,
        counter: 0,
    });
  };

  render() {
    return (
      <View style={styles.counterCont}>
        <Text style={styles.counterValue}>{this.state.counter}</Text>
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.btn} onPress={this.OnIncrement}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.OnDecrement}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.secbtnMain}>
          <TouchableOpacity style={styles.secbtn} onPress={this.onStartCounter}>
            <Text>START</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secbtn} onPress={this.onStopCounter}>
            <Text>STOP</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.secbtnMain}>
          <TouchableOpacity
            style={styles.resetbtn}
            onPress={this.onResetCounter}>
            <Text>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Counter;