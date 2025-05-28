
## :dog: Ma Adodpt Kan

_Ma Adopt Kan, the adoption pets website, is designed to help people adopt pets easily. The website will allow users to post pets for adoption and request to adopt a pet. The website is easy to use and helps connect caregivers with people looking to adopt pets in need of a home. The website will have many features, such as post management, adopting confirmation system, and login. All of these will help users to adopt easily without using other platforms that are hard to use._

---

##  Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CSC105-2024/G11-MaAdoptKan.git
   cd G11-MaAdoptKan
   ```

---
## :computer: Frontend - React

### :space_invader: Tech Stack

- React.ts
- Vite
- Axios
- React Router DOM
- Tailwind CSS
- Zod
- React Icon

### :bulb: Getting Started - React Client

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The client will be running on [http://localhost:5173](http://localhost:5173).

---

## :open_file_folder: Backend - Node.js

### :space_invader: Tech Stack

- Node.js
- Hono
- JWT

### :electric_plug: API Endpoints

- User 

| Method |          Endpoint        |        Description           |
|--------|--------------------------|------------------------------|
| POST   | `/user/create`           | Create new user.             |
| POST   | `/user/login`            | Login user                   |
| GET    | `/user/get?id={id}`      | Get user by using user ID.   |
| GET    | `/user/getAll`           | Get all users                |
| GET    | `/user/pets`             | Get all pets from user       |



- Request

| Method |       Endpoint        |               Description                    |
|--------|-----------------------|----------------------------------------------|
| POST   | `/request/create`     | Create new request.                          |
| GET    | `/request/get?id={id}`| Get request by using request ID.             |
| GET    | `/request/getAll`     | Get all requests.                            |
| GET    | `/request/pet/:petId` | Get all requests from pet.                   |
| DELETE | `/request/delete/:id` | Delete request.                              |

- Pet

| Method |            Endpoint            |               Description                    |
|--------|--------------------------------|----------------------------------------------|
| GET    | `/pet/create`                  | Create new pet.                              |
| GET    | `/pet/edit`                    | Edit a pet                                   |
| GET    | `/pet/get?petId={petId}`       | Get pet by using pet ID.                     |
| GET    | `/pet/getAll?count={count}     | Get all pets by counting to display.         |
| GET    | `/pet/delete?petId={petId}`    | Delete pet by using pet ID.                  |


### :bulb: Getting Started - Node.js Server

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies & Genrate the database:
   ```bash
   npm install
   npx prisma generate
   ```

3. Create a `.env` file and configure the following variables:
   ```
   DATABASE_URL="file:./dev.db"

   JWT_SECRET_TOKEN=66cb176ce3489eb8020d44d492825a259589203dfc4b480556d97f51a742d2a1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The server will be running on [http://localhost:3000](http://localhost:3000)

