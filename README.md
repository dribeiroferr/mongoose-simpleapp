# mongoose-simpleapp


A simple api to test a simple GET query

Usage: 

1. git clone this repository.
2. install all dependencies:

    ```
    yarn (if you use yarn)
    npm -i (if you use npm)

    ```
3. starts docker-compose:

    ```
    docker-compose up --build -d

    ```
4. populate mongodb database: 
   
    ```
    yarn populate:db (if you use yarn)
    npm run populate:db (if you use npm)

    ```
5. starts express webserver: 

    ```
    yarn start (if you use yarn)
    npm -i start (if you use npm)

    ```
6. you could access from your browser using the URL below:

    ```
    http://localhost:3000/scans?country=Canada&startDate=2023-06-20&endDate=2023-06-21 (if you need a specified country search)
    http://localhost:3000/scans?&startDate=2023-06-20&endDate=2023-06-21 (if you want the total amount of scans of each reacord grouped by country)

    ```
Considerations: 
    - After populates mongodb database, it will store 20k records for make these tests.
    - I would refactor this application to paginate responses and then deal it faster.
    - I would apply TDD and DDD to this project but I did not have much time to work on it.
    - I would apply a complete swagger documentation, but I did not do it because of the item mentioned above. 
    - CORS is all opened up for example purpose, as .env, and container volumes files aswell.