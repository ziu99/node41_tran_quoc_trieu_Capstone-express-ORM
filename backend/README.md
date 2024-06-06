# My Picture Backend

This is the backend for a picture sharing application.

## Requirements

- Node.js
- Yarn
- Docker (optional)

## Setup

1. Clone the repository
2. Install dependencies:
    ```bash
    yarn install
    ```
3. Start the development server:
    ```bash
    yarn dev
    ```
4. (Optional) Run with Docker:
    ```bash
    docker-compose up
    ```

## API Endpoints

### User

- `POST /users/register`
- `POST /users/login`
- `GET /users/profile`
- `PUT /users/profile`

### Image

- `POST /images`
- `GET /images/:id`
- `PUT /images/:id`
- `DELETE /images/:id`

### Comment

- `POST /comments`
- `GET /comments/:id`

### Save Image

- `POST /save`
- `GET /save`

## License

This project is licensed under the MIT License.
