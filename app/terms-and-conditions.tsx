import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';

export default function TermsAndConditionsScreen() {
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
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.lastUpdated}>Last updated: January 2025</Text>

        <Text style={styles.paragraph}>
          Welcome to LinguaTrail. By accessing or using our mobile application, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the app.
        </Text>

        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          By creating an account or using LinguaTrail, you confirm that you have read, understood, and agree to these Terms and our Privacy Policy. You must be at least 13 years old to use the app.
        </Text>

        <Text style={styles.sectionTitle}>2. Use of the Service</Text>
        <Text style={styles.paragraph}>
          LinguaTrail provides language learning tools, including lessons, practice sessions, and AI-powered features. You agree to use the service only for lawful purposes and in accordance with these Terms. You may not misuse the app, attempt to gain unauthorized access to our systems or other users' accounts, or use the service to distribute harmful or offensive content.
        </Text>

        <Text style={styles.sectionTitle}>3. Account & Subscription</Text>
        <Text style={styles.paragraph}>
          You may need to create an account to access certain features. You are responsible for keeping your login credentials secure. Some features may require a paid subscription. Subscription terms, including billing and cancellation, will be presented at the time of purchase and may be governed by separate terms.
        </Text>

        <Text style={styles.sectionTitle}>4. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All content, features, and functionality of LinguaTrail (including but not limited to text, graphics, logos, and software) are owned by us or our licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.
        </Text>

        <Text style={styles.sectionTitle}>5. Disclaimer of Warranties</Text>
        <Text style={styles.paragraph}>
          LinguaTrail is provided "as is" and "as available." We do not warrant that the app will be uninterrupted, error-free, or free of harmful components. We disclaim all warranties, express or implied, to the fullest extent permitted by law.
        </Text>

        <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the app. Our total liability shall not exceed the amount you paid us, if any, in the twelve months preceding the claim.
        </Text>

        <Text style={styles.sectionTitle}>7. Termination</Text>
        <Text style={styles.paragraph}>
          We may suspend or terminate your access to LinguaTrail at any time for any reason, including violation of these Terms. You may stop using the app and delete your account at any time. Provisions that by their nature should survive termination will remain in effect.
        </Text>

        <Text style={styles.sectionTitle}>8. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          We may update these Terms from time to time. We will notify you of material changes via the app or by email. Your continued use of LinguaTrail after such changes constitutes acceptance of the updated Terms.
        </Text>

        <Text style={styles.sectionTitle}>9. Governing Law</Text>
        <Text style={styles.paragraph}>
          These Terms are governed by the laws of the jurisdiction in which we operate, without regard to conflict of law principles. Any disputes shall be resolved in the courts of that jurisdiction.
        </Text>

        <Text style={styles.sectionTitle}>10. Contact</Text>
        <Text style={styles.paragraph}>
          For questions about these Terms and Conditions, please contact us at support@linguatrail.com or through the Support option in the app.
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
