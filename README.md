# Student Groups - Classmates Connector

This project aims to help students easily find and connect with their classmates. By automating the process of retrieving student data from your university platform and organizing it by class, this tool simplifies communication and collaboration between students in the same class.

## Features
- Retrieves student names and their respective classes from the Esprit student platform.
- Groups students by class, allowing them to find and connect with their classmates.
- Provides a simple web interface where students can view their class groups.

## How It Works
1. Connect to the Esprit student platform: [Esprit Student Platform](https://esprit-tn.com/esponline/Online/default.aspx).
2. Run a script in the browser console to send your data to the server.
3. Visit the web app to view your class list and classmates: [Student Groups](https://studentgroups.vercel.app/).

## Steps to Use

### Step 1: Fetch Student Data
1. Go to the Esprit student platform: [Esprit Student Platform](https://esprit-tn.com/esponline/Online/default.aspx).
2. Open the browser developer tools (usually by pressing `F12` or right-clicking and selecting "Inspect").
3. Navigate to the **Console** tab.
4. Copy the script from the [classet.txt](./classet.txt) file and paste it into the console.
5. Press `Enter` to execute the script. Your student name and class will be sent to the server.

### Step 2: View Your Classmates
1. Visit [Student Groups](https://studentgroups.vercel.app/).
2. Find your name and class.
3. View a list of your classmates.

### Project Structure
- **Angular Frontend**: Displays the list of students, grouped by class.
- **Backend (Node.js)**: Handles POST requests to store student information and GET requests to retrieve the list of students.

## Angular Frontend
The Angular app fetches student data and groups them by their class to display on the web interface.

```html
<h1>Salemou Alaikom</h1>

<div *ngFor="let class of groupedStudents | keyvalue">
  <h2>{{ class.key }}</h2> <!-- Display class name -->
  <table border="1" width="100%">
    <thead>
      <tr>
        <th>اسم التلميذ</th>
        <th>الفصل</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let s of class.value">
        <td>{{ s.name }}</td>
        <td>{{ s.email }}</td>
      </tr>
    </tbody>
  </table>
</div>
