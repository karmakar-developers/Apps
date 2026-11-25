# Privacy Policy for Chess Masters

**Effective Date:** November 25, 2026  
**Last Updated:** November 25, 2026  
**App Name:** Chess Masters  
**Package Name:** `com.karmakardevelopers.chess`  
**Developer:** Karmakar Developers  
**Contact Email:** [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com)

---

## 1. Introduction

Welcome to **Chess Masters**, developed and published by **Karmakar Developers** ("we", "our", or "us"). This Privacy Policy explains how we collect, use, store, share, and protect information when you use the Chess Masters mobile application on Android (the "App").

By downloading, installing, or using Chess Masters, you agree to the handling of information as described in this Privacy Policy. If you do not agree with this Policy, please do not use the App.

---

## 2. Summary of Key Privacy Practices

- **Playable Without an Account:** You can use Chess Masters as a **Guest User** for offline chess matches, engine analysis, tactical puzzles, coach mode, and interactive lessons without signing in.
- **No Email Collection:** Chess Masters does **not** use Firebase Authentication and does **not** collect or store your email address.
- **No Advertising SDKs & No Data Selling:** Chess Masters does **not** display third-party advertisements and does **not** sell, rent, or trade your personal information to third parties.
- **On-Device Storage First:** Match histories, puzzle progress, statistics, app preferences, and free daily usage counters are stored locally on your device.
- **Minimal Permissions:** Chess Masters does not request access to your camera, microphone, contacts, SMS, call logs, precise location, or external photo/media storage.

---

## 3. Information We Collect and Process

### A. Optional Google Play Games Services v2 Sign-In & Leaderboards
You may optionally choose to sign in using **Google Play Games Services (PGS v2)**. When you sign in, Google Play Games Services provides the App with your gaming profile information:
- **Player Identifier:** Your Google Play Games Player ID
- **Gamer Name:** Your Google Play Games display name
- **Player Avatar Image URI:** Used to display and locally cache your gamer avatar inside the App
- **Leaderboard Score (Chess Elo Rating):** When signed in, your Elo rating may be submitted to and displayed on the **Chess Masters** Google Play Games Leaderboard

**Purpose:** To personalize your player badge, synchronize your Chess Elo rating, and display rankings on the public/in-app Leaderboard.  
**Optionality:** Signing in is completely optional; you may use the App in Guest mode at any time without submitting leaderboard scores. When you view the Leaderboard, public leaderboard entries (display names, avatars, ranks, and Elo scores of ranked players) are retrieved from Google Play Games Services.

### B. In-App Purchases & Subscription Information
Chess Masters offers optional paid upgrades (**Chess Masters Pro** — Monthly, Yearly, and Lifetime plans) processed through **Google Play Billing** and managed via **RevenueCat**.
- We and RevenueCat process **purchase tokens, order/transaction identifiers, product IDs, entitlement status (`chess_masters_pro`), subscription renewal/expiration status, and an anonymous app user ID** assigned by RevenueCat.
- **Payment Information:** Credit card numbers, UPI/bank details, and billing addresses are handled exclusively by **Google Play** and are never collected, accessed, or stored by Karmakar Developers or Chess Masters.

### C. Locally Stored Game, Learning, and Usage Data (On-Device Only)
The following data is created and stored **strictly on your device** (using Android Room SQLite database, `SharedPreferences`, and Jetpack DataStore) and is not uploaded to a developer-hosted game server:
- Saved and completed chess game records, move histories, and match results
- Puzzle ratings, solved/attempted puzzle progress, learning guide progress, and chess statistics
- Appearance, board theme, 2D/3D style, sound, vibration, coach voice, and auto-update preferences
- Cached Google Play Games avatar thumbnails for smooth offline/UI rendering
- Daily free-tier usage counters (Game Reviews, Chess Puzzles, Play with Coach sessions, and Assistance actions) used to enforce daily limits and reset locally each day

### D. Audio & Voice Features (Text-to-Speech)
Chess Masters uses Android's system **Text-to-Speech (TTS)** framework (such as Google Speech Services or an installed compatible TTS engine) to read coaching explanations and puzzle learning tips aloud.
- Voice synthesis happens through your device's installed TTS service. Chess Masters does **not** request the `RECORD_AUDIO` permission and does **not** record voice input from your microphone.

