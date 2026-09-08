# ⚛️ React Subscription Pricing UI

A responsive **Subscription Pricing UI** built using React.js. The application displays different subscription plans with their pricing, available features, and unavailable features in a clean and user-friendly layout.

## 🚀 Features

* Displays multiple subscription plans
* Free, Plus, and Pro pricing plans
* Shows monthly pricing for each plan
* Displays available and unavailable features
* Reusable React components
* Clean and responsive user interface
* Component-based development

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Vite

## 📚 Key Concepts Practiced

### 1. React Components

Created reusable components to divide the UI into smaller and manageable sections.

### 2. Props

Used props to pass plan information and feature data between components.

### 3. Props Destructuring

Used props destructuring to directly access values passed to components.

```jsx
const Card = ({ title, price, features }) => {
  // component logic
}
```

### 4. Reusable Components

Used the same component structure to display different subscription plans such as:

* Free
* Plus
* Pro

### 5. Conditional Rendering

Used conditional rendering to display available and unavailable features differently.

### 6. Array Methods

Used JavaScript array methods to dynamically render subscription features.

## 📂 Project Structure

```text
react-subscription-ui/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   └──PricingCard.jsx
|   ├── data/
|       └── planingPrice.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## 🎨 Subscription Plans

| Plan |     Price |
| ---- | --------: |
| Free |  $0/month |
| Plus |  $9/month |
| Pro  | $49/month |

Each plan contains different features and indicates whether a feature is available or unavailable.

## ⚙️ How to Run

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the localhost URL displayed in the terminal.

## 🎯 Learning Outcome

This project helped practice React fundamentals including **components, props, props destructuring, reusable components, conditional rendering, and dynamic UI rendering**.


### 🔗 Connect with me

[LinkedIn](https://www.linkedin.com/in/iam-subash/)


