import { createAPIClient, withQS } from "lib/api";

const client = createAPIClient({});

const dummyList = {
    "page": 1,
    "results": [
        {
            "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            "adult": false,
            "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            "release_date": "2021-12-15",
            "id": 634649,
            "title": "Spider-Man: No Way Home",
            "backdrop_path": "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
            "popularity": 10507,
            "video": false
        },
        {
            "poster_path": "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
            "adult": false,
            "overview": "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
            "release_date": "2021-12-16",
            "id": 624860,
            "title": "The Matrix Resurrections",
            "backdrop_path": "/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg",
            "popularity": 9082,
            "video": false
        },
        {
            "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
            "adult": false,
            "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
            "release_date": "2021-11-24",
            "id": 568124,
            "title": "Encanto",
            "backdrop_path": "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
            "popularity": 9023,
            "video": false
        },
        {
            "poster_path": "/sR3iV0Jt080jgvPBtJhs3Tta1y9.jpg",
            "adult": false,
            "overview": "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
            "release_date": "2021-11-24",
            "id": 460458,
            "title": "Resident Evil: Welcome to Raccoon City",
            "backdrop_path": "/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
            "popularity": 8993,
            "video": false
        },
        {
            "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
            "adult": false,
            "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
            "release_date": "2021-09-30",
            "id": 580489,
            "title": "Venom: Let There Be Carnage",
            "backdrop_path": "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg",
            "popularity": 5334,
            "video": false
        },
        {
            "poster_path": "/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
            "adult": false,
            "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
            "release_date": "2021-11-04",
            "id": 512195,
            "title": "Red Notice",
            "backdrop_path": "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
            "popularity": 3249,
            "video": false
        },
        {
            "poster_path": "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
            "adult": false,
            "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
            "release_date": "2021-09-01",
            "id": 566525,
            "title": "Shang-Chi and the Legend of the Ten Rings",
            "backdrop_path": "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
            "popularity": 2651,
            "video": false
        },
        {
            "poster_path": "/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg",
            "adult": false,
            "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
            "release_date": "2012-06-23",
            "id": 1930,
            "title": "The Amazing Spider-Man",
            "backdrop_path": "/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg",
            "popularity": 2008,
            "video": false
        },
        {
            "poster_path": "/1vuix8r1CJ2M6IldR27Z95hWm7e.jpg",
            "adult": false,
            "overview": "A fearless, faithful albeit slightly forgetful Mumbai cop, Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India pulls out all the stops and stunts to thwart a major conspiracy to attack his city.",
            "release_date": "2021-11-05",
            "id": 592508,
            "title": "Sooryavanshi",
            "backdrop_path": "/gg2w8QYf6o5elN95RHtikQaVIsc.jpg",
            "popularity": 1773,
            "video": false
        },
        {
            "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
            "adult": false,
            "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
            "release_date": "2017-07-05",
            "id": 315635,
            "title": "Spider-Man: Homecoming",
            "backdrop_path": "/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg",
            "popularity": 1765,
            "video": false
        },
        {
            "poster_path": "/30ULVKdjBcQTsj2aOSThXXZNSxF.jpg",
            "adult": false,
            "overview": "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
            "release_date": "2021-11-10",
            "id": 585245,
            "title": "Clifford the Big Red Dog",
            "backdrop_path": "/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg",
            "popularity": 1764,
            "video": false
        },
        {
            "poster_path": "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
            "adult": false,
            "overview": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
            "release_date": "2021-12-01",
            "id": 438695,
            "title": "Sing 2",
            "backdrop_path": "/srFi3oLy8tBcpq07xusnAE5XhwE.jpg",
            "popularity": 1736,
            "video": false
        },
        {
            "poster_path": "/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
            "adult": false,
            "overview": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
            "release_date": "2014-04-16",
            "id": 102382,
            "title": "The Amazing Spider-Man 2",
            "backdrop_path": "/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
            "popularity": 1555,
            "video": false
        },
        {
            "poster_path": "/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg",
            "adult": false,
            "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
            "release_date": "2021-11-03",
            "id": 524434,
            "title": "Eternals",
            "backdrop_path": "/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg",
            "popularity": 1631,
            "video": false
        },
        {
            "poster_path": "/AjRUsn8m2znK4mQuYR5fUguBDQM.jpg",
            "adult": false,
            "overview": "A decorated Marine goes on a rescue mission to save his two young sons from an unhuman threat. As their journey takes them in increasingly dangerous directions, the boys will need to leave their childhoods behind.",
            "release_date": "2021-12-03",
            "id": 728526,
            "title": "Encounter",
            "backdrop_path": "/zlj0zHo67xXoj7hvwGtaKRkSdBV.jpg",
            "popularity": 1536,
            "video": false
        },
        {
            "poster_path": "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
            "adult": false,
            "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            "release_date": "2019-06-28",
            "id": 429617,
            "title": "Spider-Man: Far From Home",
            "backdrop_path": "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
            "popularity": 1381,
            "video": false
        },
        {
            "poster_path": "/gSZyYEK5AfZuOFFjnVPUCLvdOD6.jpg",
            "adult": false,
            "overview": "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
            "release_date": "2002-05-01",
            "id": 557,
            "title": "Spider-Man",
            "backdrop_path": "/sWvxBXNtCOaGdtpKNLiOqmwb10N.jpg",
            "popularity": 1408,
            "video": false
        },
        {
            "poster_path": "/etMxKseW67499tUJonLNHXTF538.jpg",
            "adult": false,
            "overview": "Ida Red may not survive her 20-year prison sentence for armed robbery. She turns to her son, Wyatt, for one last job and a chance to regain her freedom.",
            "release_date": "2021-11-05",
            "id": 818192,
            "title": "Ida Red",
            "backdrop_path": "/weneJTnAb1IFI94SKcaXzBFmPKH.jpg",
            "popularity": 1367,
            "video": false
        },
        {
            "poster_path": "/zNXNRLH5wJprUG6B1olaBTNZOjy.jpg",
            "adult": false,
            "overview": "Tired of being locked in a reptile house where humans gawk at them like they are monsters, a ragtag group of Australia’s deadliest creatures plot an escape from their zoo to the Outback, a place where they’ll fit in without being judged.",
            "release_date": "2021-12-03",
            "id": 770254,
            "title": "Back to the Outback",
            "backdrop_path": "/5B22eed7ErxFiYAG4Ksb4eLwKNF.jpg",
            "popularity": 1361,
            "video": false
        },
        {
            "poster_path": "/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
            "adult": false,
            "overview": "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
            "release_date": "2021-10-13",
            "id": 617653,
            "title": "The Last Duel",
            "backdrop_path": "/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg",
            "popularity": 1423,
            "video": false
        }
    ],
    "total_pages": 31748
};

class Movie {
    static list({ ...query }) {
        return {
            data: dummyList,
        };
        // return client.get(withQS("popular", query));
    }
    static get(id, params = {}) {
        return client.get(`movie/${id}`, { params });
    }
}

export default Movie;
