import React from 'react';
import { StyleSheet, 
        Text, TextInput,
        View, ScrollView, 
        TouchableOpacity } from 'react-native';
import Note from './components/Note'
export default class App extends React.Component {
  state = {
    notesArray: [{date: '8/22/2017' , note: 'Test Note 1'}, {date: '8/22/2017' , note: 'Test Note 2 '}],
    noteText: ''
  }
  addNote() {
    if(this.state.noteText){
      var d = new Date();
      this.state.notesArray.push({date: `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`, note: this.state.noteText});
      this.setState({notesArray: this.state.notesArray});
      this.setState({noteText: ''});
    }
  }
  deleteNote(key){
    this.state.notesArray.splice(key, 1);
    this.setState({notesArray: this.state.notesArray});
  }
  render() {
    let notes = this.state.notesArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)}/>
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTED -</Text>
        </View>
        
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder='> note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            onChangeText= {(noteText) => this.setState({noteText})}
            value={this.state.noteText}
          >
          </TextInput>
        </View>
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: '#ccc',
    fontSize: 24
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }
});
