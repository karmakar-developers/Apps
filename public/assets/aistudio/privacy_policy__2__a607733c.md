# Privacy Policy for Chess Masters

**Effective Date:** November 20, 2026  
**Last Updated:** November 20, 2026  
**App Name:** Chess Masters  
**Package Name:** `com.karmakardevelopers.chess`  
**Developer:** Karmakar Developers  
**Contact Email:** [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com)

---

## 1. Introduction

Welcome to **Chess Masters**, developed and published by **Karmakar Developers** ("we", "our", or "us"). This Privacy Policy explains how we collect, use, store, share, and protect information when you use the Chess Masters mobile application on Android (the "App").

By downloading, installing, or using Chess Masters, you agree to the collection and handling of information as described in this Privacy Policy. If you do not agree with this Policy, please do not use the App.

---

## 2. Summary of Key Privacy Practices

- **Playable Without an Account:** You can use Chess Masters as a **Guest User** for offline chess matches, engine analysis, puzzles, and interactive lessons without signing in.
- **No Advertising SDKs & No Data Selling:** Chess Masters does **not** display third-party advertisements and does **not** sell, rent, or trade your personal information to third parties.
- **On-Device Storage First:** Match histories, puzzle progress, statistics, app preferences, and free daily usage limits are stored locally on your device.
- **Minimal Permissions:** Chess Masters does not request access to your camera, microphone, contacts, SMS, call logs, precise location, or external photo/media storage.

---

## 3. Information We Collect and Process

### A. Information You Provide via Optional Google Sign-In
You may optionally choose to sign in using **Google Sign-In** (powered by Android Credential Manager and **Firebase Authentication**). When you sign in, Google shares the following basic profile information with Firebase Authentication and the App:
- **User Identifier:** Firebase Unique User ID (UID)
- **Name:** Your Google account display name
- **Email Address:** Your Google account email address
- **Profile Photo URL:** Used to display your profile avatar inside the App

**Purpose:** To identify your signed-in session and personalize your player profile badge across game and settings screens.  
**Optionality:** Signing in is completely optional; you may use the App in Guest mode at any time.

### B. In-App Purchases & Subscription Information
Chess Masters offers optional paid upgrades (**Chess Masters Pro** — Monthly, Yearly, and Lifetime plans) processed through **Google Play Billing** and managed via **RevenueCat**.
- We and RevenueCat process **purchase tokens, order/transaction identifiers, product IDs, entitlement status (`chess_masters_pro`), subscription renewal/expiration status, and an anonymous app user ID** assigned by RevenueCat.
- **Payment Information:** Credit card numbers, UPI/bank details, and billing addresses are handled exclusively by **Google Play** and are never collected, accessed, or stored by Karmakar Developers or Chess Masters.

### C. Locally Stored Game, Learning, and Usage Data (On-Device Only)
The following data is created and stored **strictly on your device** (using Android Room SQLite database, SharedPreferences, and Jetpack DataStore) and is not uploaded to a developer-hosted game server:
- Saved and completed chess game records, move histories, and match results
- Puzzle ratings, solved/attempted puzzle progress, and chess statistics
- Appearance, board theme, 2D/3D style, sound, vibration, and auto-update preferences
- Daily free-tier usage counters (Game Reviews, Chess Puzzles, Play with Coach sessions, and Assistance actions) used to enforce daily limits and reset locally each day

### D. Audio & Voice Features (Text-to-Speech)
Chess Masters uses Android's system **Text-to-Speech (TTS)** framework (such as Google Speech Services or an installed compatible TTS engine) to read coaching explanations and puzzle learning tips aloud.
- Voice synthesis happens through your device's installed TTS service. Chess Masters does **not** request the `RECORD_AUDIO` permission and does **not** record voice input from your microphone.

### E. Automatically Processed Technical & Security Data
When features requiring network connectivity are used (Google Sign-In, purchase verification/restoration, loading your Google profile image, or checking Google Play In-App Updates), standard network metadata (such as IP address, app version, OS version, and device/instance identifiers) may be processed temporarily by our infrastructure providers (Google LLC / Firebase and RevenueCat) to fulfill the request, maintain security, prevent fraud, and verify app integrity.

