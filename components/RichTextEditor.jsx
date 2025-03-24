import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { actions, RichToolbar } from 'react-native-pell-rich-editor';

const RichTextEditor = () => {
  const editorRef = useRef(null); // Define editorRef as a reference to the editor
  const onChange = (text) => {
    // Handle the change (e.g., update state or perform actions)
    console.log(text);
  };

  return (
    <View style={{ minHeight: 285 }}>
      <RichToolbar
        actions={[
          
          actions.setStrikethrough,
          actions.removeFormat,
          actions.setBold,
          actions.setItalic,
          actions.insertOrderedList,
          actions.blockquote,
          actions.alignLeft,
          actions.alignCenter,
          actions.alignRight,
          actions.code,
          actions.line,
          actions.heading1,
          actions.heading4,
    

        ]}
        iconMap = {{
          [actions.heading1] : ({tintColor}) => <Text style= {{color: tintColor}} >H1</Text>,
          [actions.heading1] : ({tintColor}) => <Text style= {{color: tintColor}} >H4</Text>
        }}
        style={styles.richBar}
        flatContainerStyle={styles.listStyle}
        editor={editorRef}
        disabled={false}
      />
    </View>
  );
};

export default RichTextEditor;

const styles = StyleSheet.create({
  richBar: {
    // Define style for the RichToolbar
  },
  listStyle: {
    // Define style for the list container
  },
});
