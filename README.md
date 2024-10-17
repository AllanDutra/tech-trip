## 🛣️ TechTrip

A computing education platform designed for children aged 6 to 10, aligned with the learning objectives outlined in the Computing appendix of Brazil's National Common Curricular Base (BNCC). The platform offers an interactive and gamified experience, making learning both fun and accessible while preparing students for the challenges of the digital world.

![presentation-image](https://ik.imagekit.io/ghmg33v8b/projects/tech-trip/github-presentation_f0OCEudRy.png)

## 🧰 Prerequisites

- Node.js 18.x or higher
- ASP.NET Core Runtime 7.x or higher
- PostgreSQL and PgAdmin
- Windows, macOS, or Linux operating system

## 🔧 Installation

1. Clone the repository:

   ```bash
   $ git clone https://github.com/AllanDutra/tech-trip.git
   ```

2. Move all character image files from the `./images` folder to the `C://Tech-Trip/Characters` directory.

3. Create a blank PostgreSQL database.

4. Run all the scripts located in the `./scripts` folder, in order, using pgAdmin.

5. Configure the server database in the `./server/TechTrip.API/appsettings.json` file:

   ```json
   "TechTripDb": "Server={SERVER_ADDRESS};Port={SERVER_PORT};Database={SERVER_DATABASE};User Id={SERVER_USER};Password={SERVER_PASSWORD}"
   ```

6. Start the server layer:

   ```bash
   $ cd ./server/TechTrip.API
   $ dotnet restore
   $ dotnet build
   $ dotnet run
   ```

   **The server will be running at** `http://localhost:5999`.

7. Start the client layer:

   ```bash
   $ cd ./web
   $ npm install
   $ npm run dev
   ```

   **The application interface will be available at** `http://localhost:5173`.

## 🔨 Tools Used

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height="80" alt="C#"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" height="80" alt=".NET Core"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="80" alt="TypeScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="80" alt="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" height="80" alt="PostgreSQL"/>
</div>

## © Credits

- Images by [Freepik](https://br.freepik.com/)
- Sound Effects by [UNIVERSFIELD](https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=143039) and [Jurij](https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=158187) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=143039)

<hr/>

Developed by [Allan Dutra](https://www.linkedin.com/in/allan-dutra/) and [Analice Mendes](https://www.linkedin.com/in/analicemendescosta/)!
