import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GithubUserProfile } from "../../../domain/types/GithubUserProfile";

export const GithubProfile = () => {
  const [githubProfile, setGithubProfile] =
    useState<GithubUserProfile | null>();

  useEffect(() => {
    async function getUserProfile() {
      const response = await fetch("https://api.github.com/users/fkbral");

      const data = (await response.json()) as GithubUserProfile;

      setGithubProfile(data);
    }

    getUserProfile();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.text}>Perfil do usuário</Text>

      {githubProfile && <Text style={styles.text}>{githubProfile.name}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
