// screens/SelfieWithIdCard.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary, Asset } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, SIZES } from '../constants';
import Header from '../components/Header';
import Button from '../components/Button';

type Nav = { navigate: (screen: string, params?: any) => void };

const SelfieWithIdCard: React.FC = () => {
  const { navigate } = useNavigation<Nav>();
  const { colors, dark } = useTheme();

  const [capturedUri, setCapturedUri] = useState<string | null>(null);

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
      saveToPhotos: false,
    });

    if (result.didCancel) return;
    if (result.errorMessage) {
      return Alert.alert('Camera Error', result.errorMessage);
    }

    const photo: Asset | undefined = result.assets?.[0];
    if (photo?.uri) setCapturedUri(photo.uri);
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (result.didCancel) return;
    if (result.errorMessage) {
      return Alert.alert('Gallery Error', result.errorMessage);
    }

    const image: Asset | undefined = result.assets?.[0];
    if (image?.uri) setCapturedUri(image.uri);
  };

  const handleContinue = () => {
    if (!capturedUri) {
      return Alert.alert('Image Required', 'Please select or take a photo.');
    }
    navigate('FillYourProfile', { selfieUri: capturedUri });
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <Header title="Selfie with ID" />

      <View style={styles.previewContainer}>
        {capturedUri ? (
          <Image source={{ uri: capturedUri }} style={styles.preview} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={{ color: dark ? COLORS.white : COLORS.greyscale700 }}>
              No image selected
            </Text>
          </View>
        )}
      </View>

      <Text
        style={[styles.instruction, { color: dark ? COLORS.white : COLORS.greyscale900 }]}
      >
        {capturedUri
          ? 'Review your selfie with ID. Retake if needed.'
          : 'Tap below to take or select a selfie with your ID.'}
      </Text>

      <View style={styles.bottomContainer}>
        <Button title="Take Selfie" onPress={openCamera} />
        <Button title="Choose from Gallery" onPress={openGallery} />
        <Button title="Continue" filled onPress={handleContinue} disabled={!capturedUri} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: { flex: 1 },
  previewContainer: {
    flex: 1,
    margin: 16,
    borderWidth: 4,
    borderColor: COLORS.primary,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: SIZES.width - 32,
    height: SIZES.width - 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2d2d',
    borderRadius: 12,
  },
  preview: {
    width: SIZES.width - 32,
    height: SIZES.width - 32,
    resizeMode: 'cover',
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 12,
    fontFamily: 'Urbanist Regular',
  },
  bottomContainer: {
    gap: 10,
    padding: 16,
  },
});

export default SelfieWithIdCard;
