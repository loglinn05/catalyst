# Catalyst, a Laravel Passport authentication system

Welcome to Catalyst, a powerful and seamless authentication system built on Laravel Passport. Catalyst simplifies the process of securing your Laravel applications by providing a robust OAuth2 server implementation. With Catalyst, you can effortlessly manage API authentication and ensure secure access to your resources.

## How to run this project on your machine?

I'm using XAMPP for development, so this is the short guide on how to launch this project on a computer that has XAMPP installed. If you have another web server installed, the process might be different.

1. Clone it to the `htdocs` folder using this command:

    ```bash
    git clone https://github.com/loglinn05/catalyst.git
    ```

2. Run

    ```bash
    composer install
    ```

    and

    ```bash
    npm install
    ```

    to install all the dependencies this project uses.

3. Create a `.env` file, copy the content of `.env.example`, and paste into the `.env` file.

4. Create a database named `catalyst`.

5. Run

    ```bash
    php artisan migrate
    ```

    to create all the tables.

6. Run

    ```bash
    php artisan db:seed
    ```

    to seed the database.

7. Run

    ```bash
    php artisan passport:install
    ```

8. Run

    ```bash
    php artisan key:generate
    ```

    to generate the application key.

9. Run

    ```bash
    npm run dev
    ```

10. Run

    ```bash
    php artisan serve
    ```

    and navigate to the link that will appear in the terminal.

## Contributing

I'm not currently working on this project, sorry. I'm busy.
