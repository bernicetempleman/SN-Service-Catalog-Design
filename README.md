# Service-Catalog-Design
Service Request Management system provides an intuitive interface with predefined work flows for IT requests to be reliably submitted, routed, approved, monitored and delivered with minimum human interference. Every individuals developed complex Service Catalog using Custom Table, including Catalog Clients scripts/Catalog UI policies, and complex Workflows.

- Composite service request
- Minimum one custom table
- Minimum four tasks created by workflow
- Notifications
- Form design should have between 10 and 15 variables at minimum
- Set different stages / set different state of the RITM

## Technologies Used
- ServiceNow
- IT Service Management
- IT Infrastructure Library
- JavaScript

## Features

List of features ready and TODOs for future development
- Submit a recipe to be published
- Notifications, approvals, and tasks sent to employees, groups, managers and submitter concerning status and tasks
- Once approved, the recipe is entered into the database to be published

To-do list:
- Add access to view recipes in portal
- Create a seperate table for recipe users

## Getting Started
(Create a recipe table and populate with data)
![image](https://user-images.githubusercontent.com/12488769/144730651-b2b83062-d5ee-4942-8133-4e27426c6762.png)

(Create Recipe approval group and users belonging to group)
![image](https://user-images.githubusercontent.com/12488769/144730673-f345b54a-bc16-4308-8c3c-976e20fe7bee.png)

(Create a catalog form to submit a new recipe)
![image](https://user-images.githubusercontent.com/12488769/144730777-d66e73ba-b467-40df-9a04-ca572b414f56.png)

![image](https://user-images.githubusercontent.com/12488769/144730807-2eacf2ad-ecd3-43b0-a257-83a324a11e15.png)

![image](https://user-images.githubusercontent.com/12488769/144730829-2c559882-c877-47ec-a2b7-04486925a80a.png)

![image](https://user-images.githubusercontent.com/12488769/144730861-7ab10622-bcd8-4dfb-8e99-78ea39024aac.png)

![image](https://user-images.githubusercontent.com/12488769/144730889-1d1909be-2b6d-4aea-87ed-9bea0eb42705.png)

![image](https://user-images.githubusercontent.com/12488769/144730927-732c4e0f-fbea-47ec-81ec-49dc787e666d.png)

![image](https://user-images.githubusercontent.com/12488769/144730982-575e65d6-31af-4ac7-908b-c565f633c1c0.png)

Catalog Client Scripts
![image](https://user-images.githubusercontent.com/12488769/144731038-a8ccfb14-e42d-4b1c-8177-a1eee74df225.png)

(Create workflows for the recipe submission process)![image](https://user-images.githubusercontent.com/12488769/144731125-bbdc2ecd-c6e3-4380-bf26-c5605daa9153.png)

(Create a script to insert a new record after approval)
![image](https://user-images.githubusercontent.com/12488769/144731176-cd9ef73b-80a6-4b03-8cb1-2884992a5221.png)

![image](https://user-images.githubusercontent.com/12488769/144731202-32fd19fc-2d19-42b2-ad21-a394f5ff9e8f.png)

![image](https://user-images.githubusercontent.com/12488769/144731269-622fe72c-087a-4530-9aa3-10d2f58a481a.png)

## Usage
Users can go to the Service Catalog and enter a request.

## Contributors
Here list the people who have contributed to this project. 
- Bernice Templeman

## Roles and Responsibilities
- Worked on ServiceNow developer to design a catalog form, workflow, and scripts.
- Created Workflow to provide a drag-and-drop interface for automating multi-step processes across the platform.
- Wrote script include to store JavaScript functions and classes for use by server scripts.
- Wrote Field validation on catalog client scripts using JavaScript.
- Created ITIL group and ITIL users to test the flow project.
- Created a catalog Item list for users to order an item.
- Used Request Item workflow with the workflow that is created for user/group approval and handles tasks.
- Combined Script Includes and Catalog Client Script to store and pass information to a custom table.

## License
This site was built using [GitHub](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).

This project uses the following license: [license_name](https://github.com/bernicetempleman/PROJECT-NAME).
