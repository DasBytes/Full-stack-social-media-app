import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { RichToolbar } from 'react-native-pell-rich-editor';

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
          'bold',
          'italic',
          'insertBulletsList',
          'insertOrderedList',
          'insertLink',
          'keyboard',
          'strikethrough',
          'underline',
          'removeFormat',
          'insertVideo',
          'checkboxList',
          'undo',
          'redo',
        ]}
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
