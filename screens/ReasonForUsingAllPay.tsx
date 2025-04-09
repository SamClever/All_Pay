import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, SIZES } from '../constants';
import Header from '../components/Header';
import Button from '../components/Button';
import { images } from '../constants';

type Nav = {
  navigate: (screen: string) => void;
};

const baseUrl = 'http://192.168.0.124:8000';

const ReasonForUsingAllPay = () => {
  const { navigate } = useNavigation<Nav>();
  const route = useRoute();
  const { email } = route.params as { email: string };
  const { colors, dark } = useTheme();

  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const [timer, setTimer] = useState<number>(60);
  const [resendAvailable, setResendAvailable] = useState<boolean>(false);

  useEffect(() => {
    if (timer === 0) {
      setResendAvailable(true);
      return;
    }

    const countdown = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);

      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus();
      }
      if (!text && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleResendCode = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(60);
    setResendAvailable(false);
    inputs.current[0]?.focus();
    // Optional: Call your resend OTP API
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join('');
    if (otpCode.length < 6) {
      Alert.alert('Invalid OTP', 'Please enter all 6 digits of the code.');
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/userAuth/verify-registration-otp/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp_code: otpCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('OTP Verification Failed', data.detail || 'The code you entered is incorrect.');
        return;
      }

      Alert.alert('Success', data.message || 'OTP verified successfully!');
      navigate('VerifyYourIdentity');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    }
  };

  const formatTimer = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Verify OTP" />
        <ScrollView style={{ marginVertical: 54 }} showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Image source={images.logo} resizeMode="contain" style={styles.logo} />
          </View>

          <Text style={[styles.title, { color: dark ? COLORS.white : COLORS.black }]}>
            Enter the 6-digit code sent to your email
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputs.current[index] = ref)}
                style={[
                  styles.otpBox,
                  {
                    backgroundColor: dark ? COLORS.dark2 : COLORS.greyscale500,
                    color: dark ? COLORS.white : COLORS.black,
                    borderColor: dark ? COLORS.white : COLORS.black,
                  },
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                textAlign="center"
                autoCorrect={false}
              />
            ))}
          </View>

          <Text style={[styles.timerText, { color: dark ? COLORS.white : COLORS.black }]}>
            {resendAvailable
              ? "Didn't receive the code?"
              : `Code expires in ${formatTimer(timer)}`}
          </Text>

          {resendAvailable && (
            <TouchableOpacity onPress={handleResendCode}>
              <Text style={styles.resendLink}>Resend Code</Text>
            </TouchableOpacity>
          )}
        </ScrollView>

        <View style={styles.bottomContainer}>
          <Button title="Continue" filled style={styles.button} onPress={handleVerifyOtp} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, padding: 16, backgroundColor: COLORS.white },
  logo: { width: 100, height: 100, tintColor: COLORS.primary },
  logoContainer: { alignItems: 'center', justifyContent: 'center', marginVertical: 32 },
  title: {
    fontSize: 24,
    fontFamily: 'Urbanist Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  otpBox: {
    width: 48,
    height: 60,
    borderRadius: 12,
    borderWidth: 1.5,
    fontSize: 22,
    fontFamily: 'Urbanist SemiBold',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Urbanist Regular',
    marginTop: 16,
  },
  resendLink: {
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: 'Urbanist Medium',
    marginTop: 4,
  },
  button: {
    marginVertical: 6,
    width: SIZES.width - 32,
    borderRadius: 30,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 28,
    right: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default ReasonForUsingAllPay;
