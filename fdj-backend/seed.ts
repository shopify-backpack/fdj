import { League, Player, Team } from "./entities";
import { AppDataSource } from "./libs/db";

async function seedDatabase() {
  // Reset the database (optional)
  await AppDataSource.initialize();

  // Clear existing data
  await AppDataSource.createQueryBuilder().delete().from(Player).execute();
  await AppDataSource.createQueryBuilder().delete().from(Team).execute();
  await AppDataSource.createQueryBuilder().delete().from(League).execute();

  // Create leagues
  const league1 = new League();
  league1.name = "English Premier League";
  league1.sport = "Football";
  await AppDataSource.manager.save(league1);

  const league2 = new League();
  league2.name = "French Ligue 1";
  league2.sport = "Football";
  await AppDataSource.manager.save(league2);

  const league3 = new League();
  league3.name = "Supercopa de Espana";
  league3.sport = "Football";
  await AppDataSource.manager.save(league3);

  // Create teams for English Premier League
  const team1 = new Team();
  team1.name = "Arsenal";
  team1.thumbnail = "https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"; // Replace with real thumbnail URL
  team1.league = league1;
  await AppDataSource.manager.save(team1);

  const team2 = new Team();
  team2.name = "Manchester City";
  team2.thumbnail = "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"; // Replace with real thumbnail URL
  team2.league = league1;
  await AppDataSource.manager.save(team2);

  // Create players for Arsenal
  const player1 = new Player();
  player1.name = "Erling Haaland";
  player1.position = "Forward";
  player1.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player1.signinAmount = 1000000; // Example amount
  player1.signinCurrency = "GBP";
  player1.born = new Date("2000-07-21");
  player1.team = team1; // Associate with Arsenal
  await AppDataSource.manager.save(player1);

  const player2 = new Player();
  player2.name = "Kevin De Bruyne";
  player2.position = "Midfielder";
  player2.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player2.signinAmount = 60000000; // Example amount
  player2.signinCurrency = "GBP";
  player2.born = new Date("1991-06-28");
  player2.team = team1; // Associate with Arsenal
  await AppDataSource.manager.save(player2);

  const player3 = new Player();
  player3.name = "Gabriel Jesus";
  player3.position = "Forward";
  player3.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player3.signinAmount = 75000000; // Example amount
  player3.signinCurrency = "GBP";
  player3.born = new Date("1997-04-03");
  player3.team = team1; // Associate with Arsenal
  await AppDataSource.manager.save(player3);

  // Create players for Manchester City
  const player4 = new Player();
  player4.name = "Ruben Dias";
  player4.position = "Defender";
  player4.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player4.signinAmount = 68000000; // Example amount
  player4.signinCurrency = "GBP";
  player4.born = new Date("1997-05-14");
  player4.team = team2; // Associate with Manchester City
  await AppDataSource.manager.save(player4);

  const player5 = new Player();
  player5.name = "Phil Foden";
  player5.position = "Midfielder";
  player5.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player5.signinAmount = 50000000; // Example amount
  player5.signinCurrency = "GBP";
  player5.born = new Date("2000-05-28");
  player5.team = team2; // Associate with Manchester City
  await AppDataSource.manager.save(player5);

  // Create teams for French Ligue 1
  const team3 = new Team();
  team3.name = "Chelsea";
  team3.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  team3.league = league2;
  await AppDataSource.manager.save(team3);

  // Create players for Chelsea
  const player6 = new Player();
  player6.name = "N'Golo Kante";
  player6.position = "Midfielder";
  player6.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player6.signinAmount = 60000000; // Example amount
  player6.signinCurrency = "GBP";
  player6.born = new Date("1991-03-29");
  player6.team = team3; // Associate with Chelsea
  await AppDataSource.manager.save(player6);

  const player7 = new Player();
  player7.name = "Mason Mount";
  player7.position = "Midfielder";
  player7.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player7.signinAmount = 50000000; // Example amount
  player7.signinCurrency = "GBP";
  player7.born = new Date("1999-01-10");
  player7.team = team3; // Associate with Chelsea
  await AppDataSource.manager.save(player7);

  const player8 = new Player();
  player8.name = "Raheem Sterling";
  player8.position = "Forward";
  player8.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player8.signinAmount = 75000000; // Example amount
  player8.signinCurrency = "GBP";
  player8.born = new Date("1994-12-08");
  player8.team = team3; // Associate with Chelsea
  await AppDataSource.manager.save(player8);

  // Create teams for Supercopa de Espana
  const team4 = new Team();
  team4.name = "Barcelona";
  team4.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  team4.league = league3;
  await AppDataSource.manager.save(team4);

  const team5 = new Team();
  team5.name = "Real Madrid";
  team5.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  team5.league = league3;
  await AppDataSource.manager.save(team5);

  // Create players for Barcelona
  const player9 = new Player();
  player9.name = "Robert Lewandowski";
  player9.position = "Forward";
  player9.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player9.signinAmount = 90000000; // Example amount
  player9.signinCurrency = "EUR";
  player9.born = new Date("1988-08-21");
  player9.team = team4; // Associate with Barcelona
  await AppDataSource.manager.save(player9);

  const player10 = new Player();
  player10.name = "Frenkie de Jong";
  player10.position = "Midfielder";
  player10.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player10.signinAmount = 75000000; // Example amount
  player10.signinCurrency = "EUR";
  player10.born = new Date("1997-05-12");
  player10.team = team4; // Associate with Barcelona
  await AppDataSource.manager.save(player10);

  // Create players for Real Madrid
  const player11 = new Player();
  player11.name = "Karim Benzema";
  player11.position = "Forward";
  player11.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player11.signinAmount = 80000000; // Example amount
  player11.signinCurrency = "EUR";
  player11.born = new Date("1987-12-19");
  player11.team = team5; // Associate with Real Madrid
  await AppDataSource.manager.save(player11);

  const player12 = new Player();
  player12.name = "Vinicius Junior";
  player12.position = "Forward";
  player12.thumbnail = "https://thispersondoesnotexist.com/"; // Replace with real thumbnail URL
  player12.signinAmount = 60000000; // Example amount
  player12.signinCurrency = "EUR";
  player12.born = new Date("2000-07-12");
  player12.team = team5; // Associate with Real Madrid
  await AppDataSource.manager.save(player12);

  console.log("Database seeded successfully!");
}

// Execute the seeding function
seedDatabase().catch((error) => console.log("Error seeding database:", error));
