const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Path ke Next.js app untuk memuat next.config.js dan file .env di lingkungan pengujian
  dir: './',
});

// Konfigurasi Jest
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Environment untuk pengujian berbasis DOM
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // File setup tambahan sebelum menjalankan pengujian
  moduleNameMapper: {
    // Alias untuk komponen dan folder
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    // Penanganan CSS Modules
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(mp3|jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.js',
      // '^@/firebase/(.*)$': '<rootDir>/src/components/firebase/$1',
      '^src/(.*)$': '<rootDir>/src/$1',


  },
  // moduleDirectories: [
  //   'node_modules',
  //   'src', // Memastikan Jest bisa menemukan modul di folder src
  // ],
  // modulePathIgnorePatterns: ['<rootDir>/node_modules/'],

};

// Ekspor konfigurasi untuk memastikan next/jest dapat memuat konfigurasi Next.js secara async
module.exports = createJestConfig(customJestConfig);
