# test-task-mysql-nestjs-user-auth

## Prerequisites

After cloning the repository, make sure to create the `.env` and fill in the necessary environment variables.

`.env.example` includes all necessary keys.

## Build & Run

To start the project, run the following command:

```bash
docker-compose up --build
```

## Setup environment

### Download Docker Desktop

Docker Desktop is available for both Windows and macOS. Follow the instructions below to download Docker Desktop:

- **Windows**:
  - Go to the Docker Desktop for Windows download page: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
  - Click on the "Download for Windows" button.
  - Once downloaded, run the installer and follow the on-screen instructions to complete the installation.

- **macOS**:
  - Go to the Docker Desktop for Mac download page: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
  - Click on the "Download for Mac" button.
  - Once downloaded, open the `.dmg` file and drag the Docker icon to your Applications folder.

### Configure Docker

After installing Docker Desktop, you may need to configure it according to your system's requirements. Follow the official documentation for detailed instructions on how to configure Docker:

- **Windows**: [https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)
- **macOS**: [https://docs.docker.com/desktop/install/mac-install/](https://docs.docker.com/desktop/install/mac-install/)

Once Docker Desktop is installed and configured, you can use the provided `docker-compose.yml` file to set up and run your project in Docker containers.

## API Documentation

To access the API documentation, you should use Postman.

**Installing Postman**

To access the API documentation for [Project Name], you'll need to install Postman, a popular API client that makes it easy to explore and test APIs. Follow the instructions below to install Postman on your machine:

1. **Download Postman**:
   - Go to the Postman website: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
   - Choose the appropriate version for your operating system (Windows, macOS, or Linux).
   - Click the "Download" button to download the installer for Postman.

2. **Install Postman**:
   - After the download is complete, run the installer to install Postman on your machine.
   - Follow the on-screen instructions to complete the installation process.

3. **Launch Postman**:
   - Once the installation is finished, open Postman from your applications or using the shortcut created during installation.

**Import the provided Postman collection file from the project root**:

1. Open Postman.
2. Click on "Import" in the top-left corner.
3. Locate and select the file named `test-task-mysql-nestjs-user-auth.postman_collection.json` from the project root.
4. The API documentation will be imported into Postman.

That's it! You have Postman installed on your machine and API documentation imported, allowing you to interact with the API and make requests to the **test-task-mysql-nestjs-user-auth** backend.
