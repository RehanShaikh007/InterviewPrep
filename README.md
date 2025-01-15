# Interview Prep Application
## Overview
Interview Prep is a responsive, full-stack application designed to help users prepare for interviews. It includes features like creating and viewing submissions, user authentication, and a mobile-friendly interface.
## Features
- **Responsive Design:** Optimized for all device sizes.
- **Authentication:** Secure login and registration with JWT tokens.
- **User-Friendly Navigation:** Hamburger menu for mobile and a clean layout for desktops.
- **Submission Management:** Create and view interview question submissions.

## Screenshots
![image](https://github.com/user-attachments/assets/19f9a239-1d70-429c-9113-725eda310dcf)
![image](https://github.com/user-attachments/assets/11466173-ab50-4e08-943f-5b66db503e1d)
![image](https://github.com/user-attachments/assets/54800412-ed96-4b5a-a0e6-6f8274dbe536)
![image](https://github.com/user-attachments/assets/7b5d9841-7376-42ff-9e30-937a467acf2a)
![image](https://github.com/user-attachments/assets/ead00b9e-5a34-4109-b74c-7d4648dbc226)
![image](https://github.com/user-attachments/assets/45e69272-b301-42f8-9767-12ef2f48c727)
![image](https://github.com/user-attachments/assets/afa6e04d-24df-4cc3-ad8c-1dda0a834661)
![image](https://github.com/user-attachments/assets/7decfa03-f656-49fa-a0cd-c0e3cbe35a3f)




## Design Choices
1. **Frontend Framework:**
- React: Provides a modular, component-based architecture for building dynamic UIs.
- Tailwind CSS: Enables rapid styling with utility classes and ensures responsiveness.
2. **Routing:**
- React Router: Seamless navigation and protected routes.
3. **State Management:**
- React Hooks: useState and useEffect for local component state.
4. **Backend:**
- Node.js with Express: RESTful API to handle authentication and CRUD operations.
- MongoDB: NoSQL database for scalable and flexible data storage.
5. **Responsive Design:**
- A mobile-first approach with conditional rendering and a hamburger menu for smaller screens.
6. **Authentication:**
- JWT (JSON Web Tokens) for secure and stateless user sessions.

## Setup Instructions
### Prerequisites
- Node.js (v14+)
- MongoDB (Atlas or local instance)
- Package Manager: npm or yarn
### Frontend Setup
1. **Clone the Repository:**
``` bash
git clone https://github.com/RehanShaikh007/InterviewPrep.git
cd interview-prep
```
2. **Navigate to Frontend Folder:**
``` bash
cd frontend
```
3. **Install Dependencies:**
``` bash
npm install
```
4. **Start the Frontend:**
``` bash
npm run dev
```
### Backend Setup
1. **Navigate to Backend Folder:**
``` bash
cd backend
```
2. **Install Dependencies::**
``` bash
npm install
```
3. **Set Up Environment Variables: Create a .env file in the server folder and add:**
``` bash
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```
4. **Start the Backend:**
``` bash
npm start
```

## Full Application
1. **Start the backend server:**
``` bash
cd backend
npm start
```
2. **Start the frontend development server:**
``` bash
cd frontend
npm run dev
```
The application will be available at http://localhost:5173 (frontend).

## Dependencies
### Frontend
- **react:** Frontend framework
- **react-router-dom:** Routing
- **tailwindcss:** Utility-first CSS framework
- **axios:** HTTP client for API calls
### Backend
- **express:** Web framework
- **mongoose:** MongoDB ODM
- **jsonwebtoken:** JWT for authentication
- **bcryptjs:** Password hashing
- **cors:** Cross-Origin Resource Sharing

## Contributing
1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch-name.
3. Commit your changes: git commit -m "Added some feature".
4. Push the branch: git push origin feature-branch-name.
5. Open a pull request.

## Contact
For questions or feedback, feel free to reach out:
- **Email:** rehanmukhtarshaikh7@gmail.com
