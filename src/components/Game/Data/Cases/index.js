/*
   List of cases
*/
const Cases = [
  {
    "en": {
      "start":[
        "****** FLASH ******", 
        "National treasure stolen from Paris",
        "The treasure has been identified as the elevator from the Eiffel Tower.",
        "Female suspect reported at the scene of the crime.",
        "Your assignement: Track the thief from Paris to her hideout and arrested her!",
        "You must apprehend the thief by Sunday, 5 pm.",
        "Good luck ! "
      ],
      "steps": [
        {
          "city": {
            "name": "Paris",
            "description": "France, with a population of about 55 millions, is famous for its food, wine, fashion and art.",
            "img": "paris.jpg"
          },
          "clues": [
            {
              "Place": "Museum",
              "Guy": "Curator",
              "Clue": "Sources tell me she asked questions about Shinto rituals."
            },
            {
              "Place": "Airport",
              "Guy": "Pilot",
              "Clue": "I saw the person you're looking for and she left in a plane with a red and white flag on its wing. She asked about the recent tennis match."
            },
            {
              "Place": "Palace",
              "Guy": "Soldier",
              "Clue": "All I know is that she asked for a biography of Emperor Jimmu."
            }
          ],
          "destinations": ["Oslo","Tokyo","Reykjavik"]
        },
        {
          "city": {
            "name": "Tokyo",
            "description": "Tokyo, the capital of Japan, is overlooked by Mount Fuji, one of Japan's most famous sights",
            "img": "tokyo.jpg"
          },
          "clues": [
            {
              "Place": "Hotel",
              "Guy": "House detective",
              "Clue": "I heard she wanted to know if she could take a steamer down the Tigris River."
            },
            {
              "Place": "Airport",
              "Guy": "Pilot",
              "Clue": "My sources tell me she said she had a job waiting for her at an oil field."
            },
            {
              "Place": "Palace",
              "Guy": "Privy Councillor",
              "Clue": "The person you're looking for was here and she was disappointed when she found no books about the Assyrians."
            }
          ],
          "destinations": ["Bamako","Baghdad","Moscow"]
        },
        {
          "city": {
            "name": "Baghdad",
            "description": "In ancient times, Iraq was known as Mesopotamia. Modern-day Iraq is bordered by the nations of Jordan, Syria, Turkey, Iran, Kuwait and Saoudi Arabia.",
            "img": "baghdad.jpg"
          },
          "clues": [
            {
              "Place": "Bank",
              "Guy": "Bank guard",
              "Clue": "I heard she changed her money to pounds she was driving a limo."
            },
            {
              "Place": "Library",
              "Guy": "Reference librarian",
              "Clue": "I heard she left in a vehicle flying a red, white and black flag. I noticed a tattoo on her arm."
            },
            {
              "Place": "Foreign Ministry",
              "Guy": "Under secretary",
              "Clue": "a suspicious was here and she said she was planning to have tea with the President."
            }
          ],
          "destinations": ["Athens","Cairo","Rio de Janeiro"]
        },
        {
          "city": {
            "name": "Cairo",
            "description": "Cairo, located at the mouth of the Nile River, is the largest city in African.",
            "img": "cairo.jpg"
          },
          "clues": [
            {
              "Place": "Museum",
              "Guy": "Curator",
              "Clue": "A reliable source told me she wanted study Saxon manuscripts."
            },
            {
              "Place": "Riverfront",
              "Guy": "Sailor's parrot",
              "Clue": "My sources tell me she left in a tugboat flying a red, white and blue flag."
            },
            {
              "Place": "Palace",
              "Guy": "Palace guard",
              "Clue": "The person you're looking for was here and she said she wanted to find out what made Big Ben tick."
            }
          ],
          "destinations": ["London","Colombo","Rome"]
        },
        {
          "city": {
            "name": "London",
            "description": "London, with a population of more than 6,5 million, is the largest city in the United Kingdom. One of its many landmarks is the Big Ben clock tower.",
            "img": "london.jpg"
          },
          "clues": [
            {
              "Place": "Hotel",
              "Guy": "House detective",
              "Clue": "All I know is that something suspicious is going on in town."
            },
            {
              "Place": "Harbor",
              "Guy": "Sailor",
              "Clue": "All I know is that something suspicious is going on in town."
            },
            {
              "Place": "Foreign Ministry",
              "Guy": "Palace guard",
              "Clue": "There goes the suspect"
            }
          ],
          "destinations": []
        },
      ]
    }
  }
];

export default Cases;