---

## 4. App Permissions Used

Chess Masters declares only the minimum Android permissions required for core functionality:

| Permission / Query | Purpose |
| :--- | :--- |
| `android.permission.INTERNET` | Required for optional Google Sign-In, Google Play Billing / RevenueCat subscription verification, Google Play In-App Updates, and loading your Google profile photo. |
| `android.permission.ACCESS_NETWORK_STATE` | Used to detect offline/online status cleanly before purchase checks or network-backed voice selection. |
| `android.permission.VIBRATE` | Provides optional haptic feedback during chess piece moves and invalid-move alerts (can be disabled in Settings). |
| `TTS_SERVICE` Package Queries | Allows Android to bind to installed Text-to-Speech engines (`com.google.android.tts` / compatible TTS providers) for coach voice narration. |

---

## 5. How We Use Information

We use the data described above strictly to:
1. Provide, operate, and maintain core offline and online features of Chess Masters.
2. Authenticate optional Google Sign-In sessions and display your chosen player profile details.
3. Process, verify, unlock, and restore **Chess Masters Pro** subscriptions and Lifetime purchases.
4. Enforce daily free usage quotas locally on your device.
5. Check for official App updates via Google Play In-App Updates (optional toggle in Settings).
6. Prevent fraudulent transactions, unauthorized access, and abuse, and comply with legal obligations.

---

## 6. Third-Party Services & Data Sharing

We do **not** sell your personal data. We share necessary data only with trusted service providers acting on our behalf to deliver the App's functionality:

