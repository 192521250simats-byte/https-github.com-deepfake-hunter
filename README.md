# Deepfake Hunter

Deepfake Hunter is a React-based web application designed to detect AI-generated content (images, videos, audio, text). It features a secure biometric-style authentication system and a premium dashboard for content analysis.

## Features

- **Biometric Authentication**: Simulated Fingerprint, PIN, and Pattern lock verification.
- **Deepfake Detection**: Upload files to analyze if they are Real or AI-Generated (Mock simulation).
- **Premium UI**: Dark mode, "Electric Violet" aesthetics, and smooth animations.
- **Secure Access**: Age verification and identity check.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (usually `http://localhost:5173`).

## Usage

1. **Login**: Enter your details (Age must be 18+).
2. **Authenticate**: Use the Fingerprint scanner or PIN pad.
3. **Analyze**: Drag and drop a file to see the detection results.

## Technologies

- React + Vite
- Lucide React (Icons)
- CSS Modules / Vanilla CSS