### E. Automatically Processed Technical & Security Data
When features requiring network connectivity are used (Google Play Games sign-in/leaderboards, purchase verification/restoration, or checking Google Play In-App Updates), standard network and platform metadata (such as IP address, app version, OS version, and service instance identifiers) may be processed temporarily by our infrastructure providers (**Google LLC** and **RevenueCat**) to fulfill the request, maintain security, prevent fraud, and verify app integrity.

---

## 4. App Permissions Used

Chess Masters declares only the minimum Android permissions required for core functionality:

| Permission / Query | Purpose |
| :--- | :--- |
| `android.permission.INTERNET` | Required for optional Google Play Games Services sign-in and Leaderboards, Google Play Billing / RevenueCat purchase verification, and Google Play In-App Updates. |
| `android.permission.ACCESS_NETWORK_STATE` | Used to detect offline/online connectivity cleanly before leaderboard sync, purchase checks, or network-backed TTS voice checks. |
| `android.permission.VIBRATE` | Provides optional haptic feedback during chess piece moves and invalid-move alerts (can be disabled in Settings). |
| `TTS_SERVICE` Package Queries | Allows Android to bind to installed Text-to-Speech engines (`com.google.android.tts` / compatible TTS providers) for coach voice narration. |

---

## 5. How We Use Information

We use the information described above strictly to:
1. Provide, operate, and maintain core offline and online features of Chess Masters.
2. Authenticate optional Google Play Games Services v2 sessions, display your gamer profile badge, and synchronize Elo leaderboard standings.
3. Process, verify, unlock, and restore **Chess Masters Pro** subscriptions and Lifetime purchases.
4. Enforce daily free usage quotas locally on your device.
5. Check for official App updates via Google Play In-App Updates (configurable in Settings).
6. Prevent fraudulent transactions, unauthorized access, and leaderboard/purchase abuse, and comply with legal obligations.

---

## 6. Third-Party Services & Data Sharing

We do **not** sell your personal data. We rely only on trusted platform and billing service providers to deliver optional online and purchase functionality:

