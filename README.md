# Welcome to your GPT Engineer project

## Project info

**Project**: hackzter-connect 

**URL**: https://run.gptengineer.app/projects/cafcce45-a95b-459b-b21d-c6d107056ead/improve

**Description**: Cases:

I. User Authentication and Registration

A. Registration

Test Case	Description	Expected Result
Valid Registration	Register a new user with valid input (unique username, valid email, strong password).	- User account created successfully.
- Confirmation email sent.
- User redirected to login or profile setup page.
Invalid Username	Attempt registration with an invalid username (e.g., too short, contains special characters).	- Error message displayed, specifying valid username requirements.
Invalid Email	Attempt registration with an invalid email address.	- Error message displayed, indicating an invalid email format.
Weak Password	Attempt registration with a password that does not meet complexity requirements.	- Error message displayed, specifying password requirements.
Duplicate Email	Attempt registration with an email address already in use.	- Error message displayed, indicating the email is already taken.
Email Confirmation	Click the verification link in the confirmation email.	- Account activated.
- User redirected to login.
B. Login

Test Case	Description	Expected Result
Valid Login	Login with a registered and activated account (correct username/email and password).	- Successful login.
- User redirected to the dashboard or home page.
Invalid Credentials	Login with incorrect username/email or password.	- Error message displayed ("Incorrect username or password").
Inactive Account	Attempt login with an account that has not been activated via email.	- Error message displayed, prompting the user to activate their account.
C. Social Login

Test Case	Description	Expected Result
Google Login (New User)	Click "Sign in with Google" and authenticate with a Google account not previously used.	- New Hackzter account created, linked to the Google account.
- User redirected to profile setup (if applicable) or the dashboard.
Google Login (Existing User)	Click "Sign in with Google" and authenticate with a Google account already linked to a Hackzter account.	- Successful login, redirecting to the user's dashboard.
Facebook Login (New User & Existing User)	(Repeat the above tests for Facebook login.)	
D. Password Management

Test Case	Description	Expected Result
Forgot Password	Request a password reset with a registered email address.	- Password reset email sent containing a time-limited reset link.
Reset Password (Valid Link)	Click the reset link and provide a new valid password.	- Password successfully updated.
Reset Password (Invalid Link)	Attempt to use an expired or invalid reset link.	- Error message displayed, instructing the user to request a new reset link.
II. Project Management

Test Case	Description	Expected Result
Create Project	Create a new project with a title, description, and optional sustainability goals.	- Project successfully created.
- User assigned as Team Leader.
- Redirected to the project dashboard.
Add Team Members	Invite existing users to join a project (using their username or email).	- Invitations sent.
- Users added to the project upon accepting.
Create and Assign Tasks	Create new tasks, assign them to team members, set deadlines, and mark task status.	- Tasks displayed on the Kanban board with the correct details.
Manage Task Status	Move tasks across the Kanban board to update their status (To Do, In Progress, Done).	- Task status updated accordingly, reflected on the board and in the project overview.
III. Sustainability Metrics

A. Carbon Footprint Calculator

Test Case	Description	Expected Result
Calculate Footprint	Input project data (materials, energy, etc.) into the calculator.	- Estimated carbon footprint calculated and displayed.
- Recommendations for reducing the footprint provided.
Invalid Data Input	Enter invalid data types or values (e.g., text in a numerical field).	- Error message displayed, specifying the correct input format.
B. Resource Usage Tracker

Test Case	Description	Expected Result
Record Resource Usage	Manually input data for water, energy, or material consumption.	- Data visualized in a graph or chart.
View Historical Data	Navigate through different time periods for resource usage.	- Data for the selected period displayed correctly.
IV. Knowledge Base

Test Case	Description	Expected Result
Browse Articles	Browse articles by category.	- Articles displayed correctly, organized by the selected category.
Search Articles	Search for articles using keywords.	- Relevant articles returned in search results.
View Article	Select and open an article.	- Article content displayed correctly and fully.
V. Communication

Test Case	Description	Expected Result
Send Messages (Group Chat)	Send text messages and files in the project chat room.	- Messages and files delivered to all project members in real-time.
Direct Messaging	Send a direct message to another user.	- Message delivered to the recipient's inbox.
VI. Basic Community Features

Test Case	Description	Expected Result
View User Profiles	View another user's profile (publicly viewable information).	- User profile displayed with basic information (username, bio, etc.).
Search Projects	Use the search bar to find projects by keywords.	- Relevant projects displayed in the search results.
Filter Projects	Use filters to refine project search results (e.g., by category, sustainability goals).	- Project list updated to display only matching projects.
Testing Methodology:

Unit Testing: Test individual functions and components in isolation to ensure they work correctly. (Tools: Jest, Enzyme, React Testing Library)
Integration Testing: Test the interaction between different components and modules.
End-to-End (E2E) Testing: Test complete user flows to ensure the system works as expected from the user's perspective. (Tools: Cypress, Selenium)
This detailed testing plan covers the core functionality of the Hackzter MVP. As you add more features and complexity, you will need to expand your test cases accordingly.

Remember to prioritize testing throughout the development process. It’s much easier and more efficient to identify and fix bugs early on than after the platform has been launched! 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/cafcce45-a95b-459b-b21d-c6d107056ead/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/cafcce45-a95b-459b-b21d-c6d107056ead/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/hackzter-connect.git
cd hackzter-connect
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/cafcce45-a95b-459b-b21d-c6d107056ead/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)