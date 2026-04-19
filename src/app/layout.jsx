import { LanguageProvider } from '../context/LanguageContext';
import './globals.css';

const SITE_URL = 'https://ds-reference.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Texcoco Data Science — Free Data Science Education',
    template: '%s · Texcoco Data Science',
  },
  description:
    'Free, no-nonsense data science education: the math behind every algorithm, feature engineering notebooks, statistics compendium, and formula reference. No paywalls. By Sam Villa-Smith, PhD. Available in English, Spanish, and Japanese.',
  keywords: [
    'data science',
    'machine learning',
    'linear regression',
    'gradient descent',
    'feature engineering',
    'statistics',
    'probability',
    'ordinary least squares',
    'R squared',
    'bias variance tradeoff',
    'overfitting',
    'data encoding',
    'SMOTE',
    'outlier detection',
    'free data science course',
    'ciencia de datos',
    'データサイエンス',
    'Sam Villa-Smith',
  ],
  authors: [{ name: 'Sam Villa-Smith, PhD' }],
  creator: 'Sam Villa-Smith, PhD',
  publisher: 'Texcoco Data Science',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-MX': '/',
      'ja-JP': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Texcoco Data Science',
    title: 'Texcoco Data Science — Free Data Science Education',
    description:
      'The math behind every algorithm, feature engineering notebooks, and statistics references. Free, multilingual (EN/ES/JA). By Sam Villa-Smith, PhD.',
    locale: 'en_US',
    alternateLocale: ['es_MX', 'ja_JP'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texcoco Data Science — Free Data Science Education',
    description:
      'The math behind every algorithm. Feature engineering, statistics, and a probability compendium. Free, trilingual. By Sam Villa-Smith, PhD.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'education',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Texcoco Data Science',
      description:
        'Free data science education — mathematics, feature engineering, and statistics. Multilingual (English, Spanish, Japanese).',
      inLanguage: ['en', 'es', 'ja'],
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Sam Villa-Smith',
      honorificSuffix: 'PhD',
      jobTitle: 'Data Scientist',
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#org`,
      name: 'Texcoco Data Science',
      url: SITE_URL,
      founder: { '@id': `${SITE_URL}/#person` },
      description:
        'Free data science education covering the mathematics of machine learning, feature engineering, and applied statistics.',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;600&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
