// Creating a Custom Component
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "navy",
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 15,
        alignSelf: "center",
        ...buttonStyle
      }}
    >
      <Text 
        style={{
          color: "yellow", 
          fontSize: 20,
          ...buttonStyle  
        }}
      >{text}
      </Text>
    </TouchableOpacity>
  )
};

export default () => {
  return (
    <>
      <Button 
        text="Say Hello" 
        onPress={() => alert("hello!")} 
      />
      <Button 
        text="Say Goodbye" 
        onPress={() => alert("goodbye!")} 
        buttonStyle={{
          backgroundColor: "purple",
          paddingVertical: 20,
          borderRadius: 12
        }}
      />
      <Button 
        text="Say Hola" 
        onPress={() => alert("hola!")} 
        buttonStyle={{
          backgroundColor: "red",
          fontSize: 30,
          paddingHorizontal: 20
        }}
      />
    </>
  )
};