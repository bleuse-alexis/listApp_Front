import React, { useState, useEffect } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";

import AccountServices from "../../services/account";

export default function Login() {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    console.log(body);

    AccountServices.login(body)
      .then((result) => {
        console.log("connexion réussi");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          variant="outlined"
          placeholder="Email"
          onChangeText={(email) => setBody({ ...body, email: email })}
        />
      </View>

      <View>
        <TextInput
          variant="outlined"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setBody({ ...body, password: password })}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