| Service Provider | Data Processed | Purpose | Privacy Policy |
| :--- | :--- | :--- | :--- |
| **Google Play Games Services (Google LLC)** | Play Games Player ID, Gamer Name, Avatar image URI, Elo leaderboard scores | Optional gaming identity, profile badge, and global Elo Leaderboard | [Google Privacy Policy](https://policies.google.com/privacy) |
| **Google Play Billing & In-App Updates (Google LLC)** | Purchase tokens/status, update availability checks, device/Play Store app metadata | Payment processing, license verification, and official Play Store app updates | [Google Privacy Policy](https://policies.google.com/privacy) |
| **RevenueCat** | Purchase tokens, product IDs, entitlement status, anonymous app user ID | Cross-session subscription management and purchase restoration | [RevenueCat Privacy Policy](https://www.revenuecat.com/privacy/) |

---

## 7. Data Security & Encryption

- **In Transit:** All network communications with Google Play Games Services, Google Play Billing, Google Play In-App Updates, and RevenueCat are encrypted using industry-standard **HTTPS / TLS**.
- **At Rest:** Local chess records, preferences, cached avatars, and usage counters reside within Android's application sandbox storage. Gaming identity and billing records are protected by Google Play and RevenueCat security controls.
- While we implement reasonable administrative and technical safeguards, no method of electronic transmission or storage is 100% secure.

---

## 8. Data Retention & Deletion Policy (Google Play Account & Data Deletion)

### A. Deleting Local App Data
- Uninstalling **Chess Masters** or selecting **Clear Storage / Clear Data** in Android Settings immediately deletes all locally stored game histories, puzzle progress, cached avatars, preferences, and daily usage counters from your device.
- Active Google Play purchases remain tied to your Google Play account and can be restored via **Restore** on the Pro screen after reinstalling.

### B. Signing Out & Managing Play Games / Cloud Records
- You can sign out of Google Play Games inside **Settings** / **Leaderboard** in the App, and manage or delete your Play Games profile and game data directly in the **Google Play Games** app or your Google Account settings (`myaccount.google.com`).
- **Requesting Deletion of Billing/Support Records:** Because RevenueCat retains anonymous entitlement/purchase records linked to your RevenueCat anonymous App User ID, you may request deletion of associated RevenueCat customer records (to the extent permitted by law) by contacting us:
  - **Email:** [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com)
  - **Subject Line:** `Data Deletion Request – Chess Masters`
  - **Details to Include:** Your Google Play order ID (if applicable) or Google Play Games Gamer Name / Player ID.
- Upon verifying your request, we will submit deletion for associated RevenueCat customer records within **30 days**, except where retention of transaction records is required for tax, accounting, or fraud-prevention legal compliance.

---

## 9. Children's Privacy

Chess Masters is intended for a general audience and is **not** directed to children under the age of **13** (or the equivalent minimum age of digital consent in your jurisdiction, such as 16 in certain EEA countries). We do not knowingly collect personal information from children under 13 without verifiable parental consent.

If you are a parent or legal guardian and believe your child has submitted personal data through optional online services without your consent, please contact us at [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com), and we will promptly address your request.

---

## 10. Your Privacy Rights (GDPR, UK GDPR, CCPA/CPRA & India DPDP Act)

Depending on your region, you may have the following rights regarding your personal data:
- **Access & Portability:** Request information about personal data processed via our service providers.
- **Correction:** Update your Gamer Name or avatar through your Google Play Games profile.
- **Deletion / Erasure:** Delete local app data on your device, manage/remove your Play Games profile data via Google, or request RevenueCat record deletion (see Section 8).
- **Withdrawal of Consent & Restriction:** Sign out of Google Play Games, disable vibration/coach voice/auto-update in Settings, or use the App purely offline in Guest mode at any time.
- **CCPA/CPRA Notice (California Residents):** We do not sell or share personal information for cross-context behavioral advertising.
- **EEA/UK Supervisory Authority:** You have the right to lodge a complaint with your local data protection authority if you believe your rights have been infringed.

To exercise any privacy right, contact us at [developers.karmakar@gmail.com](mailto:developers.karmakar@gmail.com).

---

## 11. International Data Transfers

Our third-party infrastructure providers (**Google LLC** and **RevenueCat**) may process Play Games, update, or purchase verification metadata on servers located in the United States or other jurisdictions outside your country of residence. Where applicable, such transfers are governed by standard contractual safeguards and adequacy mechanisms provided by those vendors.

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
| **Does your app collect or share any required user data types?** | **Yes** | Optional Google Play Games Services v2 profile/leaderboard + Purchase History / App User IDs for Pro upgrades. |
| **Is all data encrypted in transit?** | **Yes** | HTTPS/TLS for Google Play Games Services, Google Play Billing, In-App Updates, and RevenueCat. |
| **Do you provide a way for users to request that their data is deleted?** | **Yes** | Via email deletion request (`developers.karmakar@gmail.com`), Google Play Games data controls, and local Clear Storage / uninstall. |
| **Personal Info — Name** | Collected (Optional) • App Functionality & Personalization | Google Play Games Gamer Name (collected only if user signs into Play Games). |
| **Personal Info — Email Address** | **Not Collected** | Firebase Auth was removed; app does not request or access user email. |
| **Personal Info — User IDs** | Collected (Optional / Required for Pro) • Shared with RevenueCat (for purchases) & Google Play Games • App Functionality, Fraud Prevention & Account Management | Play Games Player ID (on optional sign-in) and RevenueCat anonymous App User ID (for Pro entitlements). |
| **App Activity / Other User-Generated or Game Content** | Collected (Optional) • App Functionality | Chess Elo score submitted to Google Play Games Leaderboard when signed in. Local games/puzzles stay on device only. |
| **Financial Info — Purchase History** | Collected (Optional, if Pro purchased) • Shared with RevenueCat / Google Play • App Functionality & Fraud Prevention | Subscription/one-time entitlement verification & purchase restoration. No raw card/bank info collected. |
| **Ads** | Does not contain ads | Declare **No ads** in Play Console App Content. |
