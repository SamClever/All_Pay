<<<<<<< HEAD
// screens/SelfieWithIdCard.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
>>>>>>> fix-old-version
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary, Asset } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, SIZES } from '../constants';
<<<<<<< HEAD
import Header from '../components/Header';
import Button from '../components/Button';

type Nav = { navigate: (screen: string, params?: any) => void };

const SelfieWithIdCard: React.FC = () => {
=======
import Button from '../components/Button';
import Header from '../components/Header';
import { launchCamera, CameraOptions, Asset } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://blupay.zakedebt.co.tz';

type Nav = {
  navigate: (value: string) => void
};

const SelfieWithIdCard = () => {
>>>>>>> fix-old-version
  const { navigate } = useNavigation<Nav>();
  const { colors, dark } = useTheme();
  const [photo, setPhoto] = useState<Asset | null>(null);
  const [uploading, setUploading] = useState(false);

  const openCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'front',
      saveToPhotos: false,
      quality: 0.8,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Camera Error', response.errorMessage || 'Could not open camera.');
        return;
      }
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0]);
      }
    });
  };

  const uploadPhoto = async () => {
    // Instead of uploading, just navigate to the next screen
    navigate('FillYourProfile');
  };

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
<<<<<<< HEAD
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
=======
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>Selfie with ID Card</Text>
          <Text style={[styles.subtitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>Please face the camera holding your ID card.</Text>
        </ScrollView>
>>>>>>> fix-old-version
      </View>

      <Text
        style={[styles.instruction, { color: dark ? COLORS.white : COLORS.greyscale900 }]}
      >
        {capturedUri
          ? 'Review your selfie with ID. Retake if needed.'
          : 'Tap below to take or select a selfie with your ID.'}
      </Text>

      <View style={styles.bottomContainer}>
<<<<<<< HEAD
        <Button title="Take Selfie" onPress={openCamera} />
        <Button title="Choose from Gallery" onPress={openGallery} />
        <Button title="Continue" filled onPress={handleContinue} disabled={!capturedUri} />
=======
        <Button
          title={photo ? 'Retake' : 'Take Selfie'}
          style={{
            width: (SIZES.width - 32) / 2 - 8,
            borderRadius: 32,
            backgroundColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary,
            borderColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary
          }}
          textColor={dark ? COLORS.white : COLORS.primary}
          onPress={openCamera}
        />
        <Button
          title={uploading ? 'Uploading…' : 'Continue'}
          filled
          style={styles.continueButton}
          onPress={uploadPhoto}
          disabled={uploading}
        />
>>>>>>> fix-old-version
      </View>
      {uploading && (
        <View style={{ position: 'absolute', top: '50%', left: 0, right: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: { flex: 1 },
  previewContainer: {
    flex: 1,
<<<<<<< HEAD
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
=======
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Urbanist Bold',
    color: COLORS.greyscale900,
    textAlign: 'center',
    marginVertical: 22,
>>>>>>> fix-old-version
  },
  instruction: {
    fontSize: 16,
<<<<<<< HEAD
    textAlign: 'center',
    marginVertical: 12,
    fontFamily: 'Urbanist Regular',
  },
  bottomContainer: {
    gap: 10,
    padding: 16,
=======
    fontFamily: 'Urbanist Regular',
    color: COLORS.greyscale900,
    textAlign: 'center',
    paddingHorizontal: 3,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 32,
    right: 16,
    left: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width - 32,
    alignItems: 'center',
  },
  continueButton: {
    width: (SIZES.width - 32) / 2 - 8,
    borderRadius: 32,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
>>>>>>> fix-old-version
  },
});

export default SelfieWithIdCard;
