export const productData = {
  products: [
    {
      name: "Smart Wallets",
      description: "Secure hardware wallet with built-in biometric authentication and SEC@R integration. Carry your digital identity safely with multi-layer protection.",
      price: "$299",
      badge: "Bestseller",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      features: [
        "Biometric fingerprint scanner",
        "NFC & Bluetooth connectivity",
        "Tamper-proof secure element chip",
        "Real-time consent notification",
        "Multi-device authentication support",
        "Battery life: 6 months",
        "Water & dust resistant (IP67)",
        "Supports multiple Data Principal profiles"
      ],
      specifications: [
        { label: "Dimensions", value: "95 x 65 x 8 mm" },
        { label: "Weight", value: "85g" },
        { label: "Material", value: "Aircraft-grade aluminum" },
        { label: "Connectivity", value: "NFC, Bluetooth 5.2" },
        { label: "Battery", value: "Li-ion rechargeable" },
        { label: "Biometric", value: "Capacitive fingerprint sensor" },
        { label: "Storage", value: "Encrypted secure element" },
        { label: "Certification", value: "FIDO2, CC EAL6+" }
      ],
      security: [
        {
          title: "Hardware Encryption",
          description: "AES-256 encryption with secure element chip prevents unauthorized data access even if wallet is stolen."
        },
        {
          title: "Biometric Lock",
          description: "Fingerprint authentication ensures only the Data Principal can authorize transactions."
        },
        {
          title: "Anti-Tamper Protection",
          description: "Physical tampering triggers automatic data wipe and alert notification to SEC@R platform."
        }
      ],
      useCases: [
        "Banking Transactions",
        "Digital Payments",
        "Identity Verification",
        "Access Control",
        "Document Signing",
        "Cryptocurrency Storage"
      ]
    },
    {
      name: "Smart Rings",
      description: "Discreet wearable authentication device that enables seamless multi-device layer verification. Perfect for continuous authentication without disruption.",
      price: "$199",
      badge: "New",
      image: "https://images.unsplash.com/photo-1651752090085-50375d90bf8b?crop=entropy&cs=srgb&fm=jpg&q=85",
      features: [
        "Continuous wear authentication",
        "Gesture-based consent approval",
        "NFC-enabled for tap authentication",
        "Heart rate & pulse verification",
        "Waterproof design",
        "Battery life: 4 days",
        "Wireless charging",
        "Lightweight titanium construction"
      ],
      specifications: [
        { label: "Sizes Available", value: "6, 7, 8, 9, 10, 11, 12" },
        { label: "Weight", value: "4-6g (size dependent)" },
        { label: "Material", value: "Titanium with ceramic coating" },
        { label: "Connectivity", value: "NFC, Bluetooth Low Energy" },
        { label: "Battery", value: "90 mAh rechargeable" },
        { label: "Sensors", value: "PPG, Accelerometer, NFC" },
        { label: "Water Resistance", value: "5 ATM (50m)" },
        { label: "Charging", value: "Qi wireless charging" }
      ],
      security: [
        {
          title: "Continuous Biometric Monitoring",
          description: "Uses heart rate patterns and pulse signature to continuously verify wearer identity."
        },
        {
          title: "Gesture Authentication",
          description: "Secure gesture patterns provide quick consent approval for transactions."
        },
        {
          title: "Removal Detection",
          description: "Automatically locks and requires re-authentication when removed from finger."
        }
      ],
      useCases: [
        "Contactless Payments",
        "Building Access",
        "Device Unlocking",
        "Transaction Approval",
        "Health Records Access",
        "Continuous Authentication"
      ]
    },
    {
      name: "Smart USB Drives",
      description: "Encrypted USB storage device with built-in authentication processor. Protects sensitive data with multi-layer consent verification before access.",
      price: "$149",
      image: "https://images.unsplash.com/photo-1587145820098-23e484e69816?q=85&fm=jpg&crop=entropy&cs=srgb",
      features: [
        "Hardware-encrypted storage",
        "Built-in fingerprint scanner",
        "Auto-lock on removal",
        "SEC@R platform integration",
        "Real-time access logging",
        "Multiple user profiles",
        "Self-destruct option",
        "Cross-platform compatibility"
      ],
      specifications: [
        { label: "Storage Capacity", value: "64GB / 128GB / 256GB" },
        { label: "Interface", value: "USB 3.2 Gen 2 Type-C" },
        { label: "Transfer Speed", value: "Read: 540 MB/s, Write: 480 MB/s" },
        { label: "Encryption", value: "AES 256-bit hardware encryption" },
        { label: "Biometric", value: "Capacitive fingerprint sensor" },
        { label: "Compatibility", value: "Windows, macOS, Linux, Android" },
        { label: "Dimensions", value: "60 x 18 x 9 mm" },
        { label: "Warranty", value: "5 years limited" }
      ],
      security: [
        {
          title: "Hardware Encryption",
          description: "All data encrypted at rest with AES-256. Decryption only after successful authentication."
        },
        {
          title: "Brute Force Protection",
          description: "Automatic data wipe after 10 failed authentication attempts."
        },
        {
          title: "Access Logging",
          description: "Complete audit trail of all access attempts synced with SEC@R platform."
        }
      ],
      useCases: [
        "Secure File Storage",
        "Data Transfer",
        "Backup & Recovery",
        "Portable Applications",
        "Confidential Documents",
        "Compliance Storage"
      ]
    },
    {
      name: "Smart USB for Digital Signature",
      description: "Specialized USB device for cryptographic digital signatures with SEC@R consent verification. Ensures legally binding signatures with multi-device authentication.",
      price: "$249",
      badge: "Enterprise",
      features: [
        "PKI-based digital signatures",
        "Multi-device consent verification",
        "Tamper-evident logging",
        "Certificate management",
        "Biometric signature authorization",
        "Time-stamping service",
        "Audit trail generation",
        "HSM-level security"
      ],
      specifications: [
        { label: "Interface", value: "USB 3.2 Type-C" },
        { label: "Crypto Chip", value: "CC EAL5+ certified" },
        { label: "Key Storage", value: "Up to 256 key pairs" },
        { label: "Algorithms", value: "RSA 4096, ECDSA, EdDSA" },
        { label: "Certificate Support", value: "X.509, PGP" },
        { label: "Standards", value: "FIPS 140-2 Level 3" },
        { label: "Signature Speed", value: "<500ms per signature" },
        { label: "Warranty", value: "5 years + support" }
      ],
      security: [
        {
          title: "HSM-Grade Security",
          description: "Hardware Security Module level protection ensures private keys never leave the device."
        },
        {
          title: "Multi-Factor Signature",
          description: "Requires biometric + PIN + SEC@R consent for legally binding signatures."
        },
        {
          title: "Non-Repudiation",
          description: "Cryptographic proof and audit trail prevent signature denial."
        }
      ],
      useCases: [
        "Contract Signing",
        "Legal Documents",
        "Financial Transactions",
        "Government Forms",
        "Regulatory Compliance",
        "Code Signing"
      ]
    },
    {
      name: "Smart Watches",
      description: "Advanced smartwatch with continuous authentication and real-time consent management. Your wrist becomes a powerful authentication device.",
      price: "$399",
      badge: "Premium",
      features: [
        "Continuous biometric monitoring",
        "Real-time consent notifications",
        "Multi-device coordination",
        "Offline authentication support",
        "Secure NFC payments",
        "Health-based authentication",
        "Emergency lockdown mode",
        "5-day battery life"
      ],
      specifications: [
        { label: "Display", value: "1.4'' AMOLED touchscreen" },
        { label: "Resolution", value: "454 x 454 pixels" },
        { label: "Material", value: "Stainless steel / Titanium" },
        { label: "Connectivity", value: "NFC, Bluetooth 5.3, Wi-Fi" },
        { label: "Battery", value: "420 mAh, 5-day typical use" },
        { label: "Sensors", value: "PPG, ECG, Accelerometer, Gyro" },
        { label: "Water Resistance", value: "5 ATM + IP68" },
        { label: "Compatibility", value: "iOS 14+, Android 9+" }
      ],
      security: [
        {
          title: "Biometric Fusion",
          description: "Combines heart rate, ECG patterns, and wrist detection for continuous identity verification."
        },
        {
          title: "Context-Aware Authentication",
          description: "Uses location, behavior patterns, and device proximity for intelligent security decisions."
        },
        {
          title: "Secure Enclave",
          description: "Dedicated security chip stores credentials and processes authentication locally."
        }
      ],
      useCases: [
        "Contactless Payments",
        "Access Control",
        "Transaction Approval",
        "Health Authentication",
        "Travel & Transit",
        "Workplace Security"
      ]
    }
  ],
  benefits: [
    {
      title: "Unbreakable Authentication",
      description: "Multiple hardware devices create an authentication mesh that's virtually impossible to bypass. Attackers would need physical access to all devices.",
      icon: "Shield"
    },
    {
      title: "Seamless User Experience",
      description: "Authentication happens in the background. Users enjoy convenience while maintaining the highest security standards.",
      icon: "Zap"
    },
    {
      title: "Complete Ecosystem",
      description: "All devices work together seamlessly through the SEC@R platform, providing comprehensive protection across all touchpoints.",
      icon: "Fingerprint"
    }
  ]
};