import { View, Text, StyleSheet, ImageBackground, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, illustrations, images } from '../constants';
import Button from '../components/Button';
type Nav = {
  navigate: (value: string) => void
}

const FaceRecognitionScan = () => {
  const { dark } = useTheme();
  const { navigate } = useNavigation<Nav>();
  const [modalVisible, setModalVisible] = useState(false);

  // render modal
  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}>
          <View style={[styles.modalContainer]}>
            <View style={[styles.modalSubContainer, {
              backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
            }]}>
              <Image
                source={illustrations.passwordSuccess}
                resizeMode='contain'
                style={styles.modalIllustration}
              />
              <Text style={styles.modalTitle}>Congratulations!</Text>
              <Text style={[styles.modalSubtitle, {
                color: dark ? COLORS.grayTie : COLORS.greyscale900
              }]}>Please wait a moment, we are preparing for you...</Text>
              <Button
                title="Continue"
                filled
                onPress={() => {
                  setModalVisible(false)
                  navigate("Login")
                }}
                style={{
                  width: "100%",
                  marginTop: 12
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  };

  return (
    <ImageBackground
      source={images.face}
      style={styles.backgroundImage}>
      <Image
        source={images.scanCard}
        resizeMode='contain'
        style={styles.scanCardImage}
      />
      <View style={styles.viewContainer}>
        <Text style={styles.viewTitle}>100%</Text>
        <Text style={styles.viewSubtitle}>Verifying your face...</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Skip"
          style={{
            width: (SIZES.width - 32) / 2 - 8,
            borderRadius: 32,
            backgroundColor: dark ? COLORS.dark2 : "#E9F0FF",
            borderColor: dark ? COLORS.dark2 : "#E9F0FF"
          }}
          textColor={dark ? COLORS.white : COLORS.primary}
          onPress={() => setModalVisible(true)}
        />
        <Button
          title="Start"
          filled
          style={styles.continueButton}
          onPress={() => setModalVisible(true)}
        />
      </View>
      {renderModal()}
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer: {
    position: "absolute",
    bottom: 32,
    right: 16,
    left: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: SIZES.width - 32,
    alignItems: "center"
  },
  skipButton: {
    width: (SIZES.width - 32) / 2 - 8,
    borderRadius: 32,
    backgroundColor: "#F5E7FF",
    borderColor: "#F5E7FF"
  },
  continueButton: {
    width: (SIZES.width - 32) / 2 - 8,
    borderRadius: 32,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary
  },
  scanCardImage: {
    height: SIZES.width - 32,
    width: SIZES.width - 32
  },
  viewContainer: {
    position: "absolute",
    bottom: 124,
    right: 16,
    left: 16,
    justifyContent: "space-between",
    width: SIZES.width - 32,
    alignItems: "center"
  },
  viewTitle: {
    fontSize: 48,
    fontFamily: "Urbanist Bold",
    color: COLORS.white,
    marginBottom: 4
  },
  viewSubtitle: {
    fontSize: 18,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.white
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "Urbanist Bold",
    color: COLORS.primary,
    textAlign: "center",
    marginVertical: 12
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    color: COLORS.black2,
    textAlign: "center",
    marginVertical: 12
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  modalSubContainer: {
    height: 494,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  modalIllustration: {
    height: 180,
    width: 180,
    marginVertical: 22
  }
})

export default FaceRecognitionScan