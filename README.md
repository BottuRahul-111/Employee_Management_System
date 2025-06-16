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
   
   ![HomePage](https://github.com/user-attachments/assets/29bc0b87-8367-4b4a-979e-5b0f61dc08e5)


2. **Employees List**

    ![Employees List](https://github.com/user-attachments/assets/b6edf743-c2bb-488d-88dc-9c03873bd3b7)


3. **Register Employee**

    ![Register Employee](https://github.com/user-attachments/assets/3efecd29-ddc0-46f3-ad00-d97e686156bf)

4. **Update Employee**
    
      ![Update Employee](https://github.com/user-attachments/assets/9126cfe8-06e2-4aea-b4aa-387b068d4e9e)

   


   

