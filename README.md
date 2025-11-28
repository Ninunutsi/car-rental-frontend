
# Car Rental Web Application

A modern car rental web application built with Next.js, TypeScript, MUI, and Zustand. This project allows users to browse cars, make bookings, and manage rentals.


### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_API_UR` - d4aef80eb2ef9dd071329f00f1c3760651f6304b

`NEXT_PUBLIC_BASE_URL` - http://127.0.0.1:8000


## Installation

Install car-rental-frontend with npm

#### Requirements
Make sure you have:

Node.js (v18+) - https://nodejs.org/en/download

Git - https://git-scm.com/install/

#### Clone the Project

```bash
  git clone https://github.com/Ninunutsi/car-rental-frontend
  cd car-rental-frontend
```

#### Install Dependencies
```bash
  npm install
```

#### Create Environment Variables
Inside the project root, create a file named .env:

`NEXT_PUBLIC_API_UR` - d4aef80eb2ef9dd071329f00f1c3760651f6304b
`NEXT_PUBLIC_BASE_URL` - http://127.0.0.1:8000

#### Run the Project
Start the development server:
```bash
  npm run dev
```
Open in your browser: http://localhost:3000


### Troubleshooting

- Ensure Node.js and Git are installed

- Delete node_modules and reinstall:

```bash
 rm -rf node_modules
 npm install
```

- Check .env values

- Restart the terminal


### Technologies Used

- Next.js (React + TypeScript)

- Zustand

- React hook form, Zod

- MUI, Framer Motion

## Project Structure

| Folder             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| /components | Reusable components |
| /app    | application navigation |
| /constants | constants used in the app |
| /libs/CarsList | helper funcitons |
| /modules | complex ui components |
| /store | zustand store |
| /styles | global pallette |
| /utils | helpers(hooks, schemas, types) |
| /views | pages |