| Service Provider | Data Processed | Purpose | Privacy Policy |
| :--- | :--- | :--- | :--- |
| **Google Play Services & Google Play Billing** | Purchase status, billing/update checks, device/account tokens | Payment processing, license/update verification, Credential Manager sign-in | [Google Privacy Policy](https://policies.google.com/privacy) |
| **Firebase Authentication (Google LLC)** | Google UID, display name, email, profile photo URL, auth tokens | Optional user authentication | [Firebase Privacy & Security](https://firebase.google.com/support/privacy) |
| **RevenueCat** | Purchase tokens, product IDs, entitlement status, anonymous app user ID | Cross-session subscription management and purchase restoration | [RevenueCat Privacy Policy](https://www.revenuecat.com/privacy/) |

---

## 7. Data Security & Encryption

- **In Transit:** All network communications between Chess Masters and Firebase Authentication, Google Play Services, RevenueCat, and image endpoints are encrypted using industry-standard **HTTPS / TLS**.
- **At Rest:** Local chess records, preferences, and usage counters reside within Android's application sandbox storage. Cloud authentication and billing records are protected by Google Cloud / Firebase and RevenueCat security controls.
- While we implement reasonable administrative and technical safeguards, no method of electronic transmission or storage is 100% secure.

---

## 8. Data Retention & Deletion Policy (Google Play Account & Data Deletion)

### A. Deleting Local App Data
- Uninstalling **Chess Masters** or selecting **Clear Storage / Clear Data** in Android Settings immediately deletes all locally stored game histories, puzzle progress, preferences, and daily usage counters from your device.
- Active Google Play purchases remain tied to your Google Play account and can be restored via **Restore** on the Pro screen after reinstalling.

### B. Signing Out & Deleting Account Data
- You can sign out of Google Sign-In at any time in **Settings** inside the App, and revoke Chess Masters' access in your Google Account settings (`myaccount.google.com/permissions`).
- **Requesting Account & Cloud Record Deletion:** Because Firebase Authentication retains basic sign-in account metadata and RevenueCat retains anonymous entitlement/purchase records until deleted, you may request permanent deletion of your account and associated cloud identifiers without needing to reinstall the App by contacting us:
  - **Email:** [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com)
  - **Subject Line:** `Data & Account Deletion Request – Chess Masters`
  - **Details to Include:** The email address associated with your Google Sign-In account (and, if applicable, your Google Play order ID or RevenueCat user reference).
- Upon verifying your request, we will delete your Firebase Authentication account record and submit deletion for associated RevenueCat customer records within **30 days**, except where retention of transaction records is required for tax, accounting, or fraud-prevention legal compliance.

---

## 9. Children's Privacy

Chess Masters is intended for a general audience and is **not** directed to children under the age of **13** (or the equivalent minimum age of digital consent in your jurisdiction, such as 16 in certain EEA countries). We do not knowingly collect personal information from children under 13 without verifiable parental consent.

If you are a parent or legal guardian and believe your child has provided personal information (such as through Google Sign-In) without your consent, please contact us at [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com), and we will promptly remove that information.

---

## 10. Your Privacy Rights (GDPR, UK GDPR, CCPA/CPRA & India DPDP Act)

Depending on your region, you may have the following rights regarding your personal data:
- **Access & Portability:** Request a copy of personal data we hold about you.
- **Correction:** Request correction of inaccurate account profile details.
- **Deletion / Erasure:** Request deletion of your account data (see Section 8).
- **Withdrawal of Consent & Restriction:** Sign out of Google Sign-In, disable vibration/coach voice/auto-update in Settings, or discontinue using online features at any time.
- **CCPA/CPRA Notice (California Residents):** We do not sell or share personal information for cross-context behavioral advertising.
- **EEA/UK Supervisory Authority:** You have the right to lodge a complaint with your local data protection authority if you believe your rights have been infringed.

To exercise any privacy right, contact us at [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com).

---

## 11. International Data Transfers

Our third-party infrastructure providers (Google LLC / Firebase and RevenueCat) may process authentication or purchase verification metadata on servers located in the United States or other jurisdictions outside your country of residence. Where applicable, such transfers are governed by standard contractual safeguards and adequacy mechanisms provided by those vendors.

---

## 12. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect app updates, new legal requirements, or changes in third-party integrations. When we update this Policy, we will revise the **"Last Updated"** date at the top of this document. Continued use of the App after any update constitutes acceptance of the revised Privacy Policy.

---

## 13. Contact Us

If you have any questions, concerns, or deletion requests regarding this Privacy Policy, please contact:

- **Developer:** Karmakar Developers  
- **Email:** [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com)  
- **Application:** Chess Masters (`com.karmakardevelopers.chess`)

---

## Appendix: Google Play Console Data Safety Reference

*(Use this reference summary when completing or auditing the **Data Safety** section in Google Play Console.)*

| Question / Category | Recommended Play Console Declaration | Notes |
| :--- | :--- | :--- |
| **Does your app collect or share any required user data types?** | **Yes** | Optional Google Sign-In + Purchase History / App User IDs for Pro subscriptions. |
| **Is all data encrypted in transit?** | **Yes** | HTTPS/TLS for Firebase Auth, RevenueCat, Coil, and Google Play Billing. |
| **Do you provide a way for users to request that their data is deleted?** | **Yes** | Via email deletion request (`developers.karmakar@gmail.com`) + local clear/uninstall + sign-out/Google permissions revocation. |
| **Personal Info — Name** | Collected (Optional) • Not Shared • App Functionality & Account Management | Collected only if user chooses Google Sign-In. |
| **Personal Info — Email Address** | Collected (Optional) • Not Shared • App Functionality & Account Management | Collected only if user chooses Google Sign-In. |
| **Personal Info — User IDs** | Collected (Optional / Required for Pro) • Shared with RevenueCat (for purchases) • App Functionality, Fraud Prevention & Account Management | Firebase UID (on sign-in) and RevenueCat anonymous App User ID (for Pro entitlements). |
| **Financial Info — Purchase History** | Collected (Optional, if Pro purchased) • Shared with RevenueCat / Google Play • App Functionality & Fraud Prevention | Subscription/one-time entitlement verification & purchase restoration. No raw card/bank info collected. |
| **App Activity / Game & Puzzle Data** | Stored locally on device only (not transmitted off device) | Room DB & DataStore Preferences remain on device. |
| **Ads** | Does not contain ads | Declare **No ads** in Play Console App Content. |
