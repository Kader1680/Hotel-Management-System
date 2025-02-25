# Hotel Management System

## Overview
The **Hotel Management System** is a web application built with **Laravel (backend)** and **React (frontend)** to manage hotel reservations, room bookings, customers, and admin functionalities efficiently.

## Features
- User Authentication (Login, Register, Logout)
- Admin Dashboard for managing bookings, users, and rooms
- Room listing with availability status
- Booking system with real-time updates
- Payment integration (optional)
- Profile management for users
- API-based architecture (RESTful APIs)

## Technologies Used
### Backend (Laravel)
- Laravel 11
- MySQL Database
- JWT Authentication
- Eloquent ORM
- RESTful API

### Frontend (React)
- React.js with Vite
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- PHP (>= 8.1)
- Composer
- MySQL
- Node.js & npm
- Laravel CLI

### Backend Setup (Laravel)
```bash
cd backend   
composer install  # Install dependencies
cp .env.example .env   
php artisan key:generate   
php artisan migrate --seed  
php artisan serve  
```

### Frontend Setup (React)
```bash
cd frontend   
npm install  
npm run dev 
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/register` | Register a new user |
| POST | `/api/login` | Authenticate user |
| POST | `/api/logout` | Logout user |

### Booking Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/bookings` | Get all bookings |
| POST | `/api/bookings` | Create a new booking |
| GET | `/api/bookings/{id}` | Get booking details |
| PUT | `/api/bookings/{id}` | Update booking |
| DELETE | `/api/bookings/{id}` | Delete booking |

## Environment Configuration
Create a `.env` file in the backend directory and update the following:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hotel_db
DB_USERNAME=root
DB_PASSWORD=
```

## Deployment
### Backend Deployment (Laravel)
- Use **Laravel Forge**, **Vapor**, or **shared hosting**.
- Run database migrations: `php artisan migrate --force`
- Configure `.env` file for production.

### Frontend Deployment (React)
- Build the project: `npm run build`
- Deploy to **Vercel**, **Netlify**, or **any web hosting service**.


