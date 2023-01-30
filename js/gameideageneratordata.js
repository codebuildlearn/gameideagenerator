const genre_list = [
    {
        "name": "Platformer (Action)",
        "description": "Gameplay based on jumping and climbing",
    },
    {
        "name": "Shooter (Action)",
        "description": "Projectile-based gameplay"
    },
    {
        "name": "Fighter (Action)",
        "description": "Close quarters combat gameplay"
    },
    {
        "name": "Stealth (Action)",
        "description": "Game where the player's ability to avoid detection is either required or increases likelihood of success"
    },
    {
        "name": "Survival (Action)",
        "description": "Player starts in a hostile environment with minimal resources and must survive as long as possible"
    },
    {
        "name": "Rhythm (Action)",
        "description": "Gameplay based on the timing of player input, usually to music"
    },
    {
        "name": "Battle Royale (Action)",
        "description": "Game where players start with little to no equipment, are dropped into a large arena, and must collect equipment and fight to the death as the arena shrinks"
    },
    {
        "name": "Visual Novel (Adventure)",
        "description": "Game where the player reads a story and makes choices that affect the story"
    },
    {
        "name": "Interactive Movie (Adventure)",
        "description": "Pre-rendered cutscenes with interactive elements"
    },
    {
        "name": "Realtime 3D Adventure (Adventure)",
        "description": "Game where the player explores a 3D environment and interacts with objects, usually to solve puzzles"
    },
    {
        "name": "Action Adventure (Action Adventure)",
        "description": "Long term obstacles that require tools to overcome that must be collected as well as short term obstacles that require action elements to overcome like enemy monsters"
    },
    {
        "name": "Metroidvania (Action Adventure)",
        "description": "Game where the player explores a large interconnected environment and collects items that allow them to access new previously inaccessible.  Non-linear gameplay and exploration with backtracking."
    },
    {
        "name": "Action RPG (RPG)",
        "description": "Realtime action gameplay with RPG elements like leveling up and equipment"
    },
    {
        "name": "MMORPG (RPG)",
        "description": "Multiplayer online RPG where large numbers of players work together (and sometimes against each other) to complete quests and explore a large world and progress their characters"
    },
    {
        "name": "Roguelike (RPG)",
        "description": "Game where the player starts with a character and a random map and must explore the map and defeat enemies to progress.  Roguelike games include a permadeath mechanic while Roguelite games do not or make it an optional setting."
    },
    {
        "name": "Tactical (RPG)",
        "description": "Turn-based gameplay where the player controls a small group of characters and must use strategy to defeat enemies"
    },
    {
        "name": "Open World RPG (RPG)",
        "description": "Game where the player controls a character and can interact with the environment to build structures and craft items through non-linear gameplay"
    },
    {
        "name": "JRPG (RPG)",
        "description": "RPG with a more linear story and set cast of characters.  Often has a more anime style art direction."
    },
    {
        "name": "Monster Tamer (RPG)",
        "description": "Player tames monsters to recruit to fight for them."
    },
    {
        "name": "Vehicle Simulation (Simulation)",
        "description": "Designed to closely simulate real life vehicles such as cars, planes, boats."
    },
    {
        "name": "Life Simulation (Simulation)",
        "description": "Designed to closely simulate real or fictional life"
    },
    {
        "name": "City Builder (Simulation)",
        "description": "Game where the player builds and maintains city or town"
    },
    {
        "name": "Turn-based 4X (Strategy)",
        "description": "Turn-based variant of the explore, expand, exploit, and exterminate gameplay loop (also known as 4x)."
    },
    {
        "name": "RTS (Strategy)",
        "description": "Real-time variant of the explore, expand, exploit, and exterminate gameplay loop (also known as 4x)."
    },
    {
        "name": "Artillery (Strategy)",
        "description": "Two or three player turn-based game where players take turns firing artillery at each other where judging the aim based a parabolic curve affected by things such as gravity and wind is a core mechanic."
    },
    {
        "name": "Auto Battler (Strategy)",
        "description": "Played on a grid where player places units, upgrades the units as the game progresses, and combat is in an automated fashion with the player's only ability to affect the outcome is the choice of units to place on the battlefield and their position before the start of the turn."
    },
    {
        "name": "Turn-Based Strategy (Strategy)",
        "description": "Turn-based game where the player controls a small group of characters and must use strategy to defeat enemies"
    }
];

