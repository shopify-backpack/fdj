
# FDP Foot Project

This project consists of a backend API (fdj-backend) built using Node.js and TypeORM, and a frontend application (fdj-frontend) built using Angular.

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js (v14 or later)
- PostgreSQL (for the backend database)
- Angular CLI (for the frontend)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/shopify-backpack/fdj
cd fdj
```

### 2. Backend Setup (fdj-backend)

#### Install dependencies:

```bash
cd fdj-backend
npm install
```

#### Environment variables:
Set up the `.env` file with your database configuration. Example:

```bash
DATABASE_URL=postgres://user:password@localhost:5432/fdj
```

#### Running the Backend:

- **Run the development server**:

  ```bash
  npm run run:dev
  ```

- **Run migrations**:

  ```bash
  npm run typeorm:migrate
  ```

- **Generate new migration**:

  ```bash
  npm run typeorm:generate
  ```

- **Revert the last migration**:

  ```bash
  npm run typeorm:revert
  ```

- **Seed the database**:

  ```bash
  npm run seed
  ```

#### Running Tests:

```bash
npm run test
```

### 3. Frontend Setup (fdj-frontend)

#### Install dependencies:

```bash
cd ../fdj-frontend
npm install
```

#### Running the Frontend:

- **Start the development server**:

  ```bash
  npm run start
  ```

  The frontend will be available at `http://localhost:4200`.

- **Run SSR (Server-Side Rendering)**:

  ```bash
  npm run serve:ssr:fdj-frontend
  ```

- **Build the project**:

  ```bash
  npm run build
  ```

- **Run tests**:

  ```bash
  npm run test
  ```

## API Documentation

Once the backend is running, you can access the API documentation at:

[http://localhost:8080/docs](http://localhost:8080/docs)

This provides detailed information on all available endpoints and how to interact with the API.

## License

This project is licensed under the MIT License.
