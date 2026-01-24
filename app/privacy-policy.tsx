import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header - matches Edit Profile / app UX */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
            <Rect x="42" y="42" width="42" height="42" rx="21" transform="rotate(180 42 42)" fill="white"/>
            <Path d="M18.9748 15.9416L13.9165 21L18.9748 26.0583" stroke="#263574" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M28.0831 21L14.0581 21" stroke="#263574" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.lastUpdated}>Last updated: January 2025</Text>

        <Text style={styles.paragraph}>
          LinguaTrail ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
        </Text>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.paragraph}>
          We may collect information you provide directly, such as your name, email address, and profile details when you create an account or edit your profile. We also collect usage data to improve the app, including which features you use and how you interact with lessons and content.
        </Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          We use your information to provide, maintain, and improve LinguaTrail; to personalize your learning experience; to communicate with you about updates and support; and to analyze usage patterns. We do not sell your personal information to third parties.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Storage & Security</Text>
        <Text style={styles.paragraph}>
          We implement appropriate technical and organizational measures to protect your personal data. Your data may be stored on our servers or with trusted service providers. We retain your information only as long as necessary to provide our services and fulfill the purposes described in this policy.
        </Text>

        <Text style={styles.sectionTitle}>4. Sharing of Information</Text>
        <Text style={styles.paragraph}>
          We may share your information with service providers who assist us in operating the app (e.g., analytics, hosting). We may also disclose information if required by law or to protect our rights, users, or safety.
        </Text>

        <Text style={styles.sectionTitle}>5. Your Rights</Text>
        <Text style={styles.paragraph}>
          Depending on your location, you may have the right to access, correct, or delete your personal data, or to object to or restrict certain processing. You can manage your account and preferences within the app or contact us for assistance.
        </Text>

        <Text style={styles.sectionTitle}>6. Children's Privacy</Text>
        <Text style={styles.paragraph}>
          LinguaTrail is not intended for users under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can delete it.
        </Text>

        <Text style={styles.sectionTitle}>7. Changes to This Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy in the app or by other reasonable means. Your continued use of LinguaTrail after changes constitutes acceptance of the updated policy.
        </Text>

        <Text style={styles.sectionTitle}>8. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have questions about this Privacy Policy or our practices, please contact us at support@linguatrail.com or through the Support option in the app.
        </Text>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    letterSpacing: -0.32,
    fontFamily: 'Urbanist',
  },
  placeholder: {
    width: 42,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  lastUpdated: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5C5C5C',
    marginBottom: 20,
    letterSpacing: -0.28,
    fontFamily: 'Urbanist',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263574',
    marginTop: 24,
    marginBottom: 10,
    letterSpacing: -0.32,
    fontFamily: 'Urbanist',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: '400',
    color: '#263574',
    lineHeight: 24,
    letterSpacing: -0.32,
    marginBottom: 8,
    fontFamily: 'Urbanist',
    opacity: 0.9,
  },
  bottomSpacer: {
    height: 40,
  },
});