const character_list = [
    {
        "name": "Alien",
    },
    {
        "name": "Angel",
    },
    {
        "name": "Ant",
    },
    {
        "name": "Astronaut",        
    },
    {
        "name": "Baker",
    },
    {
        "name": "Bear",
    },
    {
        "name": "Bird",
    },
    {
        "name": "Bounty Hunter",        
    },
    {
        "name": "Carpenter",
    },
    {
        "name": "Caterpillar",
    },
    {
        "name": "Bee",
    },
    {
        "name": "Beetle",
    },
    {
        "name": "Butterfly",
    },
    {
        "name": "Cat",
    },
    {
        "name": "Centipede",
    },
    {
        "name": "Cockroach",
    },
    {
        "name": "Cricket",
    },
    {
        "name": "Dancer",
    },
    {
        "name": "Demon",
    },
    {
        "name": "Dentist",
    },
    {
        "name": "Doctor",
    },
    {
        "name": "Dog",
    },
    {
        "name": "Dragon",
    },
    {
        "name": "Dragonfly",
    },
    {
        "name": "Elf",
    },
    {
        "name": "Engineer",
    },
    {
        "name": "Fairy",
    },
    {
        "name": "Farmer",
    },
    {
        "name": "Fish",
    },
    {
        "name": "Fly",
    },
    {
        "name": "Frog",
    },
    {
        "name": "Gambler",
    },
    {   
        "name": "Gargoyle",
    },
    {
        "name": "Giant",
    },
    {
        "name": "Ghost",
    },
    {
        "name": "Ghoul",
    },    
    {
        "name": "Goblin",
    },
    {
        "name": "Golem",
    },
    {
        "name": "Grasshopper",
    },
    {
        "name": "Griffin",
    },
    {
        "name": "Grim Reaper",
    },
    {
        "name": "Hacker",
    },
    {
        "name": "Horse",
    },
    {
        "name": "Insect",
    },
    {
        "name": "Inventor",
    },
    {
        "name": "Jester",
    },
    {
        "name": "Jeweler",
    },
    {
        "name": "King",
    },
    {
        "name": "Knight",
    },
    {
        "name": "Ladybug",
    },
    {
        "name": "Leprechaun",
    },
    {
        "name": "Lion",
    },
    {
        "name": "Lumberjack",
    },
    {
        "name": "Maid",
    },
    {
        "name": "Mime",
    },
    {
        "name": "Moth",
    },
    {
        "name": "Mouse",
    },  
    {
        "name": "Muscian",
    },
    {
        "name": "Necromancer",
    },
    {
        "name": "Ninja",
    },
    {
        "name": "Orc",
    },
    {
        "name": "Orphan",
    },
    {
        "name": "Pirate",
    },
    {
        "name": "Praying Mantis",
    },
    {
        "name": "Queen",
    },
    {
        "name": "Ranger",
    },
    {
        "name": "Rat",
    },
    {
        "name": "Robot",
    },
    {
        "name": "Sailor",
    },
    {
        "name": "Scientist",
    },
    {
        "name": "Scorpion",
    },
    {
        "name": "Snail",
    },
    {
        "name": "Snake",
    },
    {
        "name": "Spider",
    },
    {
        "name": "Teacher",
    },
    {
        "name": "Tiger",
    },
    {
        "name": "Thief",
    },
    {
        "name": "Unicorn",
    },
    {
        "name": "Vampire",
    },
    {
        "name": "Wasp",
    },
    {
        "name": "Werewolf",
    },
    {
        "name": "Wizard",
    },
    {
        "name": "Wolf",
    },
    {
        "name": "Worm",
    },
    {
        "name": "Zombie",
    },
];

