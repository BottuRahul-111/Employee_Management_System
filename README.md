# Employee-Management-System
## Project Overview
Employee Management System is a full-stack web application designed to manage employee records efficiently. It provides features to add, update, delete, and view employee details using a user-friendly interface. The application is built using Spring Boot for the backend and React for the frontend, with Oracle Database for data persistence.

## Features
- Employee Registration & Management (CRUD Operations)
- Responsive UI with Bootstrap
- RESTful API Integration
- CORS Issue Resolved Using Build Method
- Alerts for Success & Error Messages
- Confirmation Prompts for Deletion

## Technologies Used
### Frontend (React)
- React.js with React Router
- Bootstrap for Styling
- Axios for API Calls

### Backend (Spring Boot)
- Spring Boot & Spring MVC
- Spring Data JPA (Hibernate)
- RESTful APIs
- Oracle Database

## Installation & Setup
### Prerequisites
- Java 17+
- Node.js & npm
- MySQL or Oracle Database
- IDE (Eclipse/VS Code)

### Frontend Setup (React)
1. Navigate to the frontend folder: `cd emp-management`
2. Install dependencies: `npm install bootstrap react-router-dom axios`
3. Build the react app: `npm run build`

### Backend Setup (Spring Boot)
1. Clone the repository: `git clone https://github.com/yourusername/employee-management.git`
2. Navigate to the backend directory: `cd Employee_Management_System`
3. Configure your Oracle database settings in `application.properties`.
4. Copy the `build/` folder of react  into `src/main/resources/static/`
5. Build the project: `mvn clean install`
6. Run the application: `mvn spring-boot:run`

## Usage
- Navigate to http://localhost:4040/
- Register a new employee, update details, or delete employees.
- View the employee list with proper UI alerts and confirmation prompts.

## Screenshots
1. **HomePage**
   
   ![HomePage](https://github.com/user-attachments/assets/1e307805-c98e-4b9e-867f-5484107eda44)

2. **Employees List**

    ![Employees List](https://github.com/user-attachments/assets/6fbe9b54-351f-4711-96bf-aec784f58dd3)

3. **Register Employee**

    ![Register Employee](https://github.com/user-attachments/assets/9addde9b-1c88-4ed8-88e5-2c006b61dc85)

4. **Update Employee**
    
      ![Update Employee](https://github.com/user-attachments/assets/8024f760-ce4e-4cab-94f9-0e39b17ad8b3)
    
   


   

