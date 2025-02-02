# Num-fact API
Num-Fact is a simple API that classifies numbers based on mathematical properties. It determines whether a number is prime, perfect, an Armstrong number, or odd/even, and provides an interesting fact about it using the Numbers API.

## Features
- Classifies numbers based on mathematical properties
- Provides fun facts about numbers
- Validates input to ensure only integers are accepted
- Returns appropriate HTTP status codes
- CORS enabled for cross-origin access
- Deployed to a publicly accessible endpoint

## API Endpoint
### GET `/api/classify-number?number=<integer>`
This endpoint accepts a number as a query parameter and returns a JSON response containing:
- Whether the number is prime
- Whether the number is perfect
- Properties (odd/even, Armstrong number)
- Sum of the digits
- A fun fact about the number

### Example Request
```sh
GET https://your-deployed-url.com/api/classify-number?number=371
```
Success Response (200 OK)
```sh
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
Error Response (400 Bad Request)
```sh
{
    "number": "alphabet",
    "error": true
}
```

## Possible Properties Field Values

- `["armstrong", "odd"]` - If the number is both an Armstrong number and odd.
- `["armstrong", "even"]` - If the number is an Armstrong number and even.
- `["odd"]` - If the number is not an Armstrong number but is odd.
- `["even"]` - If the number is not an Armstrong number but is even.

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Oluwademiladeogo/Num-fact.git
   cd Num-fact
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Deployment

The API is deployed to a publicly accessible endpoint.

## Code Quality & Best Practices

- Organized code structure
- Input validation and error handling
- Avoids hardcoded values
- Uses external API (Numbers API) for fun facts

## Technologies Used

- Node.js
- Express.js
- Numbers API (for fun facts)

## License

This project is licensed under the MIT License.