const GAME_MECHANCIC_LIST = [
    {
        "name": "Teleportation",
        "description": "The player can teleport to different locations"
    },
    {
        "name": "Time Travel",
        "description": "The player can travel through time"
    },
    {
        "name": "Building",
        "description": "The player must build structures to use in the game"
    },
    {
        "name": "Crafting",
        "description": "The player must craft items to use in the game"
    },
    {
        "name": "Increasing Difficulty",
        "description": "The game becomes more difficult as the player progresses"
    },
    {
        "name": "Time Limit",
        "description": "The player must complete the game within a certain time limit"
    },
    {
        "name": "Resource Management",
        "description": "The player must manage resources strategically"
    },
    {
        "name": "Resource Collection",
        "description": "The player must collect resources to use in the game"
    },
    {
        "name": "Spinning Plates",
        "description": "The player must manage multiple tasks at once"
    },
    {
        "name": "Avoiding Unkillable Entities",
        "description": "The player must avoid unkillable objects or enemies"
    },
    {
        "name": "Instant Death",
        "description": "There is something that can kill the player instantly, such as a spikes, bottomless pit, lava"
    },
    {
        "name": "No Win Condition",
        "description": "There is no win condition, the player must just survive"
    },
    {
        "name": "Memory Test",
        "description": "Mechanic that tests the player's ability to memorize things"
    },
    {
        "name": "Constant Movement",
        "description": "The player constantly moves forward"
    },
    {
        "name": "Forced Forward Progression",
        "description": "The camera constantly moves forward forcing the player to react to approaching obstacles and enemies at a predetermined speed",
    },
    {
        "name": "Block Puzzle",
        "description": "Objects of a standard size must be moved around in a specific way",        
    },
    {
        "name": "Block Enemy Path",
        "description": "The player must block the path of enemies to prevent them from reaching the their goal",
    },
    {
        "name": "Disinformation",
        "description": "The player must use disinformation to trick enemies",
    },
    {
        "name": "Switch Up",
        "description": "The player must switch between different modes, characters, or weapons to effectively fight or move through the game",
    },
    {
        "name": "Dexterity Test",
        "description": "Mechanic that tests the player's ability to perform precise actions",
    },
    {
        "name": "Life Counter",
        "description": "The player has a limited number of lives",
    },
    {
        "name": "Auction/Bidding",
        "description": "The player must bid on items or services",
    },
    {
        "name": "Hunger",
        "description": "The player must collect food and eat to survive",
    },
    {
        "name": "Corpse Retrieval",
        "description": "The player loses all possessions when they die and must retrieve them from their corpse",
    },
    {
        "name": "Power Ups",
        "description": "The player can collect power ups to temporarily increase their abilities",
    },
    {
        "name": "Action Points",
        "description": "Each action has a point cost requiring the player to choose which limited set of actions to perform",
    },
    {
        "name": "Card-Based",
        "description": "A collection of cards are used to perform actions"
    },
    {
        "name": "Combo Moves",
        "description": "The player can perform a specific combination of actions to perform a powerful attack or move"
    },
    {
        "name": "Terrible Controls",
        "description": "The controls are difficult to use on purpose as a game mechanic"
    },
    {
        "name": "Rocket Propelled",
        "description": "Movement and attacks are combined in the same mechanic such that the attacks are also a way the player can affect their movement",
    },
    {
        "name": "Grappling Hook",
        "description": "The player can traverse the world with a grappling hook",
    },
    {
        "name": "Yin Yang",
        "description": "The player must balance two opposing forces to progress",
    },
    {
        "name": "No Pain No Gain",
        "description": "The player must endure pain to gain something",
    },
];

