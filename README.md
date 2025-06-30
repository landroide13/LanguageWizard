# 📘 Language Learning App – Ionic Angular - IOS

## 🚀 Introduction

This project is a cross-platform **language learning application** built with **Ionic Angular IOS**.
The app is organized into feature-based modules for **languages**, **levels**, **steps**, and **slideshows**, each designed to handle specific responsibilities. Slideshows use a templating system to support different types of interactive content. Services interact with a remote API and are fully tested using Angular's unit testing framework.

# 🛠️ API endpoints

- languages: GET - http://localhost:3000/languages
- levels: GET - http://localhost:3000/levels
- level: GET - http://localhost:3000/levels/:id
- slideshows: GET - http://localhost:3000/slideshows/:id
- slide: GET - http://localhost:3000/slides/:id

## 🔧 Features

- **Offline Support**  
  Integrated using `@capacitor/network`.When the device is offline, the app gracefully notify the user and change style.

- **Graceful API Error Handling**  
  HTTP errors are caught and displayed with user-friendly messages. 

- **Component-based Layouts**  
  Slides and steps are rendered dynamically based on API content and selected templates.

## 🧩 Main Modules

### 🌐 Languages Module
- Lists available languages from the API(Just one available).
- `LanguageService` handles data retrieval and error management.

### 📊 Levels Module
- Displays CEFR levels (`A0`, `A1`, etc.) for a selected language.
- Tied to steps for progressive learning flow.

### 🧱 Steps Module
- Represents the sequence of steps within a level(Just one is available).

### 🎞️ Slideshow Module
- Renders content dynamically using two main slide templates:
  - **IMAGE_TITLE_SENTENCE**: Displays an image, a title, and audio playback.
  - **LETTER_PRESENTATION**: Focuses on individual letters, supported by audio playback.
- Includes audio support, conditional styling, and horizontal/vertical layout variations based on content presence.

## 🧪 Unit Testing
The main services include **unit tests using Jasmine and Angular TestBed**, with mocked HTTP requests and test for success.

**Tested Services:**
- `LanguageService`
- `LevelService`
- `SlideService`
- `SlideshowService`

```ts
it('should fetch all levels', () => {

  let url = environment.apiUrl + '/levels';

  const mockLevels: Level[] = [
    { id: 1, title: 'A1',languageCode: 'en'},
    { id: 2, title: 'A0',languageCode: 'en'},
  ];

  const mockLevelcResponse: LevelResponse = {
    levels: mockLevels
  }

    service.getLevels().subscribe(levels =>{
      expect(levels).toEqual(mockLevels)
    })
    const req = httpController.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush(mockLevelcResponse);
});
```

## 🌟 Feature Summary

| Feature                   | Description                                                  |
|---------------------------|--------------------------------------------------------------|
| 🔌 Offline Support        |  User-friendly error messages and style change,when is Offline|
| ❗ API Error Handling     | User-friendly error messages on API failure                 |
| 🧱 Modular Architecture   | Languages, Levels, Steps, and Slideshows are independent    |
| 🎨 Template Rendering     | Dynamic slides: `IMAGE_TITLE_SENTENCE`, `LETTER_PRESENTATION` |
| 🧪 Unit Testing           | Fully tested main services using Angular TestBed and spies    |

## 📦 Tech Stack

- **Framework**: Ionic + Angular
- **Language**: TypeScript
- **UI Components**: Ionic UI Components
- **Offline Detection**: `@capacitor/network`
- **Screen Orientation Detection**: '@capacitor/screen-orientation'
- **Testing**: Jasmine + Karma + HttpClientTestingModule

## 📂 Project Structure (Partial)

```
src/
├── app/
│   ├── core/services/
│   │   ├── language.service.ts
│   │   ├── level.service.ts
│   ├── features/
│   │   ├── languages/
│   │   ├── levels/
│   │   ├── steps/
│   │   ├── slideshow/
```

# 🛠️ Build & Run Instructions – Language Learning App

This guide provides step-by-step instructions to **build**, **run**, and understand the dependencies of** the Ionic Angular Language Learning App.

---

## 🚀 Prerequisites

- **Node.js**: ≥ v20.0.0
- **NPM**: ≥ v10.0.0
- **Ionic CLI**: ≥ 7.0.0
- **Capacitor CLI**: ≥ 7.0.0
- **Angular CLI**: ≥ 19.0.0
- **Git**
- **Xcode** (for iOS builds)

---

## 📦 Install Dependencies

```bash
npm install
```

---

## 🔧 Development Server

```bash
ionic serve
```

Opens the app in your default browser at `http://localhost:8100`.

---

## ⚙️ Build for Production

```bash
ionic build
```

The build output will be located in the `www/` directory.

---

### iOS

```bash
ionic cap add ios
ionic cap open ios
```

Then build and run using Xcode.

---

## 🧪 Run Unit Tests

```bash
ng test
```

## 💬 Environment Variables

Update the API URL and other settings in:

```bash
src/environments/environment.ts
```

---

Happy Review! 📘✨

